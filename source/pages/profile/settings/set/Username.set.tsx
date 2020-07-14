import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ThemeContext} from '../../../../utils/ThemeContext';

export default function () {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <TextInput
        style={[
          style.input,
          {
            backgroundColor: theme.backgroundColor,
            borderColor: theme.borderColor,
          },
        ]}
        placeholderTextColor={theme.inactiveColor}
        placeholder="Kullanıcı adını değiştir"
      />
      <TouchableOpacity
        activeOpacity={0.75}
        delayPressIn={0}
        style={[style.btn]}>
        <Text style={style.color}>Değiştir</Text>
      </TouchableOpacity>
      <Text style={[style.info, {color: theme.color}]}>
        Kullanıcıdı adınızı belirlerken argo, adult ve ırkçı söylemlere dikkat
        ediniz, aksi taktirde hesabınız kapatılır.
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 12,
  },
  info: {
    width: '80%',
    fontSize: 12,
    elevation: 1,
  },
  btn: {
    backgroundColor: '#0468ff',
    marginBottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 3,
  },
  color: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
