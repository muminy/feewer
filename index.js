/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './source/router/AppRoute';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
