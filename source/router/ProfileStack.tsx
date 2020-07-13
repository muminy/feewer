import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainProfile from '../pages/profile/Main';
import {page_router} from '../constant/page_router';
import SMenu from '../pages/profile/settings/Menu';
import HesapSet from '../pages/profile/settings/Hesap.set';
import SetUsername from '../pages/profile/settings/set/Username.set';
import PasswordSet from '../pages/profile/settings/set/Password.set';
import EmailSet from '../pages/profile/settings/set/Email.set';
import BildirimlerSet from '../pages/profile/settings/set/Bildirimler.set';
import AppSet from '../pages/profile/settings/set/App.set';
const Stack = createStackNavigator();
function ProfileStack(props: any) {
  useEffect(() => {
    if (
      props.route &&
      props.route?.state &&
      props.route?.state?.routes?.length > 1
    ) {
      props.navigation.setOptions({
        tabBarVisible: false,
      });
    } else {
      props.navigation.setOptions({
        tabBarVisible: true,
      });
    }
  }, [props.route]);
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
            elevation: 0,
          },
        }}
        name={page_router.stack.profile.setting.menu}
        component={SMenu}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            elevation: 0,
          },
        }}
        name={page_router.stack.profile.setting.hesap}
        component={HesapSet}
      />

      <Stack.Screen
        options={{
          headerStyle: {
            elevation: 0,
          },
        }}
        name={page_router.stack.profile.setting.set.username}
        component={SetUsername}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            elevation: 0,
          },
        }}
        name={page_router.stack.profile.setting.set.password}
        component={PasswordSet}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            elevation: 0,
          },
        }}
        name={page_router.stack.profile.setting.set.email}
        component={EmailSet}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            elevation: 0,
          },
        }}
        name={page_router.stack.profile.setting.set.bildirimler}
        component={BildirimlerSet}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            elevation: 0,
          },
        }}
        name={page_router.stack.profile.setting.set.app}
        component={AppSet}
      />
    </Stack.Navigator>
  );
}

export default ProfileStack;
