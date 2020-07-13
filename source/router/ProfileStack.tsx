import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainProfile from '../pages/profile/Main';
import {page_router} from '../constant/page_router';
import SMenu from '../pages/profile/settings/Menu';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();
function ProfileStack(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={page_router.bottom.profil}
        component={MainProfile}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            elevation: 1,
          },
        }}
        name={page_router.stack.profile.setting}
        component={SMenu}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
