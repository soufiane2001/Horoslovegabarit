import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, Easing, withDelay } from 'react-native-reanimated';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const Welcom = () => {
  const buttonScale = useSharedValue(1);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(50);

  // Load custom font
  let [fontsLoaded] = useFonts({
    'CuteFont': require('../../assets/font/static/Montserrat-Regular.ttf'), // Update the path as necessary
  });

  // Animated style for entrance
  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:withDelay(700, withTiming(opacity.value, { duration: 1100 })),
      transform: [{ translateY: withDelay(2500,withTiming(translateY.value, { duration: 1100 })) }],
    };
  });

  // Animated style for button breathing effect
  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: buttonScale.value }],
    };
  });

  useEffect(() => {
    // Start entrance animation
    opacity.value = 1;
    translateY.value = 0;

    // Start breathing animation
    buttonScale.value = withRepeat(
      withTiming(1.05, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handlePressIn = () => {
    buttonScale.value = withTiming(0.95, { duration: 150 });
  };

  const handlePressOut = () => {
    buttonScale.value = withTiming(1.05, { duration: 150 });
  };

  return (
    <Animated.View style={[styles.container, containerAnimatedStyle]}>
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo} 
          source={require('../../assets/horoslogo.png')} 
        />
      </View>

      <Animated.View style={styles.textContainer}>
        <Text style={styles.titleText}>Find Your Soulmate</Text>
      </Animated.View>    

      <Animated.View style={[styles.buttonContainer, buttonAnimatedStyle]}>
        <TouchableOpacity 
          onPressIn={handlePressIn} 
          onPressOut={handlePressOut} 
          style={styles.startButton}
        >
          <Text style={styles.buttonText}>Let's Start</Text>
        </TouchableOpacity>
      </Animated.View> 
    </Animated.View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '50%'
  },
  logo: {
    width: '80%',
    
    resizeMode: 'contain',
  },
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '10%'
  },
  titleText: {
    color: 'gray',
    fontSize: moderateScale(20),
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: 'CuteFont', // Custom font
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%'
  },
  startButton: {
    backgroundColor: '#FFB6C1', // Light pink color
    width: '50%',
    borderRadius: '25@ms', // Rounded button
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(20),
    fontWeight: '700',
    fontFamily: 'CuteFont', // Custom font
  },
});

export default Welcom;
