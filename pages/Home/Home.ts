



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
heightdetail.value=withTiming(height,{duration:500});
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
      filterTranslation.value = withTiming(height, { duration: 300, easing: Easing.inOut(Easing.ease) });
      filterBorderRadius.value = withTiming(100, { duration: 500, easing: Easing.inOut(Easing.ease) });

    } else {
      filterTranslation.value = withTiming(0, { duration: 300, easing: Easing.inOut(Easing.ease) });
           filterBorderRadius.value = withTiming(0, { duration: 500, easing: Easing.inOut(Easing.ease) });
           filterwidth.value= withTiming(width, { duration: 500, easing: Easing.inOut(Easing.ease) });
           filterheight.value= withTiming(height, { duration: 500, easing: Easing.inOut(Easing.ease) });
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

      <TouchableOpacity onPress={()=>{handleFilterPress()}}>
          <AntDesign name="filter" size={RFPercentage(6)} color="#a4a2a2" />
        </TouchableOpacity>
      </View>
 <LinearGradient
          colors={[ 'white', '#fe6292','white']}
          style={{
            flex: 1,height: '80%', padding: '10%'
          }}
        >
      <View style={{  }}>
      
        <View
          style={{
            height: verticalScale(380),
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
            ,borderRadius:30 
          }}>
          <View style={{ backgroundColor: 'black',borderRadius:30 }}>
           
           
            <TouchableOpacity style={{}} onPress={()=>{ handeldetailPress()}}>
              <Image
                style={{ width:scale(300), height: verticalScale(340), marginLeft: '0%',borderRadius:30,
             resizeMode:'cover'
                  }}
                source={{
                  uri: users[i].img,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{handeldetailPress()}}
              style={{
                width: '100%',
                height: height * 0.5,
                backgroundColor: 'black',
                position: 'absolute',
                borderRadius:34,
                opacity: 0.55,
                zIndex: 1,
              }}></TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontSize: RFPercentage(5),
                position: 'absolute',
                zIndex: 44,
                marginLeft: '5%',
                marginTop:moderateScale(180),fontFamily: 'Poppins_400Regular' 
              }}>
              {users[i].name}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: RFPercentage(4),
                position: 'absolute',
                zIndex: 44,
                marginLeft: '5%',
                marginTop: moderateScale(220),fontFamily: 'Poppins_400Regular' 
              }}>
            { users[i].age}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: RFPercentage(4),
                position: 'absolute',
                zIndex: 44,
                marginLeft: '5%',
                marginTop: moderateScale(250),fontFamily: 'Poppins_400Regular' 
              }}>
             {users[i].country}
            </Text>
          </View>
        </View>

        <View
          style={{
            height: '20%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={handleClosePress}>
            <Animated.View style={animatedCloseStyle}>
              <AntDesign name="closecircleo" size={RFPercentage(8)} color="#9d9b9b" />
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ handleHeartPress();
            setTimeout(()=>{
      setI(1)
    },1200)
          }}>
            <Animated.View style={animatedHeartStyle}>
              <AntDesign name="heart" size={RFPercentage(8)} color="red" />
            </Animated.View>
          </TouchableOpacity>
        </View>

        {hearts.map((heart) => (
          <FloatingHeart key={heart} id={heart} />
        ))}
      
     
      </View>
 
      </LinearGradient>

      <View
        style={{
          height: '10%',
          display: 'flex',
          borderTopColor: '#ebeaea',
          borderTopWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="mother-heart" size={RFPercentage(5)} color="red" />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="message1" size={RFPercentage(5)} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="user" size={RFPercentage(5)} color="#6e6c6c" />
        </TouchableOpacity>
    
     </View>
     







 <Animated.View style={[styles.filterContainer, animatedFilterStyle]}>
      <TouchableOpacity onPress={()=>{handleFilterPress()}} style={styles.closeButton}>
        <AntDesign name="closecircle" size={RFPercentage(4)} color="white" />
      </TouchableOpacity>

      <Text style={styles.filterTitle}>Filter</Text>

      {/* Age filter options */}
      <Text style={styles.filterOption}>
        Age: {filters.age}
      </Text>
      <View style={styles.optionContainer}>
        {['18-30', '31-45', '46-60'].map((age) => (
          <TouchableOpacity key={age} onPress={() => updateFilter('age', age)} style={styles.optionButton}>
            <Text style={styles.optionText}>{age}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Country filter options */}
      <Text style={styles.filterOption}>
        Country: {filters.country}
      </Text>
      <View style={styles.optionContainer}>
        {['Russia', 'USA', 'Germany'].map((country) => (
          <TouchableOpacity key={country} onPress={() => updateFilter('country', country)} style={styles.optionButton}>
            <Text style={styles.optionText}>{country}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Animated.View>





  <Animated.View style={[styles.detailContainer, animateddetail]}>

<TouchableOpacity onPress={closedetailPress} style={{position:'absolute',top:verticalScale(25),left:scale(15),zIndex:5000}}>
<AntDesign name="leftcircle" size={RFPercentage(5)} color="#f93804" />
</TouchableOpacity>
       <Image
        source={{ uri:  users[0].img }} // Replace with your image URL
        style={styles.image}
      />
      <View style={styles.textContainer}> 

      <Text style={styles.age}>Age: 25</Text>

      <ScrollView style={{marginTop:scale(25)}}>
        <Text style={styles.description}>
        🌟 About Me:
Hey there! I'm a fun-loving adventurer who thrives on spontaneity and laughter. By day, I’m a graphic designer who enjoys turning caffeine into creativity, and by night, you can find me exploring new hiking trails or trying out the latest food trucks in town.

📚 Interests:

Books: A sucker for fantasy novels and a good thriller. If you have any recommendations, I'm all ears!
Travel: I’ve backpacked through Europe and can’t wait to add more stamps to my passport. Next stop: Japan!
Fitness: I’m an outdoor enthusiast who loves running and yoga. Let’s go for a hike or hit a spin class together!
💡 Fun Facts:

I can quote almost every line from The Office.
I make a mean homemade guacamole (seriously, it’s legendary).
I have a collection of quirky coffee mugs that could use some love.
🤔 Looking For:
Someone who shares my zest for life and can make me laugh. Bonus points if you can teach me something new or share your travel stories. If you enjoy deep conversations and stargazing, we’ll get along just fine!
        </Text>
       </ScrollView>
      </View>
       
      </Animated.View>






    </View>
  );
}

const styles = StyleSheet.create({
detailContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  
    width: '100%',
    height: '100%',
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
