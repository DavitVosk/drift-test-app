import 'react-native-get-random-values';
import {Buffer} from 'buffer';
global.Buffer = Buffer;

import {AppRegistry, Text} from 'react-native';
import setDefaultProps from 'react-native-simple-default-props';

import App from './App';
import {name as appName} from './app.json';

setDefaultProps(Text, {
  style: [{fontFamily: 'ABCMarfaVariableVFTrial'}],
});

AppRegistry.registerComponent(appName, () => App);
