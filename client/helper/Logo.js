import React from "react";
import { View ,Image} from "react-native";
import { StyleSheet } from "react-native";
const Logo = () => {
  return (
    <View>
      <Image source={require("../assets/logo1.png")} style={styles.image} />
    </View>
  );
};

const styles= StyleSheet.create({

    image: {
        width: 200, // adjust according to your image size
        height: 200, // adjust according to your image size
    },
})
export default Logo;
