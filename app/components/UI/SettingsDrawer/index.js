import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { colors, fontStyles } from '../../../styles/common';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
	root: {
		backgroundColor: colors.white,
		borderBottomColor: colors.inputBorderColor,
		borderBottomWidth: 1,
		flexDirection: 'row',
		minHeight: 100,
		paddingVertical: 18
	},
	content: {
		flex: 1
	},
	title: {
		...fontStyles.normal,
		color: colors.fontPrimary,
		fontSize: 20,
		marginBottom: 8
	},
	description: {
		...fontStyles.normal,
		color: colors.copy,
		fontSize: 14,
		lineHeight: 20,
		paddingRight: 8
	},
	action: {
		flex: 0,
		paddingHorizontal: 16
	},
	icon: {
		bottom: 8,
		color: colors.gray,
		left: 4,
		position: 'relative'
	},
	noBorder: {
		borderBottomWidth: 0
	}
});

export default class SettingsDrawer extends PureComponent {
	static propTypes = {
		/**
		 * Title of this settings option
		 */
		title: PropTypes.string,
		/**
		 * Additional descriptive text about this option
		 */
		description: PropTypes.string,
		/**
		 * Disable bottom border
		 */
		noBorder: PropTypes.bool,
		/**
		 * Handler called when this drawer is pressed
		 */
		onPress: PropTypes.func
	};

	render() {
		const { title, description, noBorder, onPress } = this.props;

		return (
			<TouchableOpacity onPress={onPress}>
				<View style={noBorder ? [styles.root, styles.noBorder] : styles.root}>
					<View style={styles.content}>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.description}>{description}</Text>
					</View>
					<View style={styles.action}>
						<Icon name="angle-right" size={36} style={styles.icon} />
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}
