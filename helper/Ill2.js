import React from "react";
import { View ,Image} from "react-native";
import { StyleSheet } from "react-native";
const IllustrationComponent2 = () => {
  return (
    <View ClassName="flex-row justify-around w-full absolute">
      <Image ClassName="h-[10] w-[90]" source={require("../assets/clip.png")} />
    </View>
  );
};

const styles= StyleSheet.create({
})
export default IllustrationComponent2;
