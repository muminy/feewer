import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {ProfileHeader} from '../../components/header';
import {config} from '../../constant/config';
import {PostProps} from '../../types';
import PostCard from '../../components/postCard';
import {ThemeContext} from '../../utils/ThemeContext';

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
  const {theme} = useContext(ThemeContext);
  return (
    <View style={style.container}>
      <ProfileHeader />
      <ScrollView style={{backgroundColor: theme.backgroundColor}}>
        <View style={style.userInfo}>
          <Text style={[style.username, {color: theme.color}]}>
            Emirhan Dereli
          </Text>
          <Text style={style.userNickName}>@dereli</Text>
        </View>
        <View
          style={[style.userProfile, {borderBottomColor: theme.borderColor}]}>
          <Image
            source={{
              uri:
                'https://cdn.dribbble.com/users/648289/avatars/small/9b5c5e8162cbba169e2b68cfbb36111a.jpg?1579762604',
            }}
            style={style.userImage}
          />
          <View style={style.user_counts}>
            <View style={style.fcon}>
              <Text style={[style.count, {color: theme.color}]}>315</Text>
              <Text style={style.cinfo}>Soru</Text>
            </View>
            <View style={style.fcon}>
              <Text style={[style.count, {color: theme.color}]}>121</Text>
              <Text style={style.cinfo}>Cevap</Text>
            </View>
            <View style={style.fcon}>
              <Text style={[style.count, {color: theme.color}]}>1.271</Text>
              <Text style={style.cinfo}>Feew</Text>
            </View>
          </View>
        </View>
        {soru.map((item, key) => (
          <PostCard key={key} {...item} />
        ))}
      </ScrollView>
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
    borderBottomWidth: 1,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  userInfo: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 0,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userNickName: {
    fontWeight: 'bold',
    color: config.icolor,
    marginLeft: 10,
  },
  user_counts: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  count: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  fcon: {
    flex: 0.333,
    alignItems: 'center',
  },
  cinfo: {
    fontWeight: 'bold',
    color: '#707b86',
    fontSize: 15,
    textTransform: 'uppercase',
  },
});
