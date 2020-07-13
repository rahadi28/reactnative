import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import changeNavigationBarColor, {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';
import Logo from '../../../assets/images/Logo.png';
import Styles from './styles';

export default class Splash extends React.Component {
  componentDidMount() {
    hideNavigationBar();
  }

  render() {
    return (
      <View style={Styles.container}>
        <StatusBar hidden={true} />
        <Image source={Logo} style={Styles.logo} />
        <Text style={Styles.title}>My Savings</Text>
      </View>
    );
  }
}
