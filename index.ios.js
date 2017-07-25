/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry, Text, View, Button } from 'react-native';
import { StackNavigator, crossFade } from 'react-navigation';
import App from './js/App';

class ChatScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		title: navigation.state.params.title
	});
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>
					{this.props.navigation.state.params.title}
				</Text>
				<View>
					<Button onPress={() => navigate('Ahome', { title: 'title passing' })} title="Chat with Lucy" />
				</View>
			</View>
		);
	}
}

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome'
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Button onPress={() => navigate('Chat', { title: 'title passing' })} title="Chat with Lucy" />
				<Button onPress={() => navigate('FullDemo', { title: 'title passing' })} title="Full Demo" />
			</View>
		);
	}
}

class AHomeScreen extends React.Component {
	static navigationOptions = {
		title: 'Welcome'
	};
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Button onPress={() => navigate('Chat', { title: 'title passing' })} title="Chat with Lucy" />
			</View>
		);
	}
}

const SimpleApp = StackNavigator(
	{
		Home: { screen: HomeScreen },
		Ahome: { screen: AHomeScreen },
		Chat: { screen: ChatScreen, mode: 'modal' },
		FullDemo: { screen: App }
	},
	{
		initialRouteName: 'Home'
		// headerMode: 'none',
		// mode: 'modal'
	}
);

AppRegistry.registerComponent('StackNavigator', () => SimpleApp);
