// MatchItem.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Linking } from 'react-native';
import Avatar from './Avatar';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MatchItem = ({ match, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="person" size={50} color="#000" />
      <View style={styles.info}>
        <Text style={styles.name}>{match.name}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(match.linkedin)}>
                     <Text style={[styles.text, { fontWeight: "200", fontSize: 20 }]}>{match.linkedin}</Text>           
                    </TouchableOpacity>
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
