import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {PostProps, UserNotify} from '../types';
import {StarIcon, UserIcon, TimeIcon} from '../constant/icons';
import {config} from '../constant/config';
import {ThemeContext} from '../utils/ThemeContext';

export default function (props: UserNotify) {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[style.container, {borderBottomColor: theme.borderColor}]}>
      <Image style={style.userImage} source={{uri: props.user.userImage}} />
      <View style={style.NDetail}>
        {props.type === 'soru' ? (
          <View style={style.userA}>
            <Text style={[style.fos, {color: theme.color}]}>
              <Text style={[style.soru, {color: theme.imColor}]}>
                {props.user.userName}
              </Text>{' '}
              adlı kullanıcıdan bir soru aldınız.
              <Text style={[style.soru, {color: theme.color}]}>
                {' '}
                "{props.soru}"
              </Text>
            </Text>
            <View style={style.timeD}>
              <TimeIcon color="#b3b3b3" size={20} />
              <Text style={style.timedk}>{props.time}</Text>
            </View>
          </View>
        ) : props.type === 'follow' ? (
          <View style={style.userA}>
            <Text style={[style.fos, {color: theme.color}]}>
              <Text style={[style.soru, {color: theme.imColor}]}>
                {props.user.userName}
              </Text>{' '}
              adlı kullanıcı sizi takip etti!
            </Text>
            <View style={style.timeD}>
              <TimeIcon color="#b3b3b3" size={20} />
              <Text style={style.timedk}>{props.time}</Text>
            </View>
          </View>
        ) : (
          <View style={style.userA}>
            <Text style={[style.fos, {color: theme.color}]}>
              <Text style={[style.soru, {color: theme.imColor}]}>
                {props.user.userName}
              </Text>{' '}
              adlı kullanıcı
              <Text style={style.soru}> "{props.cevap}" </Text>
              cevabınızı beğendi
            </Text>
            <View style={style.timeD}>
              <TimeIcon color="#b3b3b3" size={20} />
              <Text style={style.timedk}>{props.time}</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 30,
  },
  userA: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  NDetail: {
    flex: 1,
    paddingLeft: 20,
  },
  fos: {
    fontSize: 15,
  },
  soru: {
    fontWeight: 'bold',
  },
  timeD: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  timedk: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#8d8d8d',
  },
});
