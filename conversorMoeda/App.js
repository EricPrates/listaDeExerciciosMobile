import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Entrada from './src/components/Entrada';
import Btn from './src/components/Btn';
import MoedaController from './src/controller/MoedaController';

export default function App() {
  const [valor, setValor] = useState('');
  const control = MoedaController();  
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Escolha a moeda de origem</Text>
      <View>
        <Btn onPress={() => {}} label = 'Euro'></Btn>
        <Btn onPress={() => {}} label = 'Dólar'></Btn>
        <Btn onPress={() => {}} label = 'Real'></Btn>
      </View>
      <Entrada placeholder="Digite um valor"  onChangeText={setValor} />
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
