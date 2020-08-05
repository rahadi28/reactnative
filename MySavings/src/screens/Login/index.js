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
  BackHandler,
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {setUserActive} from '../../redux/Actions';
import Logo from '../../../assets/images/Logo.png';
import Mail from '../../../assets/images/envelope.png';
import Password from '../../../assets/images/lock.png';
import Styles from './styles';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.backAction,
    );
  }

  backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  doLogin = async () => {
    if (this.state.email === 'q' && this.state.password === 'q') {
      this.props.setUserActive({
        accountNumber: 1210001083918,
        balance: '100000000',
        fullName: 'Rahadi Oemar',
        address: 'Jl. Saco Ragunan No.71',
      });
      this.props.navigation.navigate('Home');
      ToastAndroid.show('Login successfully', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Login failed', ToastAndroid.SHORT);
    }
  };

  render() {
    return (
      <View style={Styles.container}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0.1)" />
        <Image source={Logo} style={Styles.logo} />
        <Text style={Styles.title}>MY SAVINGS</Text>
        <View style={Styles.inputView}>
          <Image source={Mail} style={Styles.icon} />
          <TextInput
            style={Styles.textInput}
            placeholder="Email"
            placeholderTextColor="#AFB6C0"
            autoCompleteType="email"
            value={this.state.email}
            onChangeText={email => {
              this.setState({email: email});
            }}
          />
        </View>
        <View style={Styles.inputView}>
          <Image source={Password} style={Styles.icon} />
          <TextInput
            style={Styles.textInput}
            placeholder="Password"
            placeholderTextColor="#AFB6C0"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => {
              this.setState({password: password});
            }}
          />
        </View>
        <TouchableOpacity onPress={this.doLogin}>
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

const mapDispatchToProps = {
  setUserActive: setUserActive,
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);
