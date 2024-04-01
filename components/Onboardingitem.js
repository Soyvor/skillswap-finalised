import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Slides from "../Main/slides"; // Assuming slides is an array of data
import OnboardingItem from "../../components/OnboardingItem"; // Ensure OnboardingItem starts with a capital letter

const EntryScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Slides} // Assuming Slides is an array of data
        renderItem={({ item }) => <OnboardingItem item={item} />} // Assuming OnboardingItem is a component
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EntryScreen;
