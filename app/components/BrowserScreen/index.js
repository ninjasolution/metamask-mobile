import Browser from '../Browser';
import BrowserHome from '../BrowserHome';
import AddBookmark from '../AddBookmark';
import Approval from '../Approval';
import PersonalSign from '../PersonalSign';
import { createStackNavigator } from 'react-navigation';

/**
 * Main view component for the browser screen, renders a StackNavigator that
 * holds every approval view in the order they are triggered
 */
export default createStackNavigator(
	{
		BrowserHome: {
			screen: BrowserHome
		},
		BrowserView: {
			screen: Browser
		},
		AddBookmark: {
			screen: AddBookmark
		},
		Approval: {
			screen: Approval
		},
		PersonalSign: {
			screen: PersonalSign
		}
	},
	{
		mode: 'modal'
	}
);
