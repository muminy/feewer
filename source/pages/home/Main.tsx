import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../../components/header';
import PostCard from '../../components/postCard';
import {PostProps} from '../../types';
import {page_router} from '../../constant/page_router';
import {ThemeContext} from '../../utils/ThemeContext';
export default function () {
  const [soru, setSoru] = useState<PostProps[]>([
    {
      id: '0',
      soru:
        'Abi alaylı yazılımcı diye Bi tabir var, mühendislik okumadan kendini geliştirmek sence mümkün mü, iş olanakları olarak Türkiye şartlarında zor olmaz mı?',
      cevap:
        'Valla ben mühendislik okumadan geliştirdim kendimi ama okul okusaydım daha iyi olur muydu? Bence olurdu.',
      user: {
        userId: 12,
        userImage: 'https://m.curiouscat.qa/1574283139/avatars/14574947.jpg',
        userName: 'fkadev',
      },
      like: 12,
      date: '1 gün önce',
      soran: 'Anonim',
    },
    {
      id: '1',
      soru:
        'Hiç çözemediğim teknik sorun oldu mu? Bu gibi durumlarda ne yaptın? Bir sorun ile 1 hafta boyunca uğrastığın oldu mu?',
      cevap: 'Hep oluyor.',
      user: {
        userId: 12,
        userImage: 'https://m.curiouscat.qa/1574283139/avatars/14574947.jpg',
        userName: 'fkadev',
      },
      like: 12,
      date: '2 gün önce',
      soran: 'Anonim',
    },
  ]);

  const {theme} = useContext(ThemeContext);
  return (
    <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <Header routeName={page_router.stack.home.search} />
      <FlatList
        data={soru}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => <PostCard {...item} />}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
