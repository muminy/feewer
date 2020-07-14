import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../../components/header';
import NotifyCard from '../../components/notifyCard';
import {UserNotify} from '../../types';
import {ThemeContext} from '../../utils/ThemeContext';

const Main = () => {
  const {theme} = useContext(ThemeContext);
  const [notify, setNotify] = useState<UserNotify[]>([
    {
      id: '1',
      type: 'soru',
      soru: 'Kullandığın klavyenin modeli nedir acaba ?',
      user: {
        userId: 1,
        userImage:
          'https://cdn.dribbble.com/users/142973/avatars/small/1e2cff3fed4a44d0bf2cfe0e786b1736.jpeg?1534529617',
        userName: 'Jason Yoo',
      },
      time: '20 Dakika önce',
    },
    {
      id: '3',
      type: 'follow',
      user: {
        userId: 1,
        userImage:
          'https://cdn.dribbble.com/users/1068467/avatars/small/d80a6e2f0ce79decc04af5bcb4737f81.jpg?1495001562',
        userName: 'Emir Tanrıkulu',
      },
      time: '42 Dakika önce',
    },
    {
      id: '4',
      type: 'like',
      user: {
        userId: 1,
        userImage:
          'https://cdn.dribbble.com/users/1094158/avatars/small/bd9e0144f10971a1d176ab10478a46f2.jpg?1456317345',
        userName: 'Irina Peter',
      },
      cevap: 'Dark 1. sezon 2. bölüm.',
      time: '48 Dakika önce',
    },
    {
      id: '2',
      type: 'soru',
      soru:
        'Dronelar hakkında neler düşünüyorsun senin kullandığın bir model var mı',
      user: {
        userId: 1,
        userImage:
          'https://cdn.dribbble.com/users/22878/avatars/small/e3e1eaf2e404d82a598bb83df6cac37c.jpeg?1566301101',
        userName: 'Murat Ak',
      },
      time: '1 Saat önce',
    },
  ]);
  return (
    <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <Header />
      <FlatList
        data={notify}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => <NotifyCard {...item} />}
      />
    </View>
  );
};
export default Main;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
