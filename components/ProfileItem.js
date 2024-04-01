// ProfileItem.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileItem = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}: </Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    marginLeft: 5,
  },
});

export default ProfileItem;
