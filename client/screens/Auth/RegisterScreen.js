// EntryScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import IllustrationComponent from '../../helper/IllustrationComponent';
import { StatusBar } from 'expo-status-bar';
import Animated,{ FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';

const RegisterScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('Skillswap'); // Navigate to the HomeScreen
  };
  return (
    <View className="bg-white h-full w-full">
      <StatusBar style='light'/>
      <IllustrationComponent className="h-full w-full absolute"/>

      <View className="h-full w-full flex justify-around pt-48 pb-10">
        <View className="flex items-center">
          <Animated.Text entering={FadeIn.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">SignUp
        </Animated.Text>
        </View>

        <View className="flex items-center mx-4 space-y-4">
          <Animated.View entering={FadeInDown.delay(300).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-1">
            <TextInput placeholder='Email' placeholderTextColor={'gray'}/>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(500).duration(1000).springify()}  className="bg-black/5 p-5 rounded-2xl w-full mb-1">
            <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry/>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(700).duration(1000).springify()}  className="bg-black/5 p-5 rounded-2xl w-full mb-1">
            <TextInput placeholder='Confirm Password' placeholderTextColor={'gray'} secureTextEntry/>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(900).duration(1000).springify()} className="w-full">
             <TouchableOpacity onPress={handleLoginPress} style={styles.loginButton} className="w-full bg-sky-500 p-3 rounded-2xl mb-3">
              <Animated.Text entering={FadeInDown.delay(900).duration(1000).springify()}  className="text-xl font-bold text-white text-center">Sign Up</Animated.Text>
             </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(1000).duration(1000).springify()}  className="flex-row justify-center">
            <Text>Already Have an Account?</Text>
            <TouchableOpacity onPress={()=> navigation.push('Login')}>
              <Text className="text-sky-500"> Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>



    </View>
      
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 1,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
