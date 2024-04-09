// MatchItem.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Avatar from './Avatar';

const MatchItem = ({ match, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Avatar source={match.avatar} size={50} />
      <View style={styles.info}>
        <Text style={styles.name}>{match.name}</Text>
        <Text style={styles.bio}>{match.bio}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  info: {
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  bio: {
    color: '#666',
  },
});

export default MatchItem;
