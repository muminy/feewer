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
import {page_router} from '../../constant/page_router';

export default function () {
  const {theme} = useContext(ThemeContext);
  const nav = useNavigation();
  return (
    <ScrollView style={style.container}>
      <TextInput
        placeholder="Ad Soyad"
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
        placeholder="Kullanıcı adı"
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
        placeholder="Email"
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
        onPress={() =>
          nav.navigate(page_router.stack.auth.singup.step.gizlilik)
        }
        style={[style.btn, {backgroundColor: '#1b1b1b'}]}>
        <Text style={[style.devam, {color: '#fff'}]}>DEVAM</Text>
      </TouchableOpacity>
      <Text style={{color: theme.color}}>
        Erişebilirlik için adınız ve soyadınıza ihtiyaç duyuyoruz, lütfen
        eksiksiz ve doğru bir şekilde tüm alanları doldurunuz.
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
