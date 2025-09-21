import { StatusBar } from 'expo-status-bar';
import { View, Text,StyleSheet } from 'react-native';
import Entrada from './src/components/Entrada'
import { useState } from 'react';
import TempController from './src/controller/TempController.js';
import { Button } from 'react-native';
import Input from './src/components/Input.jsx';

export default function App() {

  const control = TempController();
  
  const [medida, setMedida] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Cabecalho valor = {control.temperatura.medida}></Cabecalho>
      <View>
          <Button text='Temperatura em °C' onPress={() => { control.setMedida('celsius'); setMedida('celsius') }} />
          <Button text='Temperatura em °F' onPress={() => { control.setMedida('farenheit'); setMedida('farenheit') }} />
          <Button text='Temperatura em K' onPress={() => { control.setMedida('kelvin'); setMedida('kelvin') }} />
      </View>
      {
        medida && <Input validacao = {control.validaTemperatura} placeholder={`Temperatura em ${medida}`} onChangeText={(valor) => { control.setValorTemp(valor) }}></Input>
      }
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
