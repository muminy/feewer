import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FacebookIcon, TwitterIcon, MailIcon} from '../constant/icons';
import {ThemeContext} from '../utils/ThemeContext';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

export default function () {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '218139171205-p5l7tatbmabskdddrknot8g6qbveau2q.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      //hostedDomain: '', // specifies a hosted domain restriction
      //loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      //accountName: '', // [Android] specifies an account name on the device that should be used
      //iosClientId: ''
    });
  }, []);
  const {theme} = useContext(ThemeContext);
  const loginOl = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
      console.log(error);
    }
  };
  return (
    <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={[style.lbox, {backgroundColor: theme.backgroundColor}]}>
        <Text style={style.logo}>FEEWER</Text>
      </View>
      <GoogleSigninButton
        style={[style.singup, {width: '90%'}]}
        color={GoogleSigninButton.Color.Light}
        onPress={loginOl}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    letterSpacing: 4,
  },
  lbox: {
    borderRadius: 5,
    backgroundColor: '#212121',
    paddingHorizontal: 20,
    marginBottom: 'auto',
    marginTop: 'auto',
    paddingVertical: 10,
    borderColor: '#fff',
  },
  singup: {
    width: '90%',
    borderRadius: 3,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  text: {
    textTransform: 'uppercase',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 15,
  },
  create: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
