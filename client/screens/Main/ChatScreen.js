import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import api from '../../api/axios';
import Card from '../../components/Card'; // Assuming Card component is already defined
import { useLoggedInUser } from '../../components/context';
import { useNavigation } from '@react-navigation/native';
const ChatScreen = ({navigation}) => {

  const { loggedInUser } = useLoggedInUser();
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateToMatches = () => {
    navigation.navigate("Matches");
  };
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch users from API
        const response = await api.get('/api/getAllUsers',
        {
          headers: {
            'Authorization': `Bearer ${loggedInUser.token}`,
          },
        });
        const filteredUsers = response.data.filter(user => user._id !== loggedInUser._id);
        console.log('Fetched users:', filteredUsers);
        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchActiveUserData = async () => {
      try {
        if (users.length > 0) {
          const activeUserId = users[currentIndex]._id;
          const response = await api.get(`/api/getAllUsers/${activeUserId}`, {
            headers: {
              'Authorization': `Bearer ${loggedInUser.token}`,
            },
          });
          console.log('Active User Data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching active user data:', error);
      }
    };

    fetchActiveUserData();
  }, [currentIndex]);

  const handleNext = async () => {
    try {
      const swipedUserId = users[currentIndex]._id;
      const response = await api.post(`api/swipeRight/${swipedUserId}`, {}, {
        headers: {
          'Authorization': `Bearer ${loggedInUser.token}`,
        },
      });
      
      if (response.data && response.data.chatInitiated) {
        // Call the navigation function if there's a match
        Alert.alert('Matched');
        console.log('Matched');
        navigateToMatches(); // Navigate to the Matches screen
      } 
    else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
      }
    } catch (error) {
      console.error('Error swiping right:', error);
    }
  };

  const handlePrevious = async () => {
    try {
      const swipedUserId = users[currentIndex]._id;
      await api.post(`/api/swipeLeft/${swipedUserId}`, {}, {
        headers: {
          'Authorization': `Bearer ${loggedInUser.token}`,
        },
      });
      setCurrentIndex((prevIndex) => (prevIndex - 1 + users.length) % users.length);
    } catch (error) {
      console.error('Error swiping left:', error);
    }
  };

  const handleRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
  };

  const handleLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + users.length) % users.length);
  };

  return (
    <View style={styles.container}>
      
      {users.length > 0 && <Card key={users[currentIndex]._id} user={users[currentIndex]} />}
      <View style={styles.buttonContainer}>
        <Button onPress={handlePrevious} title="Left Swipe" />
        <Button onPress={handleLeft} title="Previous" />
        <Button onPress={handleRight} title="Next" />
        <Button onPress={handleNext} title="Right Swipe" />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingTop:30
  },
});

export default ChatScreen;
