import React from 'react';
import { StyleSheet, Text, View,Dimensions ,Image,TouchableOpacity,ScrollView,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
 import Entypo from '@expo/vector-icons/Entypo';

import AppLoading from 'expo-app-loading';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { RFPercentage } from 'react-native-responsive-fontsize';
import * as Font from 'expo-font';
import { useFonts, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
export default function App() {

const { width, height } = Dimensions.get('window');
const scaleFont = (size) => (width / 375) * size; // Assuming 375 is the base width (e.g., iPhone X)

const circleSize = width * 0.12; // 50% of screen width
const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
  });
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['white' , 'white','white']} // Define your gradient colors
      style={styles.background}
    >
 <Image 
          style={{width:scale(135),height:verticalScale(55)}} 
          source={require('./assets/horoslogo.png')} 
          resizeMode='contain'
        />

<LinearGradient
      // Background Linear Gradient
      colors={['#bb083e' , '#fe6292','white']}  style={{display:'flex',justifyContent:'space-around',width:'100%',flex:'1',borderColor:'#ececec',borderTopEndRadius:verticalScale(65),paddingTop:verticalScale(35),paddingHorizontal:scale(25),marginTop:verticalScale(15)}}>
<Text style={{color:'white',fontSize:RFPercentage(4),fontWeight:700   , fontFamily: 'CuteFont',}}>Login</Text>

<Text style={{color:'white',fontSize:RFPercentage(3),fontWeight:500,marginTop:verticalScale(30),    fontFamily: 'CuteFont'}}>Email</Text>

<TextInput style={{backgroundColor:'white',width:scale(300),marginTop:verticalScale(5),
paddingHorizontal:width*0.02,borderRadius:scale(20),height:verticalScale(50), fontFamily: 'CuteFont'}} placeholder="Enter your email" />



<Text style={{color:'white',fontSize:RFPercentage(3),fontWeight:500,marginTop:verticalScale(5),    fontFamily: 'CuteFont'}}>Password</Text>

<TextInput style={{backgroundColor:'white',width:scale(300),marginTop:verticalScale(5),height:verticalScale(50),paddingVertical:width*0.03,
paddingHorizontal:width*0.02,borderRadius:scale(20),    fontFamily: 'CuteFont'}}placeholder="Enter your password"  />


<Text style={{display:'flex',alignItems:'center',justifyContent:'space-around',color:'#f1f1f1',fontSize:RFPercentage(2.3),fontWeight:400,marginTop:verticalScale(25),marginLeft:scale(5),    fontFamily: 'CuteFont'}} >If you dont have account?<Text style={{fontWeight:600,color:"#b5009a",marginTop:width*0.1,    fontFamily: 'CuteFont'}}>SignUp</Text> </Text>



<View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:width*0.05}}>
<TouchableOpacity style={{backgroundColor:'red',display:'flex',marginTop:verticalScale(10),justifyContent:'center',alignItems:'center',width:scale(130),height:verticalScale(45),borderRadius:width*0.08}}>
<Text style={{color:'white',fontSize:RFPercentage(2.3),fontWeight:500, fontFamily: 'CuteFont'}}>Connecter</Text>
</TouchableOpacity>


<TouchableOpacity style={{display:'flex',alignItems:'center',justifyContent:'space-around',color:'#5f5c5e',fontSize:scaleFont(15),fontWeight:700}} >
<Text style={{color:'#5f5c5e',fontSize:RFPercentage(2.4),fontWeight:700,marginTop:verticalScale(5), fontFamily: 'CuteFont'}}>Forgot password? </Text>
</TouchableOpacity>
</View>

<Text style={{fontSize:scaleFont(17),marginTop:verticalScale(20),width:'100%',textAlign:'center',fontWeight:700, fontFamily: 'CuteFont'}}>
Or
</Text>


<View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:verticalScale(15)}}>

<TouchableOpacity style={{backgroundColor:'white',width:scale(30),height:scale(30)}}> 
 <Image 
          style={{width:scale(30),height:scale(30)}} 
          source={{uri:('https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9')}} 
          resizeMode='contain'
        />

</TouchableOpacity>

<TouchableOpacity style={{width:scale(30),height:scale(30)}}>
 <Image 
          style={{width:scale(30),height:scale(30)}} 
          source={{uri:('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/800px-Gmail_icon_%282020%29.svg.png')}} 
          resizeMode='contain'
        />

</TouchableOpacity>

<TouchableOpacity style={{width:scale(30),height:scale(30)}}>
         <Image 
          style={{width:scale(30),height:scale(30)}} 
          source={{uri:('https://cdn-icons-png.flaticon.com/512/174/174857.png')}} 
          resizeMode='contain'
        />
        </TouchableOpacity>
</View>








</LinearGradient>



    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
paddingTop:'5%',
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