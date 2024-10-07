
import React from 'react';
import { StyleSheet, Text, View,Dimensions ,Image,TouchableOpacity,ScrollView,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
 import Entypo from '@expo/vector-icons/Entypo';
 import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { RFPercentage } from 'react-native-responsive-fontsize';
export default function App() {

const { width, height } = Dimensions.get('window');
const scaleFont = (size) => (width / 375) * size; // Assuming 375 is the base width (e.g., iPhone X)

const circleSize = width * 0.12; // 50% of screen width

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['white' , 'white','white']} // Define your gradient colors
      style={styles.background}
    >
 <Image 
          style={{width:scale(155),height:verticalScale(55)}} 
          source={require('./horoslogo.png')} 
          resizeMode='contain'
        />

<LinearGradient
      // Background Linear Gradient
      colors={['#bb083e' , '#fe6292','white']}  style={{width:'100%',marginTop:verticalScale(45),flex:'1',borderColor:'#ececec',borderTopEndRadius:moderateScale(65),display:'flex',paddingHorizontal:scale(35),justifyContent:'center'}}>
<Text style={{color:'white',fontSize:scaleFont(24),fontWeight:700}}>Reset Password</Text>

<Text style={{color:'white',fontSize:scaleFont(17),fontWeight:500,marginTop:width*0.09}}>Email</Text>

<TextInput style={{backgroundColor:'white',width:scale(270),marginTop:width*0.03,paddingVertical:width*0.035,
paddingHorizontal:width*0.02,borderRadius:moderateScale(55)}} />







<TouchableOpacity style={{backgroundColor:'red',display:'flex',marginTop:verticalScale(40),justifyContent:'center',alignItems:'center',width:scale(130),height:verticalScale(50),borderRadius:moderateScale(35)}}>
<Text style={{color:'white',fontSize:RFPercentage(2.9),fontWeight:500}}>Send Email</Text>
</TouchableOpacity>











</LinearGradient>



    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
paddingTop:'10%',
display:'flex',
justifyContent:'center',
alignItems:'center'
  },
  overlay: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional: Add a semi-transparent overlay
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});