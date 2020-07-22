import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ProfileHeader} from '../../components/header';
import {config} from '../../constant/config';
import {PostProps} from '../../types';
import PostCard from '../../components/postCard';
import {ThemeContext} from '../../utils/ThemeContext';
import {} from 'react-native-gesture-handler';

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
        <View
          style={{
            backgroundColor: theme.backgroundColor,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderBottomColor: theme.borderColor,
            borderBottomWidth: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Image
              source={{
                uri:
                  'https://cdn.dribbble.com/users/806561/avatars/normal/e521ba335820439899704d7945257c5f.jpg?1535600939',
              }}
              style={style.userImage}
            />
            <TouchableOpacity
              delayPressIn={0}
              activeOpacity={0.8}
              style={style.editb}>
              <Text style={[style.editp, {color: theme.color}]}>
                Profili düzenle
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={[style.userName, {color: theme.color}]}>
              Mümin Yıldırım
            </Text>
            <Text style={[style.nickname, {color: theme.inactiveColor}]}>
              @mumin
            </Text>
            <Text style={[style.bio, {color: theme.color}]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text
                style={[
                  style.userName,
                  {
                    fontWeight: 'bold',
                    fontSize: 18,
                    textAlign: 'center',
                    color: theme.color,
                  },
                ]}>
                471
              </Text>
              <Text
                style={[
                  style.userName,
                  {
                    fontWeight: '400',
                    fontSize: 15,
                    textAlign: 'center',
                    color: theme.color,
                  },
                ]}>
                FEEW
              </Text>
            </View>
            <View>
              <Text
                style={[
                  style.userName,
                  {
                    fontWeight: 'bold',
                    fontSize: 18,
                    textAlign: 'center',
                    color: theme.color,
                  },
                ]}>
                18.281
              </Text>
              <Text
                style={[
                  style.userName,
                  {
                    fontWeight: '400',
                    fontSize: 15,
                    textAlign: 'center',
                    color: theme.color,
                  },
                ]}>
                FOLLOWERS
              </Text>
            </View>
            <View>
              <Text
                style={[
                  style.userName,
                  {
                    fontWeight: 'bold',
                    fontSize: 18,
                    textAlign: 'center',
                    color: theme.color,
                  },
                ]}>
                10.710
              </Text>
              <Text
                style={[
                  style.userName,
                  {
                    fontWeight: '400',
                    fontSize: 15,
                    textAlign: 'center',
                    color: theme.color,
                  },
                ]}>
                FOLLOW
              </Text>
            </View>
          </View>
        </View>
        {soru.map((item, key) => (
          <PostCard {...item} key={key} />
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
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  editp: {
    fontWeight: 'bold',
  },
  editb: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#212121',
    borderRadius: 5,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  nickname: {
    fontSize: 14,
    marginBottom: 10,
  },
  bio: {
    fontSize: 15,
  },
});
