import {getRealm} from './Realm';
import {Alert} from 'react-native';

export const saveEntry = async () => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: 'ABC', //abraubsua - codigo aleatorio
        amount: 12.4,
        entryAt: new Date(),
        isInit: false,
      };

      realm.create('Entry', data, true);
    });
    console.log(data);
  } catch (error) {
    console.error('saveEntry :: error on save object :', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados de lançamento');
  }
  return data;
};
