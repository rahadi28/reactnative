import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Styles from './styles';

const SwipeGestures = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.title}>TODOS</Text>
    </SafeAreaView>
  );
};

export default SwipeGestures;
