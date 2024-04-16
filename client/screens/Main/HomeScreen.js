import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import ChatScreen from './ChatScreen';
import MatchesScreen from './MatchesScreen';
import ProfileScreen from './ProfileScreen';
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <>
      <StatusBar style="dark" />
      <Tab.Navigator
        initialRouteName="Chat"
        screenOptions={{
          tabBarActiveTintColor: 'white', // Color of the active tab text
          tabBarInactiveTintColor: 'white', // Color of the inactive tab text
          tabBarStyle: { backgroundColor: 'black' }, // Background color of the navigation tab
        }}
      >
        <Tab.Screen
          name="Swipe"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="message" color={color} size={size} />
            ),
            headerShown: false, // Hide the header for ChatScreen
          }}
        />
        <Tab.Screen
          name="Matches"
          component={MatchesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-multiple" color={color} size={size} />
            ),
            headerShown: false, // Hide the header for MatchesScreen
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle" color={color} size={size} />
            ),
            headerShown: false, // Hide the header for ProfileScreen
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default HomeScreen;
