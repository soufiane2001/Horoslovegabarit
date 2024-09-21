import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, PixelRatio, StyleSheet, Text, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing, withDelay, interpolate } from 'react-native-reanimated';



const { width } = Dimensions.get('window'); 
const CIRCLE_SIZE = width * 0.09; // 50% of screen width
const POINT_SIZE = CIRCLE_SIZE * 0.4;


  const scaleFontSize = (size) => {
  const scale = width / 375; // Assuming 375 as the base width (e.g., iPhone X)
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
  }



export default function Waiting() {
    const scale = useSharedValue(1);

    scale.value = withRepeat(
      withTiming(2.3, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }),
      -3,
      true
    );
  
    const animatedStyle = useAnimatedStyle(() => {
      return {
        transform: [{ scale: scale.value }],

      };
    });
  return (
    <View style={styles.container}>
<View style={{width:'100%',paddingTop:'40%',height:'100%',justifyContent:'space-between',display:'flex',alignItems:'center'}}>
        <Image
          style={styles.logo} 
          source={require('../../assets/horoslogo.png')} 
        />
      <Animated.View style={[styles.circle, animatedStyle]} />
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    logo:{
        width:'90%',
 resizeMode:'contain'
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
   paddingVertical:'15%',
    alignItems:'center'
    },
    circle: {
    
        width: scaleFontSize(25),
        height: scaleFontSize(25),
        borderRadius: 50,
        backgroundColor: '#ff88ae', // Light blue color
      },

});
