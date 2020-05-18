import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import {saveEntry} from '../../services/Entries';

const Main = ({navigation}) => {
  const saldo = '$2.064,37';

  // () => navigation.navigate('NewEntry')
  const save = () => {
    saveEntry();
  };

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={saldo} />
      <Button title="Adicionar" onPress={save} />
      <EntrySummary />
      <EntryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
  },
});

export default Main;
