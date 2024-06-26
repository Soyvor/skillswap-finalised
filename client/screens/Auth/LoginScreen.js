// EntryScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import IllustrationComponent from '../../helper/IllustrationComponent';
import { StatusBar } from 'expo-status-bar';
import Animated,{ FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';
import Logo from '../../helper/Logo';
import { useState } from "react";
import api from "../../api/axios"
import { useLoggedInUser } from '../../components/context';


const EntryScreen = ({ navigation }) => {
  const { updateLoggedInUser } = useLoggedInUser(); 
  const handleLoginPress = async() => {
    try {
      const response = await api.post('http://10.24.70.104:3011/api/loginUser', {email:email,password:password});

      // Log the response details


      if (response.status===200) {
        console.log('Data submitted successfully:', response.data);
        
        updateLoggedInUser(response.data);
        navigation.navigate('Skillswap');
        // // Set the logged-in user data in state
        // updateLoggedInUser(responseData);
        // // Successful login, redirect to home page
        // navigate('/match', { state: { loggedInUser: responseData } });

        // Update logged-in user in contex
        // Redirect to chat page
      } else {
        // Display an error message
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
    // navigation.navigate('Skillswap'); // Navigate to the HomeScreen
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <View className="bg-white h-full w-full">
      <StatusBar style='light'/>
      <IllustrationComponent className="h-full w-full absolute"/>

      <View className="h-full w-full flex justify-around pt-40 pb-10">
        <View className="flex items-center">
          <Animated.Text entering={FadeIn.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">LoginScreen

        </Animated.Text>
        <Logo />
        <Animated.Text entering={FadeIn.duration(1000).springify()} className="text-black font-semi-bold tracking-wider text-3xl">SkillSwap
        </Animated.Text>
        </View>

        <View className="flex items-center mx-4 space-y-4">
          <Animated.View entering={FadeIn.delay(300).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full mb-3">
            <TextInput
                defaultValue=""
                onChangeText={(newText) => setEmail(newText)}
                placeholder="Email"
                placeholderTextColor={"gray"}
                style={styles.input}
              />
          </Animated.View>
          <Animated.View entering={FadeIn.delay(500).duration(1000).springify()}  className="bg-black/5 p-5 rounded-2xl w-full mb-3">
          <TextInput
                defaultValue=""
                onChangeText={(newText) => setPassword(newText)}
                placeholder="Password"
                placeholderTextColor={"gray"}
                style={styles.input}
                secureTextEntry/>
          </Animated.View>
          <Animated.View entering={FadeIn.delay(900).duration(1000).springify()} className="w-full">
             <TouchableOpacity onPress={handleLoginPress} style={styles.loginButton} className="w-full bg-sky-500 p-3 rounded-2xl mb-3">
              <Animated.Text entering={FadeIn.duration(1000).springify()}  className="text-xl font-bold text-white text-center">Login</Animated.Text>
             </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeIn.duration(1000).springify()}  className="flex-row justify-center">
            <Text>Don't Have an Account?</Text>
            <TouchableOpacity onPress={()=> navigation.push('Register')}>
              <Text className="text-sky-500"> SignUp</Text>
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

export default EntryScreen;
