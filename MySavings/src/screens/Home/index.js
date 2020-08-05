import Accounting from 'accounting';
import {
  Card,
  CardItem,
  Col,
  Container,
  Content,
  Grid,
  Icon,
  ListItem,
  Row,
  Text,
  View,
  Button,
} from 'native-base';
import React from 'react';
import {connect} from 'react-redux';
import FooterComponent from '../../components/Footer';
import HeaderComponent from '../../components/Header';
import { TouchableHighlight, TouchableOpacity } from 'react-native';

class Home extends React.Component {
  state = {isShowDetail: false, iconName: 'arrow-dropdown'};

  showDetail = () => {
    if (this.state.isShowDetail) {
      return (
        <Row style={{height: 125}}>
          <View style={{flex: 1}}>
            <ListItem style={{flex: 1}}>
              <Text style={{textAlign: 'center'}}>
                Full Name : {this.props.user.fullName}
              </Text>
            </ListItem>
            <ListItem style={{flex: 1}}>
              <Text style={{textAlign: 'center'}}>
                Address : {this.props.user.address}
              </Text>
            </ListItem>
            <ListItem>
              <Text />
            </ListItem>
          </View>
        </Row>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <Container style={{backgroundColor: 'whitesmoke'}}>
        <HeaderComponent />
        <Content padder>
          <Card
            transparent
            style={{
              overflow: 'hidden',
              borderRadius: 15,
            }}>
            <CardItem>
              <Grid style={{height: 80}}>
                <Col
                  style={{
                    width: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 5,
                  }}>
                  <Icon
                    type="FontAwesome5"
                    name="coins"
                    style={{color: '#459dda', fontSize: 20}}
                  />
                </Col>
                <Col style={{justifyContent: 'space-evenly'}}>
                  <Text
                    style={{
                      color: '#459dda',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    Balance
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 18,
                    }}>
                    {Accounting.formatMoney(this.props.user.balance, {
                      symbol: 'IDR',
                      format: '%v %s',
                      thousand: '.',
                      precision: 0,
                    })}
                  </Text>
                  <Text
                    style={{
                      color: 'darkgray',
                      fontSize: 12,
                    }}>
                    {this.props.user.accountNumber}
                  </Text>
                </Col>
                <Col style={{justifyContent: 'center', width: 20}}>
                  <TouchableOpacity onPress={() => alert('Tap account detail')}>
                    <Icon
                      type="MaterialCommunityIcons"
                      name="chevron-right"
                      style={{color: '#9E9E9E', fontSize: 24}}
                    />
                  </TouchableOpacity>
                </Col>
              </Grid>
            </CardItem>
          </Card>
          <Card transparent style={{overflow: 'hidden', borderRadius: 15}}>
            <CardItem>
              <Container style={{flex: 1, width: null, height: null}}>
                <Content padder>
                  <Grid>
                    <Row style={{marginBottom: 40}}>
                      <Col
                        style={{
                          alignItems: 'center',
                          paddingHorizontal: 3,
                        }}>
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#E8F5E9',
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Icon
                            type="MaterialCommunityIcons"
                            name="account-plus"
                            style={{color: '#4CAF50'}}
                          />
                        </View>
                        <Text style={{fontSize: 12, marginTop: 5}}>
                          Open Account
                        </Text>
                      </Col>
                      <Col
                        style={{
                          alignItems: 'center',
                          paddingHorizontal: 3,
                        }}>
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#FFEBEE',
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Icon
                            type="MaterialCommunityIcons"
                            name="cash"
                            style={{color: '#E57373'}}
                          />
                        </View>
                        <Text style={{fontSize: 12, marginTop: 5}}>
                          Deposit
                        </Text>
                      </Col>
                      <Col
                        style={{
                          alignItems: 'center',
                          paddingHorizontal: 3,
                        }}>
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#E6E6FA',
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Icon
                            type="MaterialCommunityIcons"
                            name="cash"
                            style={{color: '#5C6BC0'}}
                          />
                        </View>
                        <Text style={{fontSize: 12, marginTop: 5}}>
                          Withdrawal
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        style={{
                          alignItems: 'center',
                          paddingHorizontal: 3,
                        }}>
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#FBE9E7',
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Icon
                            type="MaterialIcons"
                            name="payment"
                            style={{color: '#FF8A65'}}
                          />
                        </View>
                        <Text style={{fontSize: 12, marginTop: 5}}>
                          Payment
                        </Text>
                      </Col>
                      <Col
                        style={{
                          alignItems: 'center',
                          paddingHorizontal: 3,
                        }}>
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#ECEFF1',
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Icon
                            type="MaterialCommunityIcons"
                            name="bank-transfer"
                            style={{color: '#607D8B'}}
                          />
                        </View>
                        <Text style={{fontSize: 12, marginTop: 5}}>
                          Transfer
                        </Text>
                      </Col>
                      <Col
                        style={{
                          alignItems: 'center',
                          paddingHorizontal: 3,
                        }}>
                        <View
                          style={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#E1F5FE',
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Icon
                            type="MaterialCommunityIcons"
                            name="bank-transfer"
                            style={{color: '#00B0FF'}}
                          />
                        </View>
                        <Text style={{fontSize: 12, marginTop: 5}}>
                          Another Bank
                        </Text>
                      </Col>
                    </Row>
                  </Grid>
                </Content>
              </Container>
            </CardItem>
          </Card>
        </Content>
        <FooterComponent />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {user: state.UserActive};
};

export default connect(mapStateToProps)(Home);
