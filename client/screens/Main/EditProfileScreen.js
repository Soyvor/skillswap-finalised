import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Example = ({ navigation }) => {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
    name: '',
    age: '',
    skills: '',
    job: '',
  });

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <ScrollView>
        <View style={{alignItems:"center"}}>
          <Image
            alt=""
            source={{
              uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
            }}
            style={styles.profileAvatar}
          />
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>john.doe@mail.com</Text>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Personal Info</Text>
            <View style={styles.profile}>
              <TextInput
                placeholder="Name"
                value={form.name}
                onChangeText={(text) => handleInputChange('name', text)}
                style={styles.input}
              />
              <TextInput
                placeholder="Email"
                value={form.job}
                onChangeText={(text) => handleInputChange('Email', text)}
                style={styles.input}
              />
              <TextInput
                placeholder="Age"
                value={form.age}
                onChangeText={(text) => handleInputChange('age', text)}
                style={styles.input}
              />
              <TextInput
                placeholder="Skills (comma separated)"
                value={form.skills}
                onChangeText={(text) => handleInputChange('skills', text)}
                style={styles.input}
              />
              <TextInput
                placeholder="Present Job"
                value={form.job}
                onChangeText={(text) => handleInputChange('job', text)}
                style={styles.input}
              />
              <TextInput
                placeholder="Phone Number"
                value={form.job}
                onChangeText={(text) => handleInputChange('Phone Number', text)}
                style={styles.input}
              />
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Preferences</Text>
            {/* Add preferences section */}
          </View>

          <Text style={styles.contentFooter}>Made with ❤️ in Symbiosis</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  profile: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },

  section: {
    paddingTop: 12,
    paddingBottom: 24,
  },
  sectionTitle: {
    marginVertical: 8,
    marginHorizontal: 24,
    fontSize: 14,
    fontWeight: '600',
    color: '#a7a7a7',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  contentFooter: {
    marginTop: 24,
    marginBottom: 12,
    fontSize: 13,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },

  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
  },
  profileName: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: '600',
    color: '#090909',
  },
  profileEmail: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    color: '#848484',
  },
  profileAction: {
    marginTop: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
});

export default Example;
