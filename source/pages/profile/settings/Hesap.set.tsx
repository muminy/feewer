import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  AtIcon,
  RightIcon,
  MailIcon,
  PasswordIcon,
} from '../../../constant/icons';
import {useNavigation} from '@react-navigation/native';
import {page_router} from '../../../constant/page_router';

export default function () {
  const nav = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() =>
          nav.navigate(page_router.stack.profile.setting.set.username)
        }
        delayPressIn={0}
        activeOpacity={0.75}
        style={style.li}>
        <AtIcon color="#000" size={20} />
        <Text style={style.li_text}>Kullanıcı adı</Text>
        <RightIcon color="#000" size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          nav.navigate(page_router.stack.profile.setting.set.password)
        }
        delayPressIn={0}
        activeOpacity={0.75}
        style={style.li}>
        <PasswordIcon color="#000" size={20} />
        <Text style={style.li_text}>Şifre</Text>
        <RightIcon color="#000" size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          nav.navigate(page_router.stack.profile.setting.set.email)
        }
        delayPressIn={0}
        activeOpacity={0.75}
        style={style.li}>
        <MailIcon color="#000" size={20} />
        <Text style={style.li_text}>E mail</Text>
        <RightIcon color="#000" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  li: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  li_text: {
    fontSize: 14,
    lineHeight: 18,
    marginRight: 'auto',
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
