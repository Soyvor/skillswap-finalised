// EntryScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import IllustrationComponent from '../../helper/IllustrationComponent';
import { StatusBar } from 'expo-status-bar';
import Animated,{ FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';

const RegisterScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('Next2'); // Navigate to the HomeScreen
  };  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [skills, setSkills] = useState('');
  const [linkedin, setLinkedIn] = useState(''); 
  const [photos, setPhotos] = useState('');
  const [videos, setVideos] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  return (
    <View className="bg-white h-full w-full">
      <StatusBar style='light'/>
      <IllustrationComponent className="h-full w-full absolute"/>
      <View className="h-full w-full flex justify-around pt-10 pb-10">
        <View className="flex items-center">
          <Animated.Text entering={FadeIn.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">Details
        </Animated.Text>
        </View>
        <View className="flex items-center mx-4 space-y-1">
          <Animated.View entering={FadeInDown.delay(300).duration(1000).springify()} className="bg-black/5 p-3 rounded-2xl w-full mb-1">
            <TextInput defaultValue='' onChangeText={newText => setName(newText)} placeholder='Gender' placeholderTextColor={'gray'}/>
            {console.log(name,email,password,phoneNumber,gender,birthdate,skills,linkedin,description,photos,videos)}
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(500).duration(1000).springify()}  className="bg-black/5 p-3 rounded-2xl w-full mb-1">
            <TextInput defaultValue='' onChangeText={newText => setBirthdate(newText)} placeholder='Birthdate' placeholderTextColor={'gray'} />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(700).duration(1000).springify()}  className="bg-black/5 p-3 rounded-2xl w-full mb-1">
            <TextInput defaultValue='' onChangeText={newText => setSkills(newText)} placeholder='Skills' placeholderTextColor={'gray'} />
          </Animated.View>
          <Animated.View  entering={FadeInDown.delay(700).duration(1000).springify()}  className="bg-black/5 p-3 rounded-2xl w-full mb-1">
            <TextInput defaultValue='' onChangeText={newText => setLinkedIn
              (newText)} placeholder='Linkedin' placeholderTextColor={'gray'}/>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(900).duration(1000).springify()} className="w-full">
             <TouchableOpacity onPress={handleLoginPress} style={styles.loginButton} className="w-full bg-sky-500 p-3 rounded-2xl mb-3 ">
              <Animated.Text entering={FadeInDown.delay(900).duration(1000).springify()}  className="text-xl font-bold text-white text-center ">Next</Animated.Text>
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
