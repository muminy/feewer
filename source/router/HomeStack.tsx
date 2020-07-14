import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainHome from '../pages/home/Main';
import {page_router} from '../constant/page_router';
import SMenu from '../pages/profile/settings/Menu';
import Search from '../pages/global/Search';
import {ThemeContext} from '../utils/ThemeContext';
const Stack = createStackNavigator();
function HomeStack() {
  const {theme} = useContext(ThemeContext);
  return (
    <Stack.Navigator
      screenOptions={{cardStyle: {backgroundColor: theme.backgroundColor}}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={page_router.bottom.home}
        component={MainHome}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={page_router.stack.home.search}
        component={Search}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
