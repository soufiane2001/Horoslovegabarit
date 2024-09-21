import React from 'react';
import { StyleSheet, Text, View,Dimensions ,Image,TouchableOpacity,ScrollView,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
 import Entypo from '@expo/vector-icons/Entypo';
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
          style={{width:width*0.45,height:width*0.35}} 
          source={require('./horoslogo.png')} 
          resizeMode='contain'
        />

<LinearGradient
      // Background Linear Gradient
      colors={['#bb083e' , '#fe6292','white']}  style={{width:'100%',flex:'1',borderColor:'#ececec',borderTopEndRadius:width*0.2,padding:width*0.1}}>
<Text style={{color:'white',fontSize:scaleFont(24),fontWeight:700}}>Reset Password</Text>

<Text style={{color:'white',fontSize:scaleFont(17),fontWeight:500,marginTop:width*0.09}}>Email</Text>

<TextInput style={{backgroundColor:'white',width:width*0.8,marginTop:width*0.03,paddingVertical:width*0.035,
paddingHorizontal:width*0.02,borderRadius:width*0.02}} />







<View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:width*0.08}}>
<TouchableOpacity style={{backgroundColor:'red',display:'flex',marginTop:width*0.04,justifyContent:'center',alignItems:'center',width:width*0.4,paddingVertical:width*0.03,borderRadius:width*0.08}}>
<Text style={{color:'white',fontSize:scaleFont(17),fontWeight:700}}>Send Email</Text>
</TouchableOpacity>


</View>










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
