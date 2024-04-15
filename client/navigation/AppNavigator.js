// AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EntryScreen from '../screens/Auth/OnboardingScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import GoogleLoginScreen from '../screens/Auth/GoogleLoginScreen';
import HomeScreen from '../screens/Main/HomeScreen';
import MatchesScreen from '../screens/Main/MatchesScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import EditProfileScreen from '../screens/Main/EditProfileScreen';
import ChatScreen from '../screens/Main/ChatScreen';
import OnboardingScreen from '../screens/Auth/OnboardingScreen';
import Splash from '../screens/Splash/splash';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash' screenOptions={{headerShown: false}}>
        <Stack.Screen name='splash' component={Splash} />
        <Stack.Screen name="Entry" component={OnboardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="GoogleLogin" component={GoogleLoginScreen} />
        <Stack.Screen name="Skillswap" component={HomeScreen} />
        <Stack.Screen name="Matches" component={MatchesScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
