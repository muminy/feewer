import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomRouter from './BottomRouter';
import AuthStack from './AuthStack';
import {dark, light} from '../constant/config';
import {ThemeContext} from '../utils/ThemeContext';

const App = () => {
  const [login, setLogin] = useState(true);
  const [theme, setTheme] = useState('dark');
  return (
    <NavigationContainer>
      <ThemeContext.Provider
        value={{
          theme: theme === 'dark' ? dark : light,
          setTheme: (type: 'dark' | 'light') => setTheme(type),
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
