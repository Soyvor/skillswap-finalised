import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import UserModel from '../models/userModel'; // Assuming UserModel is implemented for React Native
import { generateToken } from '../utils/jwtUtils'; // Assuming jwtUtils are implemented for React Native

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [skills, setSkills] = useState('');
  const [photos, setPhotos] = useState('');
  const [videos, setVideos] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const createUser = async () => {
    try {
      const newUser = await UserModel.create({
        name,
        email,
        password,
        phoneNumber,
        skills,
        photos,
        videos,
        birthdate,
        gender,
        description,
      });

      // Generate a token for the newly created user
      const token = generateToken(newUser._id, newUser.email);

      setMessage('User created successfully');
    } catch (error) {
      console.error(error);
      setMessage('Error creating user');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10, width: 200 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10, width: 200 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10, width: 200 }}
      />
      {/* Add other input fields for phoneNumber, skills, photos, videos, birthdate, gender, description */}
      <TouchableOpacity onPress={createUser} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>Create User</Text>
      </TouchableOpacity>
      <Text style={{ marginTop: 10, color: 'red' }}>{message}</Text>
    </View>
  );
};

export default RegisterScreen;
