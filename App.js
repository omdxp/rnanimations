import React, {useState} from 'react';
import {Animated, TouchableOpacity, View, Text} from 'react-native';

export default function App() {
  const value = useState(new Animated.ValueXY({x: 0, y: 0}))[0];

  const moveBall = () => {
    Animated.timing(value, {
      toValue: {x: 100, y: 100},
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View>
      <Animated.View style={value.getLayout()}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: 'blue',
          }}
        />
      </Animated.View>
      <TouchableOpacity
        onPress={moveBall}
        style={{backgroundColor: 'red', width: 100}}>
        <Text style={{fontSize: 20}}>Move ball</Text>
      </TouchableOpacity>
    </View>
  );
}
