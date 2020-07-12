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
import Main from '../pages/home/Main';
import {page_router} from '../constant/page_router';

const Bottom = createBottomTabNavigator();

const MA = () => <Text>asd</Text>;
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
          elevation: 0,
          borderTopWidth: 0,
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
        component={Main}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <SorularIcon size={size + 2} color={color} />
          ),
        }}
        name={page_router.bottom.bildirimler}
        component={Main}
      />
      <Bottom.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <UserIcon size={size + 2} color={color} />
          ),
        }}
        name={page_router.bottom.profil}
        component={Main}
      />
    </Bottom.Navigator>
  </NavigationContainer>
);

export default App;
