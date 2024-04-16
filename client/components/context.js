import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoggedInUserContext = createContext();

export const useLoggedInUser = () => useContext(LoggedInUserContext);

export const LoggedInUserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('loggedInUser');
        if (storedUser) {
          setLoggedInUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error fetching logged-in user:', error);
      }
    };

    fetchLoggedInUser();
  }, []);

  const updateLoggedInUser = async (userData) => {
    try {
      if (userData) {
        await AsyncStorage.setItem('loggedInUser', JSON.stringify(userData));
      } else {
        await AsyncStorage.removeItem('loggedInUser');
      }
      setLoggedInUser(userData);
    } catch (error) {
      console.error('Error updating logged-in user:', error);
    }
  };

  return (
    <LoggedInUserContext.Provider value={{ loggedInUser, updateLoggedInUser }}>
      {children}
    </LoggedInUserContext.Provider>
  );
};