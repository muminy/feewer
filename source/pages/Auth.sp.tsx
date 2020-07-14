import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function () {
  return (
    <View style={style.container}>
      <View style={style.lbox}>
        <Text style={style.logo}>FEEWER</Text>
      </View>
      <TouchableOpacity
        delayPressIn={0}
        activeOpacity={0.75}
        style={style.singup}>
        <Text style={style.text}>GİRİŞ YAP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        delayPressIn={0}
        activeOpacity={0.75}
        style={style.login}>
        <Text style={[style.text, {color: '#111'}]}>kayıt ol</Text>
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
    marginBottom: 10,
    marginTop: 'auto',
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  singup: {
    paddingVertical: 15,
    backgroundColor: '#212121',
    width: '90%',
    borderRadius: 3,
    marginBottom: 12,
    marginTop: 'auto',
    borderWidth: 2,
    borderColor: '#fff',
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
  },
  create: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
