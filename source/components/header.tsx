import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SettingIcon, SearchIcon} from '../constant/icons';
import LogoCard from './logo';
import {CSSProps} from '../types';
import {useNavigation} from '@react-navigation/native';
import {page_router} from '../constant/page_router';

export default function () {
  const nav = useNavigation();
  return (
    <View style={style.container}>
      <LogoCard styles={{flex: 0.6}} />
      <View style={style.src}>
        <SearchIcon size={30} color="#000" />
      </View>
    </View>
  );
}

export function ProfileHeader(props: CSSProps) {
  const nav = useNavigation();
  return (
    <View style={[style.container, props.styles]}>
      <LogoCard styles={{flex: 0.6}} />
      <TouchableOpacity
        onPress={() => nav.navigate(page_router.stack.profile.setting)}
        style={style.src}>
        <SettingIcon size={30} color="#000" />
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
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
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
