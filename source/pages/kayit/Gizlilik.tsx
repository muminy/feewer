import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ThemeContext} from '../../utils/ThemeContext';
import {useNavigation} from '@react-navigation/native';

export default function () {
  const {theme} = useContext(ThemeContext);
  const nav = useNavigation();
  return (
    <ScrollView style={style.container}>
      <TextInput
        placeholder="Şifre"
        style={[
          style.textInput,
          {
            borderColor: theme.type === 'light' ? '#ddd' : theme.borderColor,
            color: theme.color,
            marginBottom: 10,
          },
        ]}
        placeholderTextColor={theme.inactiveColor}
      />
      <TextInput
        placeholder="Şifre tekrar"
        style={[
          style.textInput,
          {
            borderColor: theme.type === 'light' ? '#ddd' : theme.borderColor,
            color: theme.color,
          },
        ]}
        placeholderTextColor={theme.inactiveColor}
      />
      <TouchableOpacity
        activeOpacity={0.75}
        delayPressIn={0}
        style={[style.btn, {backgroundColor: '#4d3ddd'}]}>
        <Text style={[style.devam, {color: '#fff'}]}>KAYIT OL</Text>
      </TouchableOpacity>
      <Text style={{color: theme.color}}>
        Şifrenizin 8 karakterden fazla olduğuna emin olunuz, aksi taktirde
        şifreniz kabul eilmeyecektir!
      </Text>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  textInput: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    marginBottom: 22,
  },
  devam: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  btn: {
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 22,
    borderRadius: 3,
  },
});
