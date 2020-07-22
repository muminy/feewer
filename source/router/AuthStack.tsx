import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {page_router} from '../constant/page_router';
import Login from '../pages/Login';
import Singup from '../pages/Singup';
import KisiselBilgi from '../pages/kayit/KisiselBilgi';
import {ThemeContext} from '../utils/ThemeContext';
import Gizlilik from '../pages/kayit/Gizlilik';

const Stack = createStackNavigator();

export default function () {
  const {theme} = useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: theme.backgroundColor},
        headerTintColor: theme.color,
        headerStyle: {
          backgroundColor: theme.backgroundColor,
          elevation: 0,
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={page_router.stack.auth.login}
        component={Login}
      />
      <Stack.Screen
        name={page_router.stack.auth.singup.main}
        component={Singup}
      />
      <Stack.Screen
        name={page_router.stack.auth.singup.step.kisiselbilgi}
        component={KisiselBilgi}
      />
      <Stack.Screen
        name={page_router.stack.auth.singup.step.gizlilik}
        component={Gizlilik}
      />
    </Stack.Navigator>
  );
}
