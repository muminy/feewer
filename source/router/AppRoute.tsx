import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon, SorularIcon, UserIcon} from '../constant/icons';
import {config} from '../constant/config';
import NMain from '../pages/notify/Main';
import {page_router} from '../constant/page_router';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import BottomRouter from './BottomRouter';
import AuthStack from './AuthStack';
import {dark, light} from '../constant/config';
import {ThemeContext} from '../utils/ThemeContext';
const Bottom = createBottomTabNavigator();

const App = () => {
  const [login, setLogin] = useState(true);
  const [theme, setTheme] = useState('dark');
  return (
    <NavigationContainer>
      <ThemeContext.Provider
        value={{
          theme: theme === 'dark' ? dark : light,
          setTheme: (_: any) => setTheme(_),
        }}>
        <StatusBar
          backgroundColor={theme === 'dark' ? '#000' : '#fff'}
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        />
        {login ? <BottomRouter /> : <AuthStack />}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};

export default App;
