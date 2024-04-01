// MatchesScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MatchList from '../../components/MatchList';

const MatchesScreen = () => {
  // Dummy data for demonstration
  const matches = [
    { id: 1, name: 'John', bio: 'Software Engineer', avatar: require('../../assets/avatar1.jpg') },
    { id: 2, name: 'Alice', bio: 'Graphic Designer', avatar: require('../../assets/avatar2.jpg') },
    { id: 3, name: 'Bob', bio: 'Product Manager', avatar: require('../../assets/avatar3.jpg') },
  ];

  const handlePressMatch = (matchId) => {
    // Handle press on a match item
    console.log('Match selected:', matchId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Matches Screen</Text>
      <MatchList matches={matches} onPressMatch={handlePressMatch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MatchesScreen;
