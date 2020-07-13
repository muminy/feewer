import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {ProfileHeader} from '../../components/header';
import {config} from '../../constant/config';
import {PostProps} from '../../types';
import PostCard from '../../components/postCard';

const MainProfile = () => {
  const [soru, setSoru] = useState<PostProps[]>([
    {
      id: '0',
      soru:
        'Abi alaylı yazılımcı diye Bi tabir var, mühendislik okumadan kendini geliştirmek sence mümkün mü, iş olanakları olarak Türkiye şartlarında zor olmaz mı?',
      cevap:
        'Valla ben mühendislik okumadan geliştirdim kendimi ama okul okusaydım daha iyi olur muydu? Bence olurdu.',
      user: {
        userId: 12,
        userImage:
          'https://cdn.dribbble.com/users/648289/avatars/small/9b5c5e8162cbba169e2b68cfbb36111a.jpg?1579762604',
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
        userImage:
          'https://cdn.dribbble.com/users/648289/avatars/small/9b5c5e8162cbba169e2b68cfbb36111a.jpg?1579762604',
        userName: 'fkadev',
      },
      like: 12,
      date: '2 gün önce',
      soran: 'Anonim',
    },
    {
      id: '2',
      soru:
        'Hiç çözemediğim teknik sorun oldu mu? Bu gibi durumlarda ne yaptın? Bir sorun ile 1 hafta boyunca uğrastığın oldu mu?',
      cevap: 'Hep oluyor.',
      user: {
        userId: 12,
        userImage:
          'https://cdn.dribbble.com/users/648289/avatars/small/9b5c5e8162cbba169e2b68cfbb36111a.jpg?1579762604',
        userName: 'fkadev',
      },
      like: 12,
      date: '2 gün önce',
      soran: 'Anonim',
    },
    {
      id: '3',
      soru:
        'Hiç çözemediğim teknik sorun oldu mu? Bu gibi durumlarda ne yaptın? Bir sorun ile 1 hafta boyunca uğrastığın oldu mu?',
      cevap: 'Hep oluyor.',
      user: {
        userId: 12,
        userImage:
          'https://cdn.dribbble.com/users/648289/avatars/small/9b5c5e8162cbba169e2b68cfbb36111a.jpg?1579762604',
        userName: 'fkadev',
      },
      like: 12,
      date: '2 gün önce',
      soran: 'Anonim',
    },
  ]);
  return (
    <View style={style.container}>
      <ProfileHeader styles={{borderBottomWidth: 0}} />
      <View style={style.userProfile}>
        <Image
          source={{
            uri:
              'https://cdn.dribbble.com/users/648289/avatars/small/9b5c5e8162cbba169e2b68cfbb36111a.jpg?1579762604',
          }}
          style={style.userImage}
        />
        <View style={style.userInfo}>
          <Text style={style.username}>Emirhan Dereli</Text>
          <Text style={style.userNickName}>@dereli</Text>
        </View>
      </View>
      <View style={style.user_counts}>
        <View style={style.fcon}>
          <Text style={style.count}>315</Text>
          <Text style={style.cinfo}>Soru</Text>
        </View>
        <View style={style.fcon}>
          <Text style={style.count}>121</Text>
          <Text style={style.cinfo}>Cevap</Text>
        </View>
        <View style={style.fcon}>
          <Text style={style.count}>1.271</Text>
          <Text style={style.cinfo}>Feew</Text>
        </View>
      </View>
      <FlatList
        data={soru}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => <PostCard {...item} />}
      />
    </View>
  );
};
export default MainProfile;
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userProfile: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  userInfo: {
    marginLeft: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userNickName: {
    fontWeight: 'bold',
    color: config.icolor,
  },
  user_counts: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  count: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  fcon: {
    flex: 0.333,
  },
  cinfo: {
    fontWeight: 'bold',
    color: '#707b86',
    fontSize: 15,
    textTransform: 'uppercase',
  },
});
