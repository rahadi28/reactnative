import React from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../../assets/images/Logo.png';
import Mail from '../../../assets/images/envelope.png';
import Password from '../../../assets/images/lock.png';
import Styles from './styles';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={Styles.container}>
        <StatusBar
          translucent
          backgroundColor="rgba(0,0,0,0.1)"
          barStyle="light-content"
        />
        <Image source={Logo} style={Styles.logo} />
        <Text style={Styles.title}>MY SAVINGS</Text>
        <View style={Styles.inputView}>
          <Image source={Mail} style={Styles.icon} />
          <TextInput
            style={Styles.textInput}
            placeholder="Email"
            placeholderTextColor="#AFB6C0"
            autoCompleteType="email"
          />
        </View>
        <View style={Styles.inputView}>
          <Image source={Password} style={Styles.icon} />
          <TextInput
            style={Styles.textInput}
            placeholder="Password"
            placeholderTextColor="#AFB6C0"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity onPress={() => Alert.alert('Pressed login button')}>
          <LinearGradient
            style={Styles.buttonContainer}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#17B7C8', '#3EC5CC', '#3ABDB4']}>
            <Text style={Styles.buttonText}>LOG IN</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableHighlight
          underlayColor="rgba(0,0,0,0,0)"
          onPress={() => Alert.alert('Pressed forgot password')}>
          <Text style={Styles.touchableText}>Forgot password?</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
