import { StatusBar } from 'expo-status-bar';
import { View, Text,StyleSheet } from 'react-native';
import Entrada from './src/components/Entrada'


export default function App() {
  const real  = new Moeda();
  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Text >Valor em real</Text>
      <Entrada placeholder='valor em real'></Entrada>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
