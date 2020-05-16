import {getRealm} from './Realm';

export const saveEntry = async () => {
  const realm = getRealm();
  let data = {};
  realm.write(() => {
    data = {
      id: 'ABC', //abraubsua - codigo aleatorio
      amount: '12.4',
      entryAt: new Date(),
      isInit: false,
    };

    realm.create('Entry', data, true);
  });
  console.log(data);
  return data;
};
