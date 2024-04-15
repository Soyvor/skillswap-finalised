import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import any necessary components or styles

const Chatroom = () => {
  const navigation = useNavigation();r

  // Dummy data for matched contacts (replace this with your actual data)
  const matchedContacts = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more contacts as needed
  ];

  // Function to navigate to the chat screen of a specific contact
  const navigateToChat = (contact) => {
    // Navigate to the chat screen with the selected contact
    navigation.navigate('ChatScreen', { contact });
  };

  // Render item function for the FlatList
  const renderContactItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToChat(item)}>
      <View style={styles.contactItem}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={matchedContacts}
        renderItem={renderContactItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

// Add your styles here
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
};

export default Chatroom;
