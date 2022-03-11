import React, { useRef, useEffect } from 'react';

import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

import LottieView from 'lottie-react-native';

export default function AnimationLib() {

  let animationRef = useRef();

  useEffect(() => {
    animationRef.play();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.MainContainer}>

        <Text style={styles.text}> ABHIJIT KUMAR </Text>

        <LottieView
          ref={(animation) => {
            animationRef = animation;
          }}
          source={require('../image/8370-loading.json')}
          autoPlay
          loop
          style={{
            width: 300,
            height: 300,
          }}
          resizeMode='cover'
        />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  MainContainer: {
    backgroundColor:'black',
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontSize: 24,
    textAlign: 'center',
  },
  
});