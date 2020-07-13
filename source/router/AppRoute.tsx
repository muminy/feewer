import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIcon, SorularIcon, UserIcon} from '../constant/icons';
import {config} from '../constant/config';
import HMain from '../pages/home/Main';
import NMain from '../pages/notify/Main';
import {page_router} from '../constant/page_router';

const Bottom = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    <Bottom.Navigator
      tabBarOptions={{
        activeTintColor: config.color,
        inactiveTintColor: config.icolor,
        style: {
          height: 55,
          paddingBottom: 3,
          paddingTop: 3,
          elevation: 2,
          borderTopWidth: 1,
          borderTopColor: '#f2f2f2',
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
        component={HMain}
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
        component={HMain}
      />
    </Bottom.Navigator>
  </NavigationContainer>
);

export default App;
