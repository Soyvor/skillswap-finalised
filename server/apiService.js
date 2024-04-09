import axios from 'axios';

const API_BASE_URL = 'http://your-backend-url/api';

export const getUserData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Define other API functions as needed
