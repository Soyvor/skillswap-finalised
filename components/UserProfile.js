// UserProfile.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import ProfileItem from './ProfileItem';

const UserProfile = ({ user }) => {
  return (
    <View style={styles.container}>
      <Avatar source={user.avatar} size={100} />
      <ProfileItem label="Name" value={user.name} />
      <ProfileItem label="Age" value={user.age} />
      <ProfileItem label="Bio" value={user.bio} />
      <ProfileItem label="Occupation" value={user.occupation} />
      <ProfileItem label="Skills" value={user.skills.join(', ')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
});

export default UserProfile;
