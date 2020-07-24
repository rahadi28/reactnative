import React from 'react';
import {
  Container,
  Content,
  View,
  Text,
  Header,
  Button,
  Icon,
  Left,
  Body,
  Title,
  Right,
} from 'native-base';
import Footer from '../../components/Footer';
import Styles from './styles';

class Payment extends React.Component {
  doParkingPay = () => {
    this.props.navigation.push('ParkingPayment');
  };

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#2F3C51'}}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Payment</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', flex: 1}}>
            <Button transparent style={Styles.buttonService}>
              <Icon name="battery-charging" />
              <Text>Listrik</Text>
            </Button>
            <Button transparent style={Styles.buttonService}>
              <Icon name="card" />
              <Text>Topup</Text>
            </Button>
            <Button
              transparent
              style={Styles.buttonService}
              onPress={this.doParkingPay}>
              <Icon name="subway" />
              <Text>Parkir</Text>
            </Button>
          </View>
        </Content>
        <Footer />
      </Container>
    );
  }
}

export default Payment;
