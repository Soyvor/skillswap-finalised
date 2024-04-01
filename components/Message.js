// Message.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message = ({ message, isCurrentUser }) => {
  return (
    <View style={[styles.container, isCurrentUser && styles.currentUser]}>
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  currentUser: {
    alignSelf: 'flex-end',
    backgroundColor: 'lightblue',
  },
});

export default Message;
