import React from "react";
import { View ,Image} from "react-native";
import { StyleSheet } from "react-native";
const IllustrationComponent = () => {
  return (
    <View>
      <Image source={require("../assets/bg.png")} style={styles.image} />
    </View>
  );
};

const styles= StyleSheet.create({

    image: {
        width: 500, // adjust according to your image size
        height:810, // adjust according to your image size
        position: 'absolute',
    },
})
export default IllustrationComponent;
