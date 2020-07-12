import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../components/header';
export default function () {
  return (
    <View style={style.container}>
      <Header />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
