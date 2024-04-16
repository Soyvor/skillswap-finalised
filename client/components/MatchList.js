// MatchList.js

import React from 'react';
import { FlatList } from 'react-native';
import MatchItem from './MatchItem';

const MatchList = ({ matches, onPressMatch }) => {
  return (
    <FlatList
      data={matches}
      renderItem={({ item }) => (
        <MatchItem match={item} onPress={() => onPressMatch(item._id)} />
      )}
      keyExtractor={(item) => item._id}
    />
  );
};

export default MatchList;
