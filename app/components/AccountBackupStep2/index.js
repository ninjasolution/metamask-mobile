import React, { Component } from 'react';
import { ScrollView, Alert, Text, TouchableOpacity, View, SafeAreaView, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';
import Emoji from 'react-native-emoji';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pager from '../Pager';
import { colors, fontStyles } from '../../styles/common';
import StyledButton from '../StyledButton';
import { strings } from '../../../locales/i18n';

const styles = StyleSheet.create({
	mainWrapper: {
		backgroundColor: colors.white,
		flex: 1
	},
	scrollviewWrapper: {
		flex: 1
	},
	wrapper: {
		flex: 1,
		padding: 30,
		paddingTop: 0
	},
	content: {
		alignItems: 'flex-start'
	},
	title: {
		fontSize: 32,
		marginTop: 20,
		marginBottom: 20,
		color: colors.fontPrimary,
		justifyContent: 'center',
		textAlign: 'left',
		...fontStyles.normal
	},
	text: {
		marginBottom: 10,
		justifyContent: 'center'
	},
	label: {
		fontSize: 16,
		color: colors.fontPrimary,
		textAlign: 'left',
		...fontStyles.normal
	},
	subtitle: {
		marginBottom: 5
	},
	emoji: {
		textAlign: 'left',
		fontSize: 75,
		marginTop: 10
	},
	buttonWrapper: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	warning: {
		marginBottom: 20
	},
	warningText: {
		lineHeight: 22,
		color: colors.darkRed
	},
	bullet: {
		marginRight: 5
	},
	bulletPoint: {
		flexDirection: 'row',
		marginBottom: 15
	},
	navbarRightButton: {
		alignSelf: 'flex-end',
		paddingHorizontal: 22,
		paddingTop: 20,
		paddingBottom: 10
	},
	closeIcon: {
		fontSize: 28,
		color: colors.fontSecondary
	}
});

/**
 * View that's shown during the second step of
 * the backup seed phrase flow
 */
export default class AccountBackupStep2 extends Component {
	static propTypes = {
		/**
		/* navigation object required to push and pop other views
		*/
		navigation: PropTypes.object
	};

	dismiss = () => {
		Alert.alert(
			strings('account_backup_step_2.cancel_backup_title'),
			strings('account_backup_step_2.cancel_backup_message'),
			[
				{
					text: strings('account_backup_step_2.cancel_backup_ok'),
					onPress: () => {
						this.props.navigation.popToTop();
						this.props.navigation.goBack(null);
					}
				},
				{
					text: strings('account_backup_step_2.cancel_backup_no'),
					onPress: () => null,
					style: 'cancel'
				}
			],
			{ cancelable: false }
		);
	};

	goNext = () => {
		this.props.navigation.navigate('AccountBackupStep3', { ...this.props.navigation.state.params });
	};

	render() {
		return (
			<SafeAreaView style={styles.mainWrapper}>
				<ScrollView
					contentContainerStyle={styles.scrollviewWrapper}
					style={styles.mainWrapper}
					testID={'account-backup-step-2-screen'}
				>
					<Pager pages={5} selected={1} />
					<TouchableOpacity onPress={this.dismiss} style={styles.navbarRightButton}>
						<Icon name="close" size={15} style={styles.closeIcon} />
					</TouchableOpacity>
					<View style={styles.wrapper} testID={'protect-your-account-screen'}>
						<View style={styles.content}>
							<Emoji name="writing_hand" style={styles.emoji} />
							<Text style={styles.title}>{strings('account_backup_step_2.title')}</Text>
							<View style={styles.warning}>
								<Text style={[styles.label, styles.warningText]}>
									{strings('account_backup_step_2.info_text_1')}
								</Text>
							</View>
							<View style={styles.text}>
								<Text style={[styles.label, styles.subtitle]}>
									{strings('account_backup_step_2.security_tips')}
								</Text>
							</View>
							<View style={styles.text}>
								<View style={styles.bulletPoint}>
									<Text style={styles.bullet}>{'\u2022'}</Text>
									<Text style={styles.label}>{strings('account_backup_step_2.tip_1')}</Text>
								</View>
								<View style={styles.bulletPoint}>
									<Text style={styles.bullet}>{'\u2022'}</Text>
									<Text style={styles.label}>{strings('account_backup_step_2.tip_2')}</Text>
								</View>
								<View style={styles.bulletPoint}>
									<Text style={styles.bullet}>{'\u2022'}</Text>
									<Text style={styles.label}>{strings('account_backup_step_2.tip_3')}</Text>
								</View>
							</View>
						</View>
						<View style={styles.buttonWrapper}>
							<StyledButton
								containerStyle={styles.button}
								type={'confirm'}
								onPress={this.goNext}
								testID={'submit-button'}
							>
								{strings('account_backup_step_2.cta_text')}
							</StyledButton>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
