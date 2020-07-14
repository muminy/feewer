import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ArrowLeftIcon} from '../../constant/icons';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../utils/ThemeContext';

export default function () {
  const nav = useNavigation();
  const {theme} = useContext(ThemeContext);
  return (
    <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={style.src_con}>
        <TouchableOpacity
          delayPressIn={0}
          onPress={() => nav.goBack()}
          style={{width: 45, alignItems: 'center'}}>
          <ArrowLeftIcon size={32} color={theme.color} />
        </TouchableOpacity>
        <TextInput
          style={[
            style.textinput,
            {
              borderColor: theme.borderColor,
              backgroundColor: theme.backgroundColor,
            },
          ]}
          placeholderTextColor={theme.color}
          placeholder="Bir kullanıcı ara"
        />
      </View>
      <ScrollView></ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: '#f6f6f6',
    borderRadius: 3,
    marginLeft: 10,
    flex: 1,
  },
  src_con: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
