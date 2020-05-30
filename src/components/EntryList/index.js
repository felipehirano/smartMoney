import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import EntryListItem from './EntryListItem';
import {getEntries} from '../../services/Entries';
import Container from '../Core/Container';

const EntryList = ({days = 7, onPressActionButton, onEntryPress}) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries(days);
      console.log(data);
      setEntries(data);
    }
    loadEntries();
  }, [days]);

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
