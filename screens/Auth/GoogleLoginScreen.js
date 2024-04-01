// GoogleLoginScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GoogleLoginScreen = () => {
  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log('Google login clicked');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Google Login</Text>
      <Button title="Login with Google" onPress={handleGoogleLogin} />
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

export default GoogleLoginScreen;
