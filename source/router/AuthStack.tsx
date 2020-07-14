import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {page_router} from '../constant/page_router';
import Login from '../pages/Login';
import Singup from '../pages/Singup';

const Stack = createStackNavigator();

export default function () {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={page_router.stack.auth.login} component={Login} />
      <Stack.Screen name={page_router.stack.auth.singup} component={Singup} />
    </Stack.Navigator>
  );
}
