import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  UserIcon,
  RightIcon,
  AppIcon,
  SecurityIcon,
  SettingIcon,
  BellIcon,
} from '../../../constant/icons';
import {useNavigation} from '@react-navigation/native';
import {page_router} from '../../../constant/page_router';

const SMenu = () => {
  const nav = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => nav.navigate(page_router.stack.profile.setting.hesap)}
        delayPressIn={0}
        activeOpacity={0.75}
        style={style.li}>
        <SettingIcon color="#000" size={20} />
        <Text style={style.li_text}>Hesap</Text>
        <RightIcon color="#000" size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          nav.navigate(page_router.stack.profile.setting.set.bildirimler)
        }
        delayPressIn={0}
        activeOpacity={0.75}
        style={style.li}>
        <BellIcon color="#000" size={20} />
        <Text style={style.li_text}>Bildirimler</Text>
        <RightIcon color="#000" size={20} />
      </TouchableOpacity>
      {/* <View style={style.li}>
        <SecurityIcon color="#000" size={20} />
        <Text style={style.li_text}>Gizlilik</Text>
        <RightIcon color="#000" size={20} />
      </View> */}
      <TouchableOpacity
        onPress={() => nav.navigate(page_router.stack.profile.setting.set.app)}
        delayPressIn={0}
        activeOpacity={0.75}
        style={style.li}>
        <AppIcon color="#000" size={20} />
        <Text style={style.li_text}>Uygulama</Text>
        <RightIcon color="#000" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default SMenu;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  li: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  li_text: {
    fontSize: 14,
    lineHeight: 18,
    marginRight: 'auto',
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
