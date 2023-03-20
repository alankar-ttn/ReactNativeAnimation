import {Animated, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

const RotateText = () => {
  const rotateValue = new Animated.Value(0);
  const opacityValue = new Animated.Value(0);
  const scaleValue = new Animated.Value(0);

  Animated.timing(scaleValue, {
    toValue: 20,
    duration: 3000,
    useNativeDriver: true,
  }).start();

  Animated.timing(rotateValue, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  Animated.timing(opacityValue, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const opacity = opacityValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const scale = scaleValue.interpolate({
    inputRange: [0, 10],
    outputRange: [0, 10],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={{
          transform: [{rotate}, {scale}],
          opacity,
          color: "#000"
        }}>
        Rotate
      </Animated.Text>
    </View>
  );
};

export default RotateText;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});