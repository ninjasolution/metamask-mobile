import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import CollectibleOverview from '../../UI/CollectibleOverview';
import { getNetworkNavbarOptions } from '../../UI/Navbar';
import StyledButton from '../../UI/StyledButton';
import { strings } from '../../../../locales/i18n';
import { colors, fontStyles } from '../../../styles/common';
import { setIndividualCollectibleTransaction } from '../../../actions/transaction';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: colors.white
	},
	wrapper: {
		flex: 0.9
	},
	buttons: {
		flex: 0.1,
		height: 4
	},
	button: {
		marginHorizontal: 16,
		flexDirection: 'row'
	},
	buttonText: {
		marginLeft: 8,
		fontSize: 15,
		color: colors.white,
		...fontStyles.bold
	}
});

/**
 * View that displays a specific collectible asset
 */
class CollectibleView extends Component {
	static propTypes = {
		/**
		/* navigation object required to access the props
		/* passed by the parent component
		*/
		navigation: PropTypes.object,
		/**
		 * Action that sets a collectible contract type transaction
		 */
		setIndividualCollectibleTransaction: PropTypes.func.isRequired
	};

	static navigationOptions = ({ navigation }) =>
		getNetworkNavbarOptions(navigation.getParam('contractName', ''), navigation);

	onSend = async () => {
		const {
			navigation: {
				state: { params }
			}
		} = this.props;
		this.props.setIndividualCollectibleTransaction(params);
		this.props.navigation.navigate('SendView');
	};

	render() {
		const {
			navigation: {
				state: { params }
			},
			navigation
		} = this.props;
		const collectible = params;
		return (
			<SafeAreaView style={styles.root}>
				<ScrollView style={styles.wrapper} ref={this.scrollViewRef}>
					<View style={styles.assetOverviewWrapper} testID={'asset'}>
						<CollectibleOverview navigation={navigation} collectible={collectible} />
					</View>
				</ScrollView>
				<View style={styles.buttons}>
					<StyledButton
						type={'confirm'}
						onPress={this.onSend}
						containerStyle={styles.button}
						style={styles.buttonContent}
						childGroupStyle={styles.flexRow}
					>
						<Text style={styles.buttonText}>{strings('asset_overview.send_button').toUpperCase()}</Text>
					</StyledButton>
				</View>
			</SafeAreaView>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setIndividualCollectibleTransaction: collectible => dispatch(setIndividualCollectibleTransaction(collectible))
});

export default connect(
	null,
	mapDispatchToProps
)(CollectibleView);
