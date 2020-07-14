import {createContext} from 'react';
import {dark} from '../constant/config';
import {ThemeType} from '../types';

export const ThemeContext = createContext({
  theme: dark,
  setTheme: (_: any) => _,
});
export const ThemeProvider = ThemeContext.Provider;
