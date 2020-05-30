import {Alert} from 'react-native';
import {getRealm} from './Realm';
import {v1 as uuidv1} from 'uuid';

import moment from '../vendors/moment';

export const getEntries = async (days, category) => {
  let realm = await getRealm();
  realm = realm.objects('Entry');

  if (days > 0) {
    const now = moment(date);
    const date = now.subtract(days, 'days').toDate();
    realm = realm.filtered('entryAt >= $0', date);
  }

  if (category && category.id) {
    realm = realm.filtered('category.name == $0', category.name);
  }

  const entries = realm.sorted('entryAt', true);

  return entries;
};

export const saveEntry = async (value, entry = {}) => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: value.id || entry.id || uuidv1(),
        amount: value.amount || entry.amount,
        entryAt: value.entryAt || entry.entryAt,
        description: value.category.name,
        isInit: false,
        category: value.category || entry.category,
      };

      realm.create('Entry', data, true);
    });
    console.log(data);
  } catch (error) {
    console.log(error);
    console.error('saveEntry :: error on save object :', JSON.stringify(data));
    Alert.alert('Erro ao salvar os dados de lançamento');
  }
  return data;
};

export const deleteEntry = async (entry) => {
  const realm = await getRealm();

  try {
    realm.write(() => {
      realm.delete(entry);
    });
  } catch (error) {
    console.error(
      'deleteEntry :: error on delete object :',
      JSON.stringify(entry),
    );
  }
};
