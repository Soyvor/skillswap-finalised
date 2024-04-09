// Avatar.js

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatar = ({ source, size }) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Avatar;
