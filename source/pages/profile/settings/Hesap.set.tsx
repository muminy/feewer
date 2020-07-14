import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  AtIcon,
  RightIcon,
  MailIcon,
  PasswordIcon,
} from '../../../constant/icons';
import {useNavigation} from '@react-navigation/native';
import {page_router} from '../../../constant/page_router';
import {ThemeContext} from '../../../utils/ThemeContext';

export default function () {
  const nav = useNavigation();
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <TouchableOpacity
        onPress={() =>
          nav.navigate(page_router.stack.profile.setting.set.username)
        }
        delayPressIn={0}
        activeOpacity={0.75}
        style={style.li}>
        <AtIcon color={theme.color} size={20} />
        <Text style={[style.li_text, {color: theme.color}]}>Kullanıcı adı</Text>
        <RightIcon color={theme.color} size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          nav.navigate(page_router.stack.profile.setting.set.password)
        }
        delayPressIn={0}
        activeOpacity={0.75}
        style={style.li}>
        <PasswordIcon color={theme.color} size={20} />
        <Text style={[style.li_text, {color: theme.color}]}>Şifre</Text>
        <RightIcon color={theme.color} size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          nav.navigate(page_router.stack.profile.setting.set.email)
        }
        delayPressIn={0}
        activeOpacity={0.75}
        style={style.li}>
        <MailIcon color={theme.color} size={20} />
        <Text style={[style.li_text, {color: theme.color}]}>E mail</Text>
        <RightIcon color={theme.color} size={20} />
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
