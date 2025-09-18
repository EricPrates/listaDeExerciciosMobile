import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Entrada from './src/components/Entrada';
import Btn from './src/components/Btn';
import MoedaController from './src/controller/MoedaController';

export default function App() {
  const [valor, setValor] = useState('');
  const control = MoedaController();
  const [real, setReal] = useState();
  const [dolar, setDolar] = useState();
  const [euro, setEuro] = useState();
  const [moeda, setMoeda] = useState(false);
  
  return (
    
      <View style = {styles.container}>
        <StatusBar style="auto" />
        <Text style = {styles.Text}>Escolha a moeda de origem</Text>
        <View style ={styles.bts}>
            <Btn onPress={(e) => {setMoeda(true)}} label = 'Euro'></Btn>
            <Btn onPress={(e) => { setMoeda(true)}} label = 'Dólar'></Btn>
            <Btn onPress={() => {setMoeda(true)}} label = 'Real'></Btn>
        </View>
        {
          moeda && <Entrada placeholder="Digite um valor"  onChangeText={setValor} />
        }
        
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b7d5ac',
    alignItems: 'center',
    marginTop: 300,
    margin: 10,
    borderRadius: 40,
    padding: 10,
   paddingBlock: 30,
   marginBlock: 50,
    
  },
  bts:{
    flexDirection: 'row',
    flexWrap:'wrap',
    margin:8,
    borderRadius:100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});
