import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BalancePanelLabel from './BalancePanelLabel/index';
import BalancePanelChart from './BalancePanelChart/index';

import useBalance from '../../hooks/useBalance';

const BalancePanel = ({onNewEntryPress}) => {
  const [balance] = useBalance();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
        <BalancePanelLabel currentBalance={balance} />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Icon name="add" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  panel: {
    // flex: 1,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: Colors.green,
    borderRadius: 150,
    alignSelf: 'flex-end', // alinha esse elemento em relação ao pai.
    alignItems: 'center', // alinha os filhos na horizontal.
    justifyContent: 'center', // alinha os filhos na vertical.
    width: 50,
    height: 50,
    shadowColor: Colors.black, // Sombreamento
    elevation: 5, // Sombreamento
    marginTop: -25,
    marginRight: 10,
  },
});

export default BalancePanel;
