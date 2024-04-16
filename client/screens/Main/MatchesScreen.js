// MatchesScreen.js

import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MatchList from '../../components/MatchList';
import api from '../../api/axios'
import { useLoggedInUser} from '../../components/context';


const MatchesScreen = () => {
  // Dummy data for demonstration
  const { loggedInUser } = useLoggedInUser(); // Destructure loggedInUser from context
  const [chattedUsers, setChattedUsers] = useState([]);

  useEffect(() => {
    const fetchChattedUsers = async () => {
      try {
        if (!loggedInUser || !loggedInUser._id) return;

        const response = await api.get(`http://10.24.70.104:3011/api/getUsersInChat/${loggedInUser._id}`, {
          headers: {
            'Authorization': `Bearer ${loggedInUser.token}`,
          },
        });
        
        console.log('Fetched chatted users:', response.data); // Log the fetched data
        setChattedUsers(response.data);
      } catch (error) {
        console.error('Error fetching chatted users:', error);
      }
    };

    fetchChattedUsers();
  }, [loggedInUser]);
  console.log(chattedUsers)
  const matches = [
    { _id: 1, name: 'John', linkedin: 'https://linkedin.com', avatar: require('../../assets/avatar1.jpg') },
    { _id: 2, name: 'Alice', bio: 'Graphic Designer', avatar: require('../../assets/avatar2.jpg') },
    { _id: 3, name: 'Bob', bio: 'Product Manager', avatar: require('../../assets/avatar3.jpg') },
  ];

  const handlePressMatch = (matchId) => {
    // Handle press on a match item
    console.log('Match selected:', matchId);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontWeight: "400", fontSize: 30, marginBottom: 30 }]}>Match Screen</Text>
      <MatchList matches={chattedUsers} onPressMatch={handlePressMatch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
  },
});

export default MatchesScreen;
