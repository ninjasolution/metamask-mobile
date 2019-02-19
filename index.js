import './shim.js';

import crypto from 'crypto'; // eslint-disable-line import/no-nodejs-modules, no-unused-vars
require('react-native-browser-polyfill'); // eslint-disable-line import/no-commonjs
import { AppRegistry, YellowBox } from 'react-native';
import Root from './app/components/Views/Root';
import { name } from './app.json';
// eslint-disable-next-line import/no-unresolved
import { useScreens } from 'react-native-screens';
useScreens();

// List of warnings that we're ignoring
YellowBox.ignoreWarnings([
	'this.web3.eth',
	'collectibles.map',
	'AssetsDectionController._callee',
	'Accessing view manager configs directly off',
	'Function components cannot be given refs.',
	'Task orphaned for request',
	'Module RNOS requires',
	'use RCT_EXPORT_MODULE',
	'Setting a timer for a long period of time',
	'Did not receive response to shouldStartLoad in time',
	'startLoadWithResult invoked with invalid',
	'RCTBridge required dispatch_sync',
	'Remote debugger is in a background tab',
	"Can't call setState (or forceUpdate) on an unmounted component"
]);

/**
 * Application entry point responsible for registering root component
 */
AppRegistry.registerComponent(name, () => Root);
