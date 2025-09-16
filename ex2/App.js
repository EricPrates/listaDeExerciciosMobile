import { StatusBar } from 'expo-status-bar';
import { View, Text,StyleSheet } from 'react-native';
import Entrada from './src/components/Entrada'
import { useState } from 'react';
import MoedaController from './src/controller/MoedaController';

export default function App() {

  const control = new MoedaController();
  const [real, setReal] = useState(0);

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <Entrada text = 'Valor em Real'placeholder='Entre com o valor em real' onChangeText={(valor)=>{setReal(valor)}}></Entrada>
      <Entrada text = 'Valor em Dólar'placeholder='Entre com o valor em real' onChangeText={(valor)=>{setReal(valor)}}></Entrada>
      <Entrada text = 'Valor em Euro'placeholder='Entre com o valor em real' onChangeText={(valor)=>{setReal(valor)}}></Entrada>
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
