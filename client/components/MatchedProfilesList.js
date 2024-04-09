// MatchedProfilesList.js

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const MatchedProfilesList = ({ profiles, onProfilePress }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            key={item.id}
            leftAvatar={{ source: { uri: item.avatar_url } }}
            title={item.name}
            subtitle={item.subtitle}
            onPress={() => onProfilePress(item)}
            bottomDivider
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MatchedProfilesList;
