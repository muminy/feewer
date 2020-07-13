import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function () {
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Email adresinizi güncelleyiniz"
      />
      <TouchableOpacity activeOpacity={0.75} delayPressIn={0} style={style.btn}>
        <Text style={style.color}>Değiştir</Text>
      </TouchableOpacity>
      <Text style={style.info}>
        Email adresinizi yazarken eksik yada yanlış olmadığına emin olun, aksi
        taktirde onaylama maili size ulaşmayacaktır.
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
