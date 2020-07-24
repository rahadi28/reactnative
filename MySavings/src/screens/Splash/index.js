import React from 'react';
import {View, Text, Image} from 'react-native';
import {Spinner} from 'native-base';
import Logo from '../../../assets/images/Logo.png';
import Styles from './styles';

export default class Splash extends React.Component {
  state = {loading: true};

  setLoading = () => {
    this.setState({loading: false});
  };

  async componentDidMount() {
    // load everything here
    this.setLoading();
  }

  redirect = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2500);
  };

  render() {
    if (this.state.loading) {
      return <Spinner style={Styles.spinner} />;
    }

    return (
      <View style={Styles.container}>
        <Image source={Logo} style={Styles.logo} />
        <Text style={Styles.title}>My Savings</Text>
        {this.redirect()}
      </View>
    );
  }
}
