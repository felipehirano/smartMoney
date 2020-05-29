import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import Colors from '../../../styles/Colors';

const ActionFooter = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
};

export const ActionPrimaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ActionSecundaryButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.secundaryButton} onPress={onPress}>
      <Text style={styles.secudndaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingVertical: 10,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryButton: {
    borderRadius: 150,
    borderWidth: 1,
    borderColor: Colors.green,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  primaryButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.green,
  },
  secundaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  secudndaryButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.white,
  },
});

export default ActionFooter;
