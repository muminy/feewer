import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon, SorularIcon, UserIcon} from '../constant/icons';
import {config} from '../constant/config';
import NMain from '../pages/notify/Main';
import {page_router} from '../constant/page_router';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import {ThemeContext} from '../utils/ThemeContext';

const Bottom = createBottomTabNavigator();
export default function () {
  const {theme} = useContext(ThemeContext);
  return (
    <Bottom.Navigator
      lazy={true}
      tabBarOptions={{
        activeTintColor: theme.imColor,
        inactiveTintColor: config.icolor,
        style: {
          height: 55,
          elevation: 0,
          borderTopWidth: 1,
          borderTopColor: theme.borderColor,
          backgroundColor: theme.backgroundColor,
          paddingBottom: 3,
        },
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 12,
        },
      }}>
      <Bottom.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <HomeIcon size={size + 2} color={color} />
          ),
        }}
        name={page_router.bottom.home}
        component={HomeStack}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <SorularIcon size={size + 2} color={color} />
          ),
        }}
        name={page_router.bottom.bildirimler}
        component={NMain}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <UserIcon size={size + 2} color={color} />
          ),
        }}
        name={page_router.bottom.profil}
        component={ProfileStack}
      />
    </Bottom.Navigator>
  );
}
