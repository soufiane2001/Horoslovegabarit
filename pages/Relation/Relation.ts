
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,FlatList,Modal,
  TouchableOpacity
, Slider, Picker ,ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { RFPercentage } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';
import { useFonts, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing
} from 'react-native-reanimated';

export default function Home() {








  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });
   
  const { width, height } = Dimensions.get('window');
  const scaleFont = (size) => (width / 375) * size; // Assuming 375 is the base width
 


const [ageRange, setAgeRange] = useState([18, 30]); // Default age range
  const [country, setCountry] = useState('Russia'); // Default country

  // Reanimated shared value for the animated filter panel
  const translateY = useSharedValue(-300); // Initially offscreen



/******************************* */

  var users=[{name:"kristina",age:22,country:'russia',img:'https://img.freepik.com/photos-gratuite/portrait-femme-blonde-regarder-photographe_23-2148348970.jpg'},{
  name:"anna",age:19,country:'russia',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1l6fbVIlb9dXMPu06Tnl5wO-v_cEi2a2Yw&s'}
  
  ];
  // State to track hearts and close icons that appear on the screen
 
const filterTranslation = useSharedValue(height);

   const visible=useSharedValue(0);
   const filterScale = useSharedValue(0);
  // Animation for main heart scaling
  const animatedHeartStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: 0}],
    };
  });


var filterwidth=useSharedValue(0);


  

var me=useSharedValue(-380);
var him=useSharedValue(250)


  const meStyle = useAnimatedStyle(() => {
    return {
      left:me.value,
    };
  });


  const himStyle = useAnimatedStyle(() => {
    return {
      left:him.value,
    };
  });













    React.useEffect(() => {

     me.value=withTiming(-150,{duration:1000});
him.value=withTiming(100,{duration:1000});

    }, []);

 

    

  return (
    <View style={{ flex: 1 }}>
      
      <View
        style={{
          height: '10%',
          display: 'flex',
          padding: width * 0.03,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <Image
          style={{ width: width * 0.3, height: height * 0.05, marginLeft: '1%' }}
          source={require('./horoslogo.png')}
          resizeMode="contain"
        />

  







 <Animated.View style={[{position:'absolute',top:verticalScale(110)},meStyle]}>
       <Image
          style={{ width: scale(420), height: verticalScale(400),borderRadius:verticalScale(450)}}
          source={{uri:'https://img.freepik.com/photos-gratuite/portrait-femme-blonde-regarder-photographe_23-2148348970.jpg'}}
          resizeMode="cover"
        />
    
 
</Animated.View>

 





 
 <Animated.View style={[{position:'absolute',top:verticalScale(110)},himStyle]}>
       <Image
          style={{ width: scale(420), height: verticalScale(400),borderRadius:verticalScale(450)}}
          source={{uri:'https://img.freepik.com/photos-gratuite/portrait-femme-blonde-regarder-photographe_23-2148348970.jpg'}}
          resizeMode="cover"
        />
    
 
</Animated.View>






 <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Let's Start Chatting</Text>
      </TouchableOpacity>







</View>




    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    backgroundColor: '#6a5acd', // Custom color like purple
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    position:'absolute',
    top:verticalScale(580),
    left:scale(70)
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
