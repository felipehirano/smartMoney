import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import EntryListItem from './EntryListItem';
import {getEntries} from '../../services/Entries';

const EntryList = ({navigation}) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();
      console.log(data);
      setEntries(data);
    }
    loadEntries();
  }, []);

  return (
    <View>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <View>
            <Text style={styles.entry}>
              - {item.description} - ${item.amount}
            </Text>
            <Button
              title={item.id}
              onPress={() => {
                navigation.navigate('NewEntry', {entry: item});
              }}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
});

export default EntryList;
