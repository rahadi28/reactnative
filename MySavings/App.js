import 'react-native-gesture-handler';
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Payment from './src/screens/Payment';
import ParkingPayment from './src/screens/ParkingPayment';
import {Root} from 'native-base';

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
    },
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
    Profile: {
      screen: Profile,
    },
    Payment: {
      screen: Payment,
    },
    ParkingPayment: {
      screen: ParkingPayment,
    },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Root>
          <AppContainer />
        </Root>
      </Provider>
    );
  }
}
