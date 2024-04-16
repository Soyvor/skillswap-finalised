import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView ,TouchableOpacity,Button} from "react-native";

import { useLoggedInUser } from '../../components/context';
import { baseURL } from "../../api/axios";
import { Linking } from "react-native";
import Animated,{ FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

function replaceLocalhostWithBaseURL(url) {
// Regular expression to match 'localhost:3011'
const regex = /localhost:3011/;

// Replace 'localhost:3011' with 'baseurl'
const newUrl = url.replace(regex, baseURL);
console.log(newUrl);
return newUrl;
}
export default function App() {
const { loggedInUser } = useLoggedInUser();
const excludeFields = ['token', '_id'];
const ProfilePicture=replaceLocalhostWithBaseURL(loggedInUser.photos[0].url);

const navigation = useNavigation();

const handleLogout = async () => {
try {
// Clear data from AsyncStorage
await AsyncStorage.removeItem('loggedInUser');
// Navigate to the login page
navigation.navigate('Login');
} catch (error) {
console.error('Error logging out:', error);
}
};

return (
<SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
                <Image source={{uri:ProfilePicture}} style={styles.image} resizeMode="cover"></Image>
            </View>

            <View style={styles.active}></View>

        </View>
        <Animated.View entering={FadeInDown.delay(500).duration(1000).springify()} style={styles.inputContainer}>
            <View style={styles.infoContainer2}>
             <View style={styles.Cont}>
                <Text style={[styles.text, { fontWeight: "400" , fontSize: 36, marginBottom: 10
                    }]}>{loggedInUser.name}</Text>

                <View style={styles.aboutMeContainer}>
                    <Text style={[styles.text, { color: "#AEB5BC" , fontSize: 20, marginRight: 10 }]}>About Me:</Text>
                    <Text style={[styles.text, { color: "#080808" , fontSize: 20 }]}>{loggedInUser.description}</Text>
                </View>

                <TouchableOpacity onPress={()=> Linking.openURL(loggedInUser.linkedin)}>
                    <Text style={[styles.text, { fontWeight: "800" , fontSize: 20, marginBottom: 10 }]}>LinkedIn</Text>
                </TouchableOpacity>

                <View style={styles.detailContainer}>
                    <Text style={[styles.text, { fontWeight: "400" , fontSize: 14 }]}>Age:</Text>
                    <Text style={[styles.text, { fontWeight: "200" , fontSize: 20 }]}>{loggedInUser.age}</Text>
                </View>

                <View style={styles.detailContainer}>
                    <Text style={[styles.text, { fontWeight: "400" , fontSize: 14 }]}>Gender:</Text>
                    <Text style={[styles.text, { fontWeight: "200" , fontSize: 20 }]}>{loggedInUser.gender}</Text>
                </View>

                <Text style={[styles.text, { fontWeight: "400" , fontSize: 14, marginBottom: 10 }]}>Email:</Text>
                <Text style={[styles.text, { fontWeight: "200" , fontSize: 20, marginBottom: 20
                    }]}>{loggedInUser.email}</Text>

                <Button title="Logout" onPress={handleLogout} />
             </View>
            </View>

        </Animated.View>

    </ScrollView>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#adb9c9",
paddingTop: 50,

},
image: {
flex: 1,
height: undefined,
width: undefined
},
Cont:{
flex: 1,
alignItems:"center",
marginLeft:30,
marginRight:20
},
profileImage: {
width: 200,
height: 200,
borderRadius: 100,
overflow: "hidden",
alignSelf: "center",
marginBottom: 20,
},
active: {
backgroundColor: "#34FFB9",
position: "absolute",
bottom: 178, // Adjust based on your layout
left: 10,
padding: 4,
height: 20,
width: 20,
borderRadius: 10,
},
});