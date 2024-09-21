
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
          style={{ width: width * 0.3, height: width * 0.3,marginLeft:'5%' }}
          source={require('./horoslogo.png')}
          resizeMode='contain'
        />

        <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            style={{ width: width * 0.3, height: width * 0.2 }}
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
            paddingVertical: width * 0.1,
            borderTopEndRadius: width * 0.2,
            marginTop: width * 0.08,
          }}
        >
          <ScrollView
            contentContainerStyle={{ paddingHorizontal: width * 0.06 }}
            keyboardShouldPersistTaps='handled'
          >
            <Text
              style={{
                fontSize: scaleFont(16),
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
                fontSize: scaleFont(16),
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
                fontSize: scaleFont(16),
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
<Text style={{color:'black',fontSize:scaleFont(16)}}>{selectedHoroscope}</Text>
</TouchableOpacity>












            <Text
              style={{
                fontSize: scaleFont(16),
                fontWeight: '700',
                marginTop: width * 0.045,
                color: 'white',
              }}
            >
              Description
            </Text>

            <View style={styles.textAreaContainer}>
              <TextInput
                style={{ 
    fontSize:scaleFont(16),
    height: 150,
    justifyContent: 'flex-start',
    textAlignVertical: 'top'}}
                multiline={true}
                numberOfLines={10}
                placeholder="Type something..."
              />
            </View>

<TouchableOpacity style={{backgroundColor:'red',display:'flex',marginTop:width*0.01,marginLeft:"2%",justifyContent:'center',alignItems:'center',width:width*0.38,paddingVertical:width*0.03,borderRadius:width*0.08}}>
<Text style={{color:'white',fontSize:scaleFont(16),fontWeight:500, fontFamily: 'CuteFont'}}>Save</Text>
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
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  pickerButton: {
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 50,
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 16,
  },
  pickerText: {
    color: 'black',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  textAreaContainer: {
    backgroundColor:'white',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 10,
  },
  textArea: {
    
  },
});