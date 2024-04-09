import React from "react";
import { View ,Image} from "react-native";
import { StyleSheet } from "react-native";
const Ob3 = () => {
  return (
    <View>
      <Image source={require("../assets/onboarding-img3.png")} style={styles.image} />
    </View>
  );
};

const styles= StyleSheet.create({

    image: {
        width: 200, // adjust according to your image size
        height: 200, // adjust according to your image size
    },
})
export default Ob3;
