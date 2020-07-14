import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FacebookIcon, TwitterIcon, MailIcon} from '../constant/icons';
import {ThemeContext} from '../utils/ThemeContext';

export default function () {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={[style.lbox, {backgroundColor: theme.backgroundColor}]}>
        <Text style={style.logo}>FEEWER</Text>
      </View>
      <TouchableOpacity
        delayPressIn={0}
        activeOpacity={0.75}
        style={[
          style.singup,
          {backgroundColor: theme.inactiveBackgroundColor},
        ]}>
        <FacebookIcon color="#ddd" size={25} />
        <Text style={style.text}>Facebook ile giriş yap</Text>
      </TouchableOpacity>
      <TouchableOpacity
        delayPressIn={0}
        activeOpacity={0.75}
        style={[
          style.singup,
          {backgroundColor: theme.inactiveBackgroundColor},
        ]}>
        <TwitterIcon color="#ddd" size={25} />
        <Text style={style.text}>Twitter ile giriş yap</Text>
      </TouchableOpacity>
      <TouchableOpacity
        delayPressIn={0}
        activeOpacity={0.75}
        style={[
          style.singup,
          {backgroundColor: theme.inactiveBackgroundColor},
        ]}>
        <MailIcon color="#ddd" size={25} />
        <Text style={style.text}>Email ve şifre ile giriş yap</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 4,
  },
  lbox: {
    borderRadius: 5,
    backgroundColor: '#212121',
    paddingHorizontal: 20,
    marginBottom: 'auto',
    marginTop: 'auto',
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  singup: {
    paddingVertical: 15,
    backgroundColor: '#3a3a3a',
    width: '90%',
    borderRadius: 3,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  login: {
    paddingVertical: 15,
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 3,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#fff',
  },
  text: {
    textTransform: 'uppercase',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 15,
  },
  create: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
