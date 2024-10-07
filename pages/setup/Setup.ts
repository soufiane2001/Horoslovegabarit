
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { RFPercentage } from 'react-native-responsive-fontsize';
import countryList from 'country-list';

export default function App() {
  const { width } = Dimensions.get('window');
  const scaleFont = (size) => (width / 375) * size; // Assuming 375 is the base width

  const countries = countryList.getData();
  const [selectedCountry, setSelectedCountry] = useState(countries[0].name);
  const [isModalVisible2, setModalVisible2] = useState(false);

  const handleSelect2 = (value) => {
    setSelectedCountry(value);
    setModalVisible2(false); // Close the modal after selection
  };

    const [isModalVisible, setModalVisible] = useState(false);

 
    const handleSelect = (value) => {
    setSelectedHoroscope(value);
    setModalVisible(false); // Close the modal after selection
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <LinearGradient
        colors={['white', 'white']} // Define your gradient colors
        style={styles.background}
      >
        <Image
          style={{ width: scale(105), height:verticalScale(65),marginLeft:'1%' }}
          source={require('./horoslogo.png')}
          resizeMode='contain'
        />

        <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            style={{ width:scale(95), height: verticalScale(65)}}
            source={{
              uri: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1724630400&semt=ais_hybrid',
            }}
            resizeMode='contain'
          />
        </TouchableOpacity>

        <LinearGradient
          colors={['#bb083e', '#fe6292', 'white']}
          style={{
            flex: 1,
            paddingVertical: moderateScale(15),
            borderTopEndRadius: moderateScale(65),
            marginTop: verticalScale(15),
          }}
        >
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: moderateScale(15) }}
            keyboardShouldPersistTaps='handled'
          >
            <Text
              style={{
                fontSize: RFPercentage(2.5),
                fontWeight: '700',
                color: 'white',
                marginTop: width * 0.04,
              }}
            >
              FirstName
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your firstname"
            />

            <Text
              style={{
                fontSize:RFPercentage(2.5),
                fontWeight: '700',
                marginTop: width * 0.04,
                color: 'white',
              }}
            >
              LastName
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your lastname"
            />

            <Text
              style={{
                fontSize: RFPercentage(2.5),
                fontWeight: '700',
                marginTop: width * 0.04,
                color: 'white',
              }}
            >
              Country
            </Text>

            <TouchableOpacity
              onPress={() => setModalVisible2(true)}
              style={styles.pickerButton}
            >
              <Text style={styles.pickerText}>{selectedCountry}</Text>
            </TouchableOpacity>

            <Modal isVisible={isModalVisible2}>
              <View style={styles.modal}>
                <Picker
                  selectedValue={selectedCountry}
                  onValueChange={(itemValue) => handleSelect2(itemValue)}
                >
                  {countries.map((country, index) => (
                    <Picker.Item key={index} label={country.name} value={country.name} />
                  ))}
                </Picker>
              </View>
            </Modal>



 <Text style={{fontSize:RFPercentage(2.5),fontWeight:700,marginTop:width*0.04,color:'white'}}>Horoscop</Text>




 <Modal isVisible={isModalVisible}>
        <View style={{
    backgroundColor: 'white',
    padding: scale(!0),
    borderRadius: moderateScale(20),
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




 
<TouchableOpacity onPress={()=>{setModalVisible(true)}} style={{display:'flex',justifyContent:'center',backgroundColor:'white',height:verticalScale(40),borderRadius:moderateScale(15),marginTop:verticalScale(7),paddingHorizontal:scale(15)}} >
<Text style={{color:'black',fontSize:RFPercentage(2.5)}}>{selectedHoroscope}</Text>
</TouchableOpacity>












            <Text
              style={{
                fontSize: RFPercentage(2.5),
                fontWeight: '700',
                marginTop:verticalScale(13),
                color: 'white',
              }}
            >
              Description
            </Text>

            <View style={styles.textAreaContainer}>
              <TextInput
                style={{ 
    fontSize:RFPercentage(2.4),
    height: verticalScale(165),
    justifyContent: 'flex-start',
    borderRadius:moderateScale(35),
    textAlignVertical: 'top'}}
                multiline={true}
                numberOfLines={10}
                placeholder="Type something..."
              />
            </View>

<TouchableOpacity style={{backgroundColor:'red',display:'flex',marginTop:verticalScale(2),marginLeft:"2%",justifyContent:'center',alignItems:'center',width:scale(95),paddingVertical:verticalScale(10),borderRadius:moderateScale(18)}}>
<Text style={{color:'white',fontSize:RFPercentage(2.6),fontWeight:500, fontFamily: 'CuteFont'}}>Save</Text>
</TouchableOpacity>


          </ScrollView>
        </LinearGradient>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    width: '100%',
    marginTop: verticalScale(8),
    paddingVertical: verticalScale(13),
    paddingHorizontal: 8,
    borderRadius: moderateScale(35),
    height:verticalScale(43)
  },
  pickerButton: {
    justifyContent: 'center',
    backgroundColor: 'white',
    height: verticalScale(40),
    borderRadius: moderateScale(15),
    marginTop: 10,
    paddingHorizontal: scale(15),
  },
  pickerText: {
    color: 'black',
    fontSize:RFPercentage(2.5)
  },
  modal: {
    backgroundColor: 'white',
    padding: moderateScale(2),
    borderRadius: moderateScale(15),
  },
  textAreaContainer: {
    backgroundColor:'white',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: moderateScale(7),
    marginBottom: 20,
    marginTop: verticalScale(12),
  },
  textArea: {
    
  },
});