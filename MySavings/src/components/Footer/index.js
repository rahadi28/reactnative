import React from 'react';
import {Footer, FooterTab, Button, Icon, Text} from 'native-base';
import {withNavigation} from 'react-navigation';

class FooterComponent extends React.Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{backgroundColor: 'white'}}>
          <Button onPress={() => this.props.navigation.push('Home')}>
            <Icon
              style={{color: '#459dda'}}
              type="MaterialCommunityIcons"
              name="home"
            />
            <Text
              style={{
                color: '#459dda',
                textTransform: 'capitalize',
              }}>
              Home
            </Text>
          </Button>
          <Button onPress={() => this.props.navigation.navigate('Payment')}>
            <Icon
              style={{color: '#9E9E9E'}}
              type="MaterialCommunityIcons"
              name="inbox-arrow-down"
            />
            <Text
              style={{
                color: '#9E9E9E',
                textTransform: 'capitalize',
              }}>
              Messages
            </Text>
          </Button>
          <Button onPress={() => this.props.navigation.navigate('Profile')}>
            <Icon
              style={{color: '#9E9E9E'}}
              type="MaterialCommunityIcons"
              name="alert-box"
            />
            <Text
              style={{
                color: '#9E9E9E',
                textTransform: 'capitalize',
              }}>
              Complaint
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default withNavigation(FooterComponent);
