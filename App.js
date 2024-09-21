import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcom from './pages/welcom/Welcom';
import Waiting from './pages/waiting/Waiting';


export default function App() {
  return (
    <View style={styles.container}>
 <Welcom/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    },

});
