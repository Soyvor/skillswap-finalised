import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import IllustrationComponent from "../../helper/IllustrationComponent";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

import api from "../../api/axios"
const RegisterScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate("skillswap"); // Navigate to the RS2
  };
  const [formData1, setFormData1] = useState({
    name: 'Bob Johnson',
    email: 'exzaafda@sad.cs',
    password: 'dsad',
    phoneNumber: 13213213,
    // Add more fields for Page 2 data
    gender: 'Male',
    birthdate: '1999-03-02',
    skills: [],
    linkedin: 'jhhatu',
    description: 'jhhatu 21',
    photos: [],
    videos: [],
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [skills, setSkills] = useState("");
  const [linkedin, setLinkedIn] = useState("");
  const [photos, setPhotos] = useState("");
  const [videos, setVideos] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState(null);
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
 
  const handleSubmit = async () => {
    // Validate the gender field before submitting
    if (!gender) {
      console.error('Gender is required');
      return;
    }
  
    // Send the data to the backend
    try {
      const formData = {
        name: "Bob Johnson",
        
        email: "bob22332342.johnson1@example.com",
        password: "securePassword789",
        phoneNumber: 1231231234,
        // Add more fields for Page 2 data
        gender: 'Male',
        birthdate: '1992-02-02',
        skills: ["Programming", "Data Analysis"],
        
        linkedin: "sdhsd",
        description: "ds",
        photos: [],
        videos: [],
      };
      const response = await api.post('http://192.168.1.14:3011/api/user', formData1);
      if (response.status === 200) {
      console.log("Data submitted successfully:", response.data);
      }
      // Navigate to /home after setting the logged-in user
      // navigate('/login');
      // You can handle further actions here, such as redirecting the user
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

 
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <IllustrationComponent style={styles.illustration} />

      <View style={styles.formContainer}>
        <Animated.Text
          entering={FadeIn.duration(1000).springify()}
          style={styles.title}
        >
          Register
        </Animated.Text>
        <View style={{ height: "50%" }}>
          <ScrollView>
            <Animated.View
              entering={FadeInDown.delay(300).duration(1000).springify()}
              style={styles.inputContainer}
            >
              <TextInput
                defaultValue=""
                onChangeText={(newText) => setName(newText)}
                placeholder="Name"
                placeholderTextColor={"gray"}
                style={styles.input}
              />
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(500).duration(1000).springify()}
              style={styles.inputContainer}
            >
              <TextInput
                defaultValue=""
                onChangeText={(newText) => setEmail(newText)}
                placeholder="Email"
                placeholderTextColor={"gray"}
                style={styles.input}
              />
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(700).duration(1000).springify()}
              style={styles.inputContainer}
            >
              <TextInput
                defaultValue=""
                onChangeText={(newText) => setPassword(newText)}
                placeholder="Password"
                placeholderTextColor={"gray"}
                secureTextEntry
                style={styles.input}
              />
            </Animated.View>

            <Animated.View
              entering={FadeInDown.delay(700).duration(1000).springify()}
              style={styles.inputContainer}
            >
              <TextInput
                defaultValue=""
                onChangeText={(newText) => setPhoneNumber(newText)}
                placeholder="Phone Number"
                placeholderTextColor={"gray"}
                style={styles.input}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(300).duration(1000).springify()}
              className="bg-black/5 p-3 rounded-2xl w-full mb-1"
            >
              <TextInput
                defaultValue=""
                onChangeText={(newText) => setGender(newText)}
                placeholder="Gender"
                placeholderTextColor={"gray"}
              />
              {console.log(
                name,
                email,
                password,
                phoneNumber,
                gender,
                birthdate,
                skills,
                linkedin,
                description,
                photos,
                videos
              )}
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(500).duration(1000).springify()}
              className="bg-black/5 p-3 rounded-2xl w-full mb-1"
            >
              <TextInput
                defaultValue=""
                onChangeText={(newText) => setBirthdate(newText)}
                placeholder="Birthdate"
                placeholderTextColor={"gray"}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(700).duration(1000).springify()}
              className="bg-black/5 p-3 rounded-2xl w-full mb-1"
            >
              <TextInput
                defaultValue=""
                onChangeText={(newText) => setSkills(newText)}
                placeholder="Skills"
                placeholderTextColor={"gray"}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(700).duration(1000).springify()}
              className="bg-black/5 p-3 rounded-2xl w-full mb-1"
            >
              <TextInput
                defaultValue=""
                onChangeText={(newText) => setLinkedIn(newText)}
                placeholder="Linkedin"
                placeholderTextColor={"gray"}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(300).duration(1000).springify()}
              className="bg-black/5 p-3 rounded-2xl w-full mb-1"
            >
              <TextInput
                defaultValue=""
                onChangeText={(newText) => setDescription(newText)}
                placeholder="Description"
                placeholderTextColor={"gray"}
              />
              {console.log(
                name,
                email,
                password,
                phoneNumber,
                gender,
                birthdate,
                skills,
                linkedin,
                description,
                photos,
                videos
              )}
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(500).duration(1000).springify()}
              className="bg-black/5 p-3 rounded-2xl w-full mb-1"
            >
              <TextInput
                defaultValue=""
                onChangeText={(newText) => setPhotos(newText)}
                placeholder="Photos"
                placeholderTextColor={"gray"}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInDown.delay(700).duration(1000).springify()}
              className="bg-black/5 p-3 rounded-2xl w-full mb-1"
            >
              <TextInput
                defaultValue=""
                onChangeText={(newText) => setVideos(newText)}
                placeholder="Videos"
                placeholderTextColor={"gray"}
              />
            </Animated.View>
          </ScrollView>
        </View>
        <View>
          <Animated.View
            entering={FadeInDown.delay(900).duration(1000).springify()}
            style={styles.buttonContainer}
          >
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.loginButton}
            >
              <Animated.Text
                entering={FadeInDown.delay(900).duration(1000).springify()}
                style={styles.buttonText}
              >
                submit
              </Animated.Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(1000).duration(1000).springify()}
            style={styles.signInContainer}
          >
            <Text>Already Have an Account?</Text>
            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text style={styles.signInText}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  illustration: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollContent: {
    justifyContent: "center",
    flexGrow: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    color: "black",
  },
  buttonContainer: {
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: "skyblue",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  signInContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  signInText: {
    color: "skyblue",
    marginLeft: 5,
  },
});

export default RegisterScreen;
