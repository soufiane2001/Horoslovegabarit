
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,

} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export default function App() {
  const { width, height } = Dimensions.get('window');
  const scaleFont = (size) => (width / 375) * size; // Assuming 375 is the base width
  const heartScale = useSharedValue(1);
  const closeIconScale = useSharedValue(1);
  var users=[{name:"kristina",age:22,country:'russia',img:'https://img.freepik.com/photos-gratuite/portrait-femme-blonde-regarder-photographe_23-2148348970.jpg'},{
  name:"anna",age:19,country:'russia',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1l6fbVIlb9dXMPu06Tnl5wO-v_cEi2a2Yw&s'}
  
  ];
  // State to track hearts and close icons that appear on the screen
  const [hearts, setHearts] = useState([]);
  const [closes, setCloses] = useState([]);

  var [i,setI]=useState(0)
  // Animation for main heart scaling
  const animatedHeartStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: heartScale.value }],
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

        <TouchableOpacity>
          <AntDesign name="filter" size={scaleFont(40)} color="#a4a2a2" />
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
            height: '85%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
            ,borderRadius:44 
          }}>
          <View style={{ backgroundColor: 'black',borderRadius:44 }}>
           
           
            <TouchableOpacity>
              <Image
                style={{ width: width * 0.9, height: height * 0.5, marginLeft: '0%',borderRadius:44  }}
                source={{
                  uri: users[i].img,
                }}
              />
            </TouchableOpacity>

            <View
              style={{
                width: '100%',
                height: height * 0.5,
                backgroundColor: 'black',
                position: 'absolute',
                borderRadius:34,
                opacity: 0.55,
                zIndex: 1,
              }}></View>
            <Text
              style={{
                color: 'white',
                fontSize: scaleFont(35),
                position: 'absolute',
                zIndex: 44,
                marginLeft: '5%',
                marginTop: height * 0.28,
              }}>
              {users[i].name}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: scaleFont(30),
                position: 'absolute',
                zIndex: 44,
                marginLeft: '5%',
                marginTop: height * 0.34,
              }}>
            { users[i].age}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: scaleFont(20),
                position: 'absolute',
                zIndex: 44,
                marginLeft: '5%',
                marginTop: height * 0.39,
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
              <AntDesign name="closecircleo" size={scaleFont(48)} color="#9d9b9b" />
            </Animated.View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ handleHeartPress();
            setTimeout(()=>{
      setI(1)
    },1200)
          }}>
            <Animated.View style={animatedHeartStyle}>
              <AntDesign name="heart" size={scaleFont(48)} color="red" />
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
          <MaterialCommunityIcons name="mother-heart" size={scaleFont(35)} color="red" />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="message1" size={scaleFont(30)} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="user" size={scaleFont(30)} color="#6e6c6c" />
        </TouchableOpacity>
    
     </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  // Your styles remain unchanged
});
