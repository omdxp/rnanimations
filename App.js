import React, {useState} from 'react';
import {View, Animated, TouchableOpacity, Text} from 'react-native';

export default function App() {
  const value = useState(new Animated.Value(0))[0];

  const fadeIn = () => {
    Animated.timing(value, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(value, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          borderRadius: 100 / 2,
          backgroundColor: 'red',
          opacity: value,
        }}
      />
      <TouchableOpacity onPress={fadeIn}>
        <Text>Fade in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fadeOut}>
        <Text>Fade out</Text>
      </TouchableOpacity>
    </View>
  );
}
