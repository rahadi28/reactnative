import React from 'react';
import {View, Animated, TouchableOpacity, Text, FlatList} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Styles from './styles';

const quotes = [
    { id: '0', text: 'It’s just a flesh wound.' },
    { id: '1', text: 'That is my least vulnerable spot.' },
    { id: '2', text: 'This building has to be at least…. three times bigger than this!'},
    { id: '3', text: 'I am serious. And don’t call me Shirley.' },
    { id: '4', text: 'Yeah, but I shoot with this hand.' },
    { id: '5', text: 'I’m just one stomach flu away from my goal weight.' },
    { id: '6', text: 'I’m about to do to you what Limp Bizkit did to music in the late ’90s.'},
    { id: '7', text: 'Martini. Gin, not vodka. Obviously. Stirred for 10 seconds while glancing at an unopened bottle of vermouth.'},
    { id: '8', text: 'Greater good?’ I am your wife! I’m the greatest good you’re ever gonna get!'},
    { id: '9', text: 'I feel comfortable using legal jargon in everyday life. [Someone catcalls her.] I object!'},
    { id: '10', text: 'We get the warhead and we hold the world ransom for…. One million dollars.'},
];

const Separator = () => <View style={Styles.separator} />;

const LeftActions = (progress, dragX) => {
  const scale = dragX.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  return (
    <View style={Styles.leftAction}>
      <Animated.Text style={[Styles.actionText, {transform: [{scale}]}]}>
        Add to Cart
      </Animated.Text>
    </View>
  );
};

const RightActions = ({progress, dragX, onPress}) => {
  const scale = dragX.interpolate({
    inputRange: [-100, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={Styles.rightAction}>
        <Animated.Text style={[Styles.actionText, {transform: [{scale}]}]}>
          Delete
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
};

const ListItem = ({text, onSwipeFromLeft, onRightPress}) => (
  <Swipeable
    renderLeftActions={LeftActions}
    onSwipeableLeftOpen={onSwipeFromLeft}
    renderRightActions={(progress, dragX) => (
      <RightActions progress={progress} dragX={dragX} onPress={onRightPress} />
    )}>
    <View style={Styles.container}>
      <Text style={Styles.text}>{text}</Text>
    </View>
  </Swipeable>
);

const SwipeGestures = () => {
  return (
    <>
      <FlatList
        data={quotes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <ListItem
            {...item}
            onSwipeFromLeft={() => alert('swiped from left!')}
            onRightPress={() => alert('pressed right!')}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </>
  );
};

export default SwipeGestures;