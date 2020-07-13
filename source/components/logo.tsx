import React, {CSSProperties} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LogoIcon} from '../constant/icons';
import {CSSProps} from '../types';

export default function LogoCard(props: CSSProps) {
  return (
    <View style={[style.logo, props.styles]}>
      <LogoIcon size={30} color="#000" />
      <Text style={style.logo_text}>Feewer</Text>
    </View>
  );
}

const style = StyleSheet.create({
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo_text: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 19,
    color: '#444444',
  },
});
