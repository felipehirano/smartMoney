import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import EntryListItem from './EntryListItem';
import Container from '../Core/Container';

import useEntries from '../../hooks/useEntries';

const EntryList = ({days = 7, category, onPressActionButton, onEntryPress}) => {
  const [entries] = useEntries(days, category);

  return (
    <Container
      title="Últimos lançaentos"
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
          <EntryListItem
            entry={item}
            isFirstItem={index === 0}
            isLastItem={index === entries.length - 1}
            onEntryPress={onEntryPress}
          />
        )}
      />
    </Container>
  );
};

export default EntryList;
