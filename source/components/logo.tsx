import React, {CSSProperties, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LogoIcon, UserIcon} from '../constant/icons';
import {CSSProps} from '../types';
import {ThemeContext} from '../utils/ThemeContext';

export default function LogoCard(props: CSSProps) {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[style.logo, props.styles]}>
      <UserIcon size={30} color={theme.color} />
      <Text style={[style.logo_text, {color: theme.color}]}>Feewer</Text>
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
