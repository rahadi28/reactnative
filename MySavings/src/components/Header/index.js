import React from 'react';
import {Image} from 'react-native';
import {Icon, Header, Left, Right, Badge} from 'native-base';
import Logo from '../../../assets/images/MySavings.png';

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <>
        <Header
          androidStatusBarColor="transparent"
          noShadow
          style={{
            backgroundColor: '#2469a5',
            marginTop: 20,
            marginHorizontal: 4,
          }}>
          <Left>
            <Image source={Logo} style={{height: 25, width: 125}} />
          </Left>
          <Right>
            <Icon name="notifications" style={{color: 'white'}} />
            <Badge
              style={{
                position: 'absolute',
                right: -4,
                top: -4,
                height: 14,
                borderWidth: 1,
                borderColor: '#2469a5',
              }}
            />
          </Right>
        </Header>
      </>
    );
  }
}
