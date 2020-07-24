import React from 'react';
import {
  View,
  Text,
  Container,
  Header,
  Body,
  Title,
  Right,
  Button,
  Content,
  Card,
  CardItem,
  Grid,
  Row,
} from 'native-base';
import {connect} from 'react-redux';
import {logout} from '../../redux/Actions';

class Profile extends React.Component {
  doLogout = () => {
    this.props.logout();
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#4EE151', height: 80}}>
          <Body>
            <Title style={{marginLeft: 5, marginTop: 20}}>Profile</Title>
          </Body>
          <Right>
            <Button
              onPress={this.doLogout}
              style={{
                backgroundColor: 'red',
                marginTop: 20,
                color: 'white',
                marginRight: 5,
              }}>
              <Text>Logout</Text>
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Card style={{padding: 10}}>
            <CardItem>
              <Grid>
                <Row>
                  <View style={{flex: 1}}>
                    <Text>Name: {this.props.user.fullName}</Text>
                    <Text>Address : {this.props.user.address}</Text>
                  </View>
                </Row>
              </Grid>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {user: state.UserActive};
};

const mapDispatchToProps = {
  logout: logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
