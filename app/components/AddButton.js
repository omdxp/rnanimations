// import react native
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Animated,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import GifImage from '@lowkey/react-native-gif';
import LottieView from 'lottie-react-native';

// export AddButton component
export default function AddButton() {
  const buttonSize = useState(new Animated.Value(1))[0];
  const mode = useState(new Animated.Value(0))[0];

  const pressHandler = () => {
    Animated.sequence([
      Animated.timing(buttonSize, {
        toValue: 0.95,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(buttonSize, {
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.timing(mode, {
        toValue: mode._value === 0 ? 1 : 0,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const thermometerX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [20, -50],
  });

  const thermometerY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50],
  });

  const timeX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 10],
  });

  const timeY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -90],
  });

  const pulseX = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 75],
  });

  const pulseY = mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50],
  });

  return (
    <View style={{position: 'absolute', alignItems: 'center'}}>
      <Animated.View
        style={{
          position: 'absolute',
          left: thermometerX,
          top: thermometerY,
        }}>
        <View style={styles.secondaryButton}>
          {/* <Feather name="thermometer" size={24} color="#FFF" /> */}
          <LottieView source={require('../assets/thermo.json')} autoPlay loop />
        </View>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          left: timeX,
          top: timeY,
        }}>
        <View style={styles.secondaryButton}>
          {/* <Feather name="clock" size={24} color="#FFF" /> */}
          <LottieView
            source={require('../assets/lf30_editor_hvfr5ggs.json')}
            autoPlay
            loop
          />
        </View>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          left: pulseX,
          top: pulseY,
        }}>
        <View style={styles.secondaryButton}>
          {/* <Feather name="activity" size={24} color="#FFF" /> */}
          <LottieView
            source={require('../assets/134-target-outline-edited.json')}
            autoPlay
            loop
          />
        </View>
      </Animated.View>
      <Animated.View
        style={[styles.button, {transform: [{scale: buttonSize}]}]}>
        <TouchableHighlight onPress={pressHandler} underlayColor="#7F58FF">
          <Animated.View
            style={{
              transform: [
                {
                  rotate: mode.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '135deg'],
                  }),
                },
              ],
            }}>
            <FontAwesome5 name="plus" size={24} color="#fff" />
          </Animated.View>
        </TouchableHighlight>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7F58FF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    borderRadius: 36,
    top: -20,
    shadowColor: '#7F58FF',
    shadowRadius: 5,
    shadowOffset: {height: 10},
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: '#fff',
  },
  secondaryButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#7F58FF',
  },
});
