import React from 'react';
import {View, Icon, Text} from 'native-base';
import Logo from '../../../assets/images/MySavings.png';
import {Image} from 'react-native';

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <View
        style={{
          height: 80,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'royalblue',
          paddingStart: 15,
          elevation: 10,
          opacity: 5,
          shadowOpacity: 5,
        }}>
        <Icon
          type="MaterialCommunityIcons"
          name="wallet"
          style={{color: 'white', marginRight: 15}}
        />
        <Image source={Logo} style={{height: 16, width: 80}} />
      </View>
    );
  }
}
