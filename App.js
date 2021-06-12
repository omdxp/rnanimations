import React from 'react';
import {Animated, View} from 'react-native';

export default function App() {
  return (
    <View>
      <Animated.View>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: 'blue',
          }}></View>
      </Animated.View>
    </View>
  );
}
