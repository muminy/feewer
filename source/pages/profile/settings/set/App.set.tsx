import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {ThemeContext} from '../../../../utils/ThemeContext';

export default function () {
  const {theme, setTheme} = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(theme.type);

  const handleTheme = () => setTheme(isEnabled);
  return (
    <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <TouchableOpacity
        delayPressIn={0}
        activeOpacity={0.75}
        onPress={() => setIsEnabled('dark')}
        style={style.li}>
        <Text style={[style.h2, {color: theme.color}]}>Dark</Text>
        <View
          style={[
            style.enable,
            {
              borderColor:
                isEnabled === 'dark' ? theme.color : theme.inactiveColor,
            },
          ]}></View>
      </TouchableOpacity>
      <TouchableOpacity
        delayPressIn={0}
        activeOpacity={0.75}
        onPress={() => setIsEnabled('light')}
        style={style.li}>
        <Text style={[style.h2, {color: theme.color}]}>Light</Text>
        <View
          style={[
            style.enable,
            {
              borderColor:
                isEnabled === 'light' ? theme.color : theme.inactiveColor,
            },
          ]}></View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleTheme}
        delayPressIn={0}
        activeOpacity={0.75}
        style={style.btn}>
        <Text style={style.h3}>Güncelle</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-end',
  },
  btn: {
    backgroundColor: '#0468ff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 5,
    marginTop: 6,
  },
  enable: {
    width: 20,
    height: 20,
    borderWidth: 3,
    borderColor: '#111',
  },
  h3: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  li: {
    paddingHorizontal: 15,
    paddingVertical: 6,
    flexDirection: 'row',
  },
  h2: {
    fontWeight: 'bold',
    color: '#111',
    marginRight: 'auto',
  },
});
