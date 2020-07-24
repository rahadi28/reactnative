import React from 'react';
import {Container, Content, View, Text, Header, Button} from 'native-base';
import Footer from '../../components/Footer';
import Styles from './styles';

export default class ParkingPayment extends React.Component {
  state = {hasCameraPermission: null, scanned: false};

  //   getPermission = async () => {
  //     const {status} = await Permissions.askAsync(Permissions.CAMERA);
  //     this.setState({hasCameraPermission: status === 'granted'});
  //   };

  //   async componentDidMount() {
  //     this.getPermission();
  //   }

  //   handleBarCodeScanned = ({type, data}) => {
  //     Vibration.vibrate();
  //     this.setState({scanned: true});
  //     alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  //   };

  resetScanner() {
    this.setState({scanned: false});
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          {/* <BarCodeScanner
            onBarCodeScanned={
              this.state.scanned ? undefined : this.handleBarCodeScanned
            }
            style={Styles.cameraView}
          /> */}
          <View style={{marginTop: 10}}>
            <Button
              style={Styles.buttonScan}
              full
              rounded
              onPress={() => this.setState({scanned: false})}>
              <Text>Scan Again</Text>
            </Button>
          </View>
        </Content>
        <Footer />
      </Container>
    );
  }
}
