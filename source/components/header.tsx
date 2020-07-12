import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LogoIcon, SearchIcon} from '../constant/icons';
import {config} from '../constant/config';

export default function () {
  return (
    <View style={style.container}>
      <View style={style.logo}>
        <LogoIcon size={30} color="#000" />
        <Text style={style.logo_text}>Feewer</Text>
      </View>
      <View style={style.src}>
        <SearchIcon size={30} color="#000" />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.6,
  },
  logo_text: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 19,
    color: '#444444',
  },
  src: {
    flexDirection: 'row',
    flex: 0.4,
    justifyContent: 'flex-end',
  },
});
