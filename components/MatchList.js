// MatchList.js

import React from 'react';
import { FlatList } from 'react-native';
import MatchItem from './MatchItem';

const MatchList = ({ matches, onPressMatch }) => {
  return (
    <FlatList
      data={matches}
      renderItem={({ item }) => (
        <MatchItem match={item} onPress={() => onPressMatch(item.id)} />
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default MatchList;
