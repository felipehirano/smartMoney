import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const EntrySummaryList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: '- Alimentação: $200'},
          {key: '- Combustível: $12'},
          {key: '- Aluguel: $120'},
          {key: '- Lazer: $250'},
          {key: '- Outros: $1200'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default EntrySummaryList;
