import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {PostProps} from '../types';
import {StarIcon, UserIcon} from '../constant/icons';

export default function (item: PostProps) {
  return (
    <View style={style.container}>
      <View style={style.soru_who}>
        <Text style={style.soru}>{item.soru}</Text>
        <Text style={style.soran}>{item.soran}</Text>
      </View>
      <View style={style.userCard}>
        <Image source={{uri: item.user.userImage}} style={style.image} />
        <View style={style.userInfo}>
          <Text style={[style.soru, {marginBottom: 0, paddingHorizontal: 0}]}>
            {item.user.userName}
          </Text>
          <Text>{item.date}</Text>
        </View>
      </View>
      <Text style={{marginBottom: 10, paddingHorizontal: 15}}>
        {item.cevap}
      </Text>
      <View style={style.userAction}>
        <TouchableOpacity
          onPress={() => console.log(111111)}
          style={style.likebtn}>
          <UserIcon size={23} color="#0468ff" />
          <Text style={style.like}>{item.like}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  soru: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  userCard: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  userInfo: {
    marginLeft: 10,
    justifyContent: 'flex-start',
  },
  userAction: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  likebtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 3,
    backgroundColor: '#fafcff',
    borderRadius: 3,
    marginRight: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dceaff',
    paddingHorizontal: 25,
  },
  like: {
    marginLeft: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0468ff',
  },
  soru_who: {
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
  },
  soran: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
