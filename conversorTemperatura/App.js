import { StatusBar } from 'expo-status-bar';
import { View, Text,StyleSheet } from 'react-native';
import Entrada from './src/components/Entrada'
import { useState } from 'react';
import TempController from './src/controller/TempController.js';

export default function App() {

  const control = new TempController();
  const [celsius, setCelsius] = useState(0);
  const [farenh, setFarenh] = useState(0);
  const [kelvin, setKelvin] = useState(0);

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Entrada text = 'Temperatura em °C'placeholder='Entre com a temperatura em Celsius' onChangeText={(valor)=>{setReal(valor)}}></Entrada>
      <Entrada text = 'Temperatura em °F'placeholder='Entre com a temperatura em Farenheit' onChangeText={(valor)=>{setReal(valor)}}></Entrada>
      <Entrada text = 'Temperatura em K'placeholder='Entre com a temperatura em Kelvin' onChangeText={(valor)=>{setReal(valor)}}></Entrada>
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
