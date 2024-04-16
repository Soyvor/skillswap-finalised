import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import Card from './Card'; // Assuming Card component is already defined

const Home = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch users from API
        const response = await axios.get('http://localhost:3011/api/getAllUsers');
        const filteredUsers = response.data.filter(user => user._id !== loggedInUser._id);
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
          const response = await axios.get(`http://localhost:3011/api/getAllUsers/${activeUserId}`);
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
      const response = await axios.post(`http://localhost:3011/api/swipeRight/${swipedUserId}`, {});
      
      if (response.data && response.data.chatInitiated) {
        navigate('/match', { state: { loggedInUser } });
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
      }
    } catch (error) {
      console.error('Error swiping right:', error);
    }
  };

  const handlePrevious = async () => {
    try {
      const swipedUserId = users[currentIndex]._id;
      await axios.post(`http://localhost:3011/api/swipeLeft/${swipedUserId}`, {});
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
      <Navbar />
      {users.length > 0 && <Card key={users[currentIndex]._id} user={users[currentIndex]} />}
      <View style={styles.buttonContainer}>
        <Button onPress={handlePrevious} title="Left Swipe" />
        <Button onPress={handleLeft} title="Previous" />
        <Button onPress={handleRight} title="Next" />
        <Button onPress={handleNext} title="Right Swipe" />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
});

export default Home;
