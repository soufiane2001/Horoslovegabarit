import React from 'react';
import { StyleSheet, Text, View,Dimensions ,Image,TouchableOpacity,ScrollView,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
 import Entypo from '@expo/vector-icons/Entypo';
 import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {

const { width, height } = Dimensions.get('window');
const scaleFont = (size) => (width / 375) * size; // Assuming 375 is the base width (e.g., iPhone X)

const circleSize = width * 0.12; // 50% of screen width
let [fontsLoaded] = useFonts({
    'CuteFont': require('./assets/Poppins-Medium.ttf'), // Update the path as necessary
  });
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
      colors={['#bb083e' , '#fe6292','white']}  style={{width:'100%',flex:'1',borderColor:'#ececec',borderTopEndRadius:width*0.18,padding:width*0.07}}>
<Text style={{color:'white',fontSize:scaleFont(24),fontWeight:700}}>
SignUp</Text>

<Text style={{color:'white',fontSize:scaleFont(17),fontWeight:500,marginTop:width*0.08}}>Email</Text>

<TextInput style={{backgroundColor:'white',width:width*0.83,marginTop:width*0.03,paddingVertical:width*0.03,
paddingHorizontal:width*0.04,borderRadius:width*0.01, fontFamily: 'CuteFont'}} placeholder="Enter your email"   />



<Text style={{color:'white',fontSize:scaleFont(17),fontWeight:500,marginTop:width*0.05}}>Password</Text>

<TextInput style={{backgroundColor:'white',width:width*0.83,marginTop:width*0.03,paddingVertical:width*0.03,
paddingHorizontal:width*0.04,borderRadius:width*0.01, fontFamily: 'CuteFont'}} placeholder="Enter a paasword" />


<Text style={{display:'flex',alignItems:'center',justifyContent:'space-around',color:'#f1f1f1',fontSize:scaleFont(16),fontWeight:500,marginTop:width*0.04, fontFamily: 'CuteFont'}} >you have already account?<Text style={{fontWeight:600,color:"#b5009a",marginLeft:'5%',marginTop:width*0.01, fontFamily: 'CuteFont'}}>Login</Text> </Text>



<TouchableOpacity style={{backgroundColor:'red',display:'flex',marginTop:width*0.04,justifyContent:'center',alignItems:'center',width:width*0.4,paddingVertical:width*0.03,borderRadius:width*0.08}}>

<Text style={{color:'white',fontSize:scaleFont(15),fontWeight:700, fontFamily: 'CuteFont'}}>Create account</Text>

</TouchableOpacity>
<Text style={{fontSize:scaleFont(17),marginTop:width*0.05,width:'100%',textAlign:'center',fontWeight:700, fontFamily: 'CuteFont'}}>
Or
</Text>


<View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:width*0.08}}>

<TouchableOpacity style={{backgroundColor:'white',width:width*0.1,height:width*0.1}}> 
 <Image 
          style={{width:width*0.1,height:width*0.1}} 
          source={{uri:('https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9')}} 
          resizeMode='contain'
        />

</TouchableOpacity>

<TouchableOpacity style={{width:width*0.1,height:width*0.1}}>
 <Image 
          style={{width:width*0.1,height:width*0.1}} 
          source={{uri:('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/800px-Gmail_icon_%282020%29.svg.png')}} 
          resizeMode='contain'
        />

</TouchableOpacity>

<TouchableOpacity style={{backgroundColor:'white',width:width*0.1,height:width*0.1}}>
         <Image 
          style={{width:width*0.1,height:width*0.1}} 
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
