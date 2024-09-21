import React ,{useState,useEffect}from 'react';
import { StyleSheet, Text, View,Dimensions ,Image,TouchableOpacity,TouchableWithoutFeedback,ScrollView,TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
 import Entypo from '@expo/vector-icons/Entypo';
 import { Picker } from '@react-native-picker/picker';
 import Modal from 'react-native-modal';
 import countryList from 'country-list';
export default function App() {

const { width, height } = Dimensions.get('window');
const scaleFont = (size) => (width / 375) * size; // Assuming 375 is the base width (e.g., iPhone X)

const circleSize = width * 0.12; // 50% of screen width
const [selectedValue, setSelectedValue] = useState("java");
const countries = countryList.getData();
const [selectedCountry, setSelectedCountry] = useState(countries[0].name);
  const [isModalVisible, setModalVisible] = useState(false);
const [isModalVisible2, setModalVisible2] = useState(false);
 
    const handleSelect = (value) => {
    setSelectedHoroscope(value);
    setModalVisible(false); // Close the modal after selection
  };
 const handleSelect2 = (value) => {
    setSelectedCountry(value);
    setModalVisible2(false); // Close the modal after selection
  };


const horoscopes = [
  { label: 'Aries', value: 'aries' },
  { label: 'Taurus', value: 'taurus' },
  { label: 'Gemini', value: 'gemini' },
  { label: 'Cancer', value: 'cancer' },
  { label: 'Leo', value: 'leo' },
  { label: 'Virgo', value: 'virgo' },
  { label: 'Libra', value: 'libra' },
  { label: 'Scorpio', value: 'scorpio' },
  { label: 'Sagittarius', value: 'sagittarius' },
  { label: 'Capricorn', value: 'capricorn' },
  { label: 'Aquarius', value: 'aquarius' },
  { label: 'Pisces', value: 'pisces' },
];
const [selectedHoroscope, setSelectedHoroscope] = useState(horoscopes[0].label);

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['white','white','white' , 'white']} // Define your gradient colors
      style={styles.background}
    >
<Image 
          style={{width:width*0.3,height:width*0.2}} 
          source={require('./horoslogo.png')} 
          resizeMode='contain'
        />

  <TouchableOpacity style={{display:'flex',alignItems:'center'}}>
           <Image 
          style={{width:width*0.3,height:width*0.2}} 
          source={{uri:('https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1724630400&semt=ais_hybrid')}} 
          resizeMode='contain'
        />
          
       </TouchableOpacity>
    <ScrollView style={{flex:1}} >
       

     

  <Text style={{fontSize:scaleFont(17),fontWeight:700,color:'white',marginTop:width*0.04}}>FirstName</Text>
     

<TextInput style={{backgroundColor:'#f3eef0',borderWidth:width*0.001,borderColor:'#bdbdbd',width:width*0.94,marginTop:width*0.03,paddingVertical:width*0.035,
paddingHorizontal:width*0.02,borderRadius:width*0.02}} />



  <Text style={{fontSize:scaleFont(17),fontWeight:700,marginTop:width*0.04,color:'white'}}>LastName</Text>
     

<TextInput style={{backgroundColor:'#f3eef0',borderWidth:width*0.001,borderColor:'#bdbdbd',width:width*0.94,marginTop:width*0.03,paddingVertical:width*0.035,
paddingHorizontal:width*0.02,borderRadius:width*0.02}} />



 <Text style={{fontSize:scaleFont(17),fontWeight:700,marginTop:width*0.04,color:'white'}}>Country</Text>

<TouchableOpacity onPress={()=>{setModalVisible2(true)}} style={{display:'flex',justifyContent:'center',backgroundColor:'white',height:width*0.1,borderRadius:width*0.02,marginTop:width*0.06,paddingHorizontal:width*0.04}} >
<Text style={{color:'black',fontSize:scaleFont(19)}}>{selectedCountry}</Text>
</TouchableOpacity>

 <Text style={{fontSize:scaleFont(17),fontWeight:700,marginTop:width*0.04,color:'white'}}>Horoscop</Text>




 <Modal isVisible={isModalVisible}>
        <View style={{
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  }}>
          <Picker
            selectedValue={selectedHoroscope}
   
            onValueChange={(itemValue) => handleSelect(itemValue)}
          >
            {horoscopes.map((horoscope, index) => (
              <Picker.Item key={index} label={horoscope.label} value={horoscope.value} />
            ))}
          </Picker>
        </View>
      </Modal>

<Modal isVisible={isModalVisible2}>
        <View style={{
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  }}>
          <Picker
            selectedValue={selectedCountry}
   
            onValueChange={(itemValue) => handleSelect2(itemValue)}
          >
            {countries.map((horoscope, index) => (
              <Picker.Item key={index} label={horoscope.name} value={horoscope.name} />
            ))}
          </Picker>
        </View>
      </Modal>




 
<TouchableOpacity onPress={()=>{setModalVisible(true)}} style={{display:'flex',justifyContent:'center',backgroundColor:'white',height:width*0.1,borderRadius:width*0.02,marginTop:width*0.06,paddingHorizontal:width*0.04}} >
<Text style={{color:'black',fontSize:scaleFont(19)}}>{selectedHoroscope}</Text>
</TouchableOpacity>





 </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding:'3%',
paddingTop:'2.5%',
display:'flex',


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
