import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {PostProps} from '../types';
import {StarIcon, UserIcon, LogoIcon} from '../constant/icons';
import {ThemeContext} from '../utils/ThemeContext';

export default function (item: PostProps) {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[style.container, {borderBottomColor: theme.borderColor}]}>
      <Image source={{uri: item.user.userImage}} style={style.image} />
      <View style={style.user_card}>
        <View style={{marginBottom: 10}}>
          <Text style={[style.soran, {color: theme.color}]}>
            {item.user.userName}
          </Text>
          <Text style={style.date}>{item.date}</Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={[style.soru, {color: theme.color}]}>{item.soru}</Text>
          <Text style={[style.cevap, {color: theme.color}]}>{item.cevap}</Text>
        </View>
        <View style={style.actions}>
          <UserIcon size={20} color={theme.color} />
          <Text style={[style.lcount, {color: theme.color}]}>{item.like}</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  soru: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 7,
    color: '#08090a',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 30,
  },
  soran: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 23,
    color: '#212121',
  },
  user_card: {
    marginLeft: 10,
    flex: 1,
  },
  date: {
    fontSize: 12,
    lineHeight: 15,
    color: '#64707d',
  },
  cevap: {
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lcount: {
    marginLeft: 5,
    fontSize: 12,
  },
});
