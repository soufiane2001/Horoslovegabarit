import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
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
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
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
    const [isFilterVisible, setIsFilterVisible] = useState(false);
  const { width, height } = Dimensions.get('window');
  const scaleFont = (size) => (width / 375) * size; // Assuming 375 is the base width
  const heartScale = useSharedValue(1);
  const leftdetail=useSharedValue("45%");
    const topdetail=useSharedValue("45%");
  const closeIconScale = useSharedValue(1);
 /**************************************/
var underline=useSharedValue(0);

var underlinee=useSharedValue(1);


 const underlineStyle = useAnimatedStyle(() => {
    return {
    borderBottomWidth: underline.value 
    };
  });

 const underlineeStyle = useAnimatedStyle(() => {
    return {
    borderBottomWidth: underlinee.value 
    };
  });


const handleunderlinePress = () => {
if(underline.value==0){
    underline.value = withTiming(2,1000)
       underlinee.value = withTiming(0,1000)
}
else{
  underline.value = withTiming(0,1000)
       underlinee.value = withTiming(2,1000)
}



}





 /**************************************88 */
const [filters, setFilters] = useState({
    age: '18-30',
    country: 'Russia',
    // Add more filters as needed
  });

  // Function to update filter state
  const updateFilter = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

/*********************************** */
var matches=[1,11,1,1,1,1,1,1,1,1,1,1,1,1]

const [ageRange, setAgeRange] = useState([18, 30]); // Default age range
  const [country, setCountry] = useState('Russia'); // Default country

  // Reanimated shared value for the animated filter panel
  const translateY = useSharedValue(-300); // Initially offscreen


  const applyFilters = () => {
    // Handle applying filters logic
    console.log('Filters applied:', { ageRange, country });
  };


/******************************* */

  var users=[{name:"kristina",age:22,country:'russia',img:'https://img.freepik.com/photos-gratuite/portrait-femme-blonde-regarder-photographe_23-2148348970.jpg'},{
  name:"anna",age:19,country:'russia',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1l6fbVIlb9dXMPu06Tnl5wO-v_cEi2a2Yw&s'}
  
  ];
  // State to track hearts and close icons that appear on the screen
  const [hearts, setHearts] = useState([]);
  const [closes, setCloses] = useState([]);
  const widthdetail=useSharedValue(0);
  const heightdetail=useSharedValue(0);
  const raduisdetail=useSharedValue(500);
const filterTranslation = useSharedValue(height);
  var [i,setI]=useState(0)
   const filterBorderRadius = useSharedValue(100);
   const detailTranslation=useSharedValue(0);
   const visible=useSharedValue(0);
   const filterScale = useSharedValue(0);
  // Animation for main heart scaling
  const animatedHeartStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: heartScale.value }],
    };
  });


var filterwidth=useSharedValue(0);
var filterheight=useSharedValue(0);

   const animatedFilterStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: filterTranslation.value }],
       borderRadius: filterBorderRadius.value,
       width:filterwidth.value,
       height:filterheight.value
    };
  });
//


   const animateddetail = useAnimatedStyle(() => {
    return {
    width:widthdetail.value,
    height:heightdetail.value,
    borderRadius:raduisdetail.value,
    display:visible.value==0?"none":'block',
    left:leftdetail.value,
    top:topdetail.value
    };
  });






  // Animation for close icon scaling
  const animatedCloseStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: closeIconScale.value }],
    };
  });

  // Function to trigger the main heart animation
  const handleHeartPress = () => {
    heartScale.value = withSpring(1.5, {}, () => {
      heartScale.value = withSpring(1);
    });
    // Add a new heart to the state to animate it floating upwards
    setHearts([hearts, Date.now()]);

  
  };

  // Function to handle close icon press
  const handleClosePress = () => {
    closeIconScale.value = withSpring(1.5, {}, () => {
      closeIconScale.value = withSpring(1);
    });
    // Add a new close icon to the state to animate it floating upwards
   
  };

const handeldetailPress=()=>{
widthdetail.value=withTiming(width,{duration:500});
heightdetail.value=withTiming(height+verticalScale(20),{duration:500});
raduisdetail.value=withTiming(0,{duration:600});
leftdetail.value=withTiming("0%",{duration:500});
topdetail.value=withTiming("0%",{duration:500});
visible.value=1;

}




const closedetailPress=()=>{
widthdetail.value=withTiming(0,{duration:600});
heightdetail.value=withTiming(0,{duration:500});
raduisdetail.value=withTiming(0,{duration:1000});
leftdetail.value=withTiming("100%",{duration:500});
topdetail.value=withTiming("85%",{duration:500});
visible.value=withTiming(0,{duration:1100});

}





/******************************************************************************************************/

    const handleFilterPress = () => {
     
    if (isFilterVisible) {
      filterTranslation.value = withTiming(height+verticalScale(44), { duration: 700, easing: Easing.inOut(Easing.ease) });
      filterBorderRadius.value = withTiming(100, { duration: 500, easing: Easing.inOut(Easing.ease) });

    } else {
      filterTranslation.value = withTiming(0, { duration: 300, easing: Easing.inOut(Easing.ease) });
           filterBorderRadius.value = withTiming(0, { duration: 500, easing: Easing.inOut(Easing.ease) });
           filterwidth.value= withTiming(width, { duration: 500, easing: Easing.inOut(Easing.ease) });
           filterheight.value= withTiming(height+verticalScale(40), { duration: 500, easing: Easing.inOut(Easing.ease) });
    }
    setIsFilterVisible(!isFilterVisible);
  };




 





/************************************************************************************************************ */










  // Heart floating animation styles
  const FloatingHeart = ({ id }) => {
    const translateY = useSharedValue(0);
    const opacity = useSharedValue(1);

    const floatingStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translateY.value }],
        opacity: opacity.value,
      };
    });

    React.useEffect(() => {
      translateY.value = withSpring(-height * 0.5, { duration: 8000 });
      opacity.value = withTiming(0, { duration: 1000 });
    }, []);

    return (
      <Animated.View
        key={id}
        style={[
          floatingStyle,
          {
            position: 'absolute',
            bottom: height * 0.2,
            left: Math.random() * width * 0.8, // Random horizontal position
          },
        ]}
      >
        <AntDesign name="heart" size={scaleFont(30)} color="red" />
      </Animated.View>
    );
  };

  // Close icon floating animation styles
  const FloatingCloseIcon = ({ id }) => {
    const translateY = useSharedValue(0);
    const opacity = useSharedValue(1);

    const floatingStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translateY.value }],
        opacity: opacity.value,
      };
    });

    React.useEffect(() => {
      translateY.value = withSpring(-height * 0.5, { duration: 2000 });
      opacity.value = withTiming(0, { duration: 1000 });
    }, []);

    return (
      <Animated.View
        key={id}
        style={[
          floatingStyle,
          {
            position: 'absolute',
            bottom: height * 0.2,
            left: Math.random() * width * 0.8, // Random horizontal position
          },
        ]}
      >
        <AntDesign name="closecircleo" size={scaleFont(30)} color="#9d9b9b" />
      </Animated.View>
    );
  };

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

   
      </View>
 <LinearGradient
          colors={[ 'white','#e6adf6','#ca7ddf']}
          style={{
            flex: 1,height: '80%', padding: '0%'
          }}
        >
  

<TouchableOpacity style={{paddingHorizontal:'5%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
<AntDesign name="arrowleft" size={RFPercentage(3.5)} color="black" />
</TouchableOpacity>
<View style={{paddingHorizontal:'20%',paddingVertical:'5%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>

<Animated.View  style={[underlineeStyle,{ borderBottomColor: 'red', borderStyle: 'solid',paddingVertical:verticalScale(5) }]}>
<TouchableOpacity onPress={()=>{handleunderlinePress()}}>
<Text style={{fontSize:RFPercentage(2.5),fontFamily: 'Poppins_400Regular'}} >Request</Text>
</TouchableOpacity>
</Animated.View>

<Animated.View  style={[underlineStyle,{ borderBottomColor: 'red', borderStyle: 'solid',paddingVertical:verticalScale(5) }]}>
<TouchableOpacity onPress={()=>{handleunderlinePress()}}>
<Text style={{fontSize:RFPercentage(2.5),fontFamily: 'Poppins_400Regular'}} >Matchs</Text>
</TouchableOpacity>
</Animated.View>




</View>

<ScrollView style={{backgroundColor:'white',padding:scale(15),borderTopRightRadius:moderateScale(45),
borderTopLeftRadius:moderateScale(45)}}>  
  



{matches.map(()=>{
  return(
<View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderBottomWidth:RFPercentage(0.1),borderBlockColor:'#f7f7f7',paddingVertical:RFPercentage(2)}}>
 <TouchableOpacity>
 <Image
          style={{ width:scale(40), height:verticalScale(45),borderRadius: Math.min(scale(40),verticalScale(45))/2, marginLeft: '1%' }}
          source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1l6fbVIlb9dXMPu06Tnl5wO-v_cEi2a2Yw&s'}}
          resizeMode="cover"
        />
</TouchableOpacity>

<MaterialIcons style={{marginLeft:-RFPercentage(1)}}name="girl" size={RFPercentage(6)} color="#e40f6d" />
<View>
<Text style={{fontSize:RFPercentage(2.2),fontFamily: 'Poppins_400Regular'}}>
Yulianna
</Text>
<Text style={{fontSize:RFPercentage(2.2),fontFamily: 'Poppins_400Regular'}}>20</Text>

</View>

<TouchableOpacity>
 <AntDesign name="closecircleo" size={RFPercentage(5)} color="#9d9b9b" />
</TouchableOpacity>

<TouchableOpacity>
<AntDesign name="heart" size={RFPercentage(5)}  color="red" />
</TouchableOpacity>

</View>
)})
}
   </ScrollView>
 
  
  
    </LinearGradient>
           
           
       
           

      
     
   

  

















    </View>
  );
}

const styles = StyleSheet.create({
detailContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '20%',
    height:11,
    backgroundColor: 'white',
    zIndex: 199,
    padding: '0%',
  }
  ,filterContainer: {
    position:'absolute',
    paddingVertical: verticalScale(25),
    backgroundColor: '#1F1F1F',
    borderRadius: moderateScale(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  filterTitle: {
    fontSize: RFPercentage(5),
    fontWeight: 'bold',marginLeft:scale(15),
    color: '#FF6F61',
    marginBottom: 15,
  },
  filterOption: {
    marginTop: verticalScale(35),
    marginLeft:scale(15),
    fontSize: RFPercentage(3.5),
    color: '#FFFFFF',
  },
  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: verticalScale(10),
  },
  optionButton: {
    backgroundColor: '#FF6F61',
    borderRadius: 8,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(30),
    marginLeft:scale(25),
    marginTop:verticalScale(25),
    elevation: 3,
    transition: 'background-color 0.3s ease',
  },
  optionText: {
    fontSize: RFPercentage(2.6),
    color: '#FFFFFF',
  },
  optionButtonHovered: {
    backgroundColor: '#FF4C39',
  },
 image: {
    width: scale(350), // Increased width
    height: verticalScale(400), // Increased height
  resizeMode:"cover",
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#ff6347', // Example border color
  },

  textContainer: {
    flex: 1,
    padding:moderateScale(20)
  },
  description: {
    fontSize: RFPercentage(2.2),
    marginTop:scale(5),
    fontWeight: 600,
    color: '#333'    ,fontFamily: 'Poppins_400Regular'

  },
  age: {
    fontSize: RFPercentage(3),
    color: '#666'
    ,fontFamily: 'Poppins_400Regular'
  },
});
