import React, {useContext} from 'react';
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
import {ThemeContext} from '../../../utils/ThemeContext';

const SMenu = () => {
  const {theme} = useContext(ThemeContext);
  const nav = useNavigation();
  return (
    <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <TouchableOpacity
        onPress={() => nav.navigate(page_router.stack.profile.setting.hesap)}
        delayPressIn={0}
        activeOpacity={0.75}
        style={style.li}>
        <SettingIcon color={theme.color} size={20} />
        <Text style={[style.li_text, {color: theme.color}]}>Hesap</Text>
        <RightIcon color={theme.color} size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          nav.navigate(page_router.stack.profile.setting.set.bildirimler)
        }
        delayPressIn={0}
        activeOpacity={0.75}
        style={style.li}>
        <BellIcon color={theme.color} size={20} />
        <Text style={[style.li_text, {color: theme.color}]}>Bildirimler</Text>
        <RightIcon color={theme.color} size={20} />
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
        <AppIcon color={theme.color} size={20} />
        <Text style={[style.li_text, {color: theme.color}]}>Uygulama</Text>
        <RightIcon color={theme.color} size={20} />
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
