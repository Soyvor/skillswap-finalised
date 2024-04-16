import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { baseURL } from '../api/axios';
function replaceLocalhostWithBaseURL(url) {
  // Regular expression to match 'localhost:3011'
  const regex = /localhost:3011/;

  // Replace 'localhost:3011' with 'baseurl'
  const newUrl = url.replace(regex, baseURL);
  console.log(newUrl);
  return newUrl;
}
const Card = ({ user }) => {
  const hasPhotos = user.photos && user.photos.length > 0;

  const photoUrls = hasPhotos ? user.photos.map(photo => photo.url) : [];
  const avatarImage = require('./images/img_avatar.png');
  const imagesContext = require.context('../images', false, /\.(png|jpeg|svg)$/);
  const images = imagesContext.keys().map(imagesContext);
  const skillsString = user.skills.join(', ');
 
  if (photoUrls.length === 1) {
    return (
      <View style={styles.card}>
        <View style={styles.carousel}>
          <Image source={{ uri: replaceLocalhostWithBaseURL(photoUrls[0]) }} style={styles.image} />
          <Image source={avatarImage} style={styles.image} />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>{user.name}</Text>
          <Text>Age: {user.age}, Gender: {user.gender}</Text>
          <Text>Skills: <Text style={styles.skills}>{skillsString}</Text></Text>
          <Text>{user.description}</Text>
        </View>
      </View>
    );
  }

  if (photoUrls.length === 0) {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    return (
      <View style={styles.card}>
        <View style={styles.carousel}>
          <Image source={{ avatarImage }} style={styles.image} />
          <Image source={avatarImage} style={styles.image} />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>{user.name}</Text>
          <Text>Age: {user.age}, Gender: {user.gender}</Text>
          <Text>Skills: <Text style={styles.skills}>{skillsString}</Text></Text>
          <Text>{user.description}</Text>
        </View>
      </View>
    );
  }

  if (photoUrls.length === 2) {
    return (
      <View style={styles.card}>
        <View style={styles.carousel}>
          <Image source={{ uri: replaceLocalhostWithBaseURL(photoUrls[0]) }} style={styles.image} />
          <Image source={{ uri: replaceLocalhostWithBaseURL(photoUrls[1]) }} style={styles.image} />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>{user.name}</Text>
          <Text>Age: {user.age}, Gender: {user.gender}</Text>
          <Text>Skills: <Text style={styles.skills}>{skillsString}</Text></Text>
          <Text>{user.description}</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    width: '80%',
    marginVertical: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  carousel: {
    flexDirection: 'row',
    overflow: 'scroll',
  },
  image: {
    flex: 1,
    height: 400,
    resizeMode: 'cover',
  },
  container: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  skills: {
    fontWeight: 'bold',
  },
});

export default Card;
