import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Bottom = createBottomTabNavigator();

const MA = () => (
    <Text>asd</Text>
)
const App = () => (
    <NavigationContainer>
        <Bottom.Navigator>
            <Bottom.Screen name="asd" component={MA} />
        </Bottom.Navigator>
    </NavigationContainer>
)

export default App;