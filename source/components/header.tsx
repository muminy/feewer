import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SettingIcon, SearchIcon} from '../constant/icons';
import LogoCard from './logo';
import {CSSProps} from '../types';
import {useNavigation} from '@react-navigation/native';
import {page_router} from '../constant/page_router';
import {ThemeContext} from '../utils/ThemeContext';

export default function (props: {routeName: string}) {
  const {theme} = useContext(ThemeContext);
  const nav = useNavigation();
  return (
    <View
      style={[
        style.container,
        {
          backgroundColor: theme.backgroundColor,
          borderBottomColor: theme.borderColor,
        },
      ]}>
      <LogoCard styles={{flex: 0.6}} />
      <TouchableOpacity
        onPress={() => nav.navigate(props.routeName)}
        style={style.src}>
        <SearchIcon size={30} color={theme.color} />
      </TouchableOpacity>
    </View>
  );
}

export function ProfileHeader(props: CSSProps) {
  const {theme} = useContext(ThemeContext);
  const nav = useNavigation();
  return (
    <View
      style={[
        style.container,
        props.styles,
        {
          backgroundColor: theme.backgroundColor,
          borderBottomColor: theme.borderColor,
        },
      ]}>
      <LogoCard styles={{flex: 0.6}} />
      <TouchableOpacity
        onPress={() => nav.navigate(page_router.stack.profile.setting.menu)}
        style={style.src}>
        <SettingIcon size={30} color={theme.color} />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 0,
    paddingLeft: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    elevation: 0,
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
    paddingHorizontal: 15,
  },
});
