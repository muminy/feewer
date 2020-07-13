import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
} from 'react-native';

export default function () {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => setIsEnabled(!isEnabled)}
        style={style.li}>
        <Text style={style.h3}>Beğeniler</Text>
        <View
          style={[
            style.enable,
            {borderColor: isEnabled ? '#111' : '#ddd'},
          ]}></View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsEnabled(!isEnabled)}
        style={style.li}>
        <Text style={style.h3}>Takipçiler</Text>
        <View
          style={[
            style.enable,
            {borderColor: isEnabled ? '#111' : '#ddd'},
          ]}></View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setIsEnabled(!isEnabled)}
        style={style.li}>
        <Text style={style.h3}>Sorular</Text>
        <View
          style={[
            style.enable,
            {borderColor: isEnabled ? '#111' : '#ddd'},
          ]}></View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    paddingTop: 2,
    flex: 1,
  },
  enable: {
    width: 20,
    height: 20,
    borderWidth: 3,
    borderColor: '#111',
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginBottom: 12,
  },
  info: {
    width: '80%',
    fontSize: 12,
    elevation: 1,
  },
  btn: {
    backgroundColor: '#0468ff',
    marginBottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 3,
  },
  h3: {
    fontSize: 16,
    textAlign: 'center',
    color: '#111',
    marginRight: 'auto',
  },
  li: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginBottom: 2,
    backgroundColor: '#fff',
  },
});
