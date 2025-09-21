import { StatusBar } from 'expo-status-bar';
import { View, Text,StyleSheet } from 'react-native';
import Cabecalho from './src/components/Cabecalho.jsx';
import { use, useRef, useState } from 'react';
import TempController from './src/controller/TempController';
import Button from './src/components/Button.jsx';
import Input from './src/components/Input.jsx';
import Resp from './src/components/Resp.jsx';

export default function App() {

  const control = TempController();
  const [medida, setMedida] = useState();
  const [resultado, setResultado] = useState(null);
  

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
       medida && <Input key={medida} validacao = {control.validaTemperatura} placeholder={` ${control.temperatura.medida}`} onChangeText={(valor) => { control.setValorTemp(valor) }}></Input>
      }
      {
        medida && <Button text='Converter' onPress={() => {setResultado(control.converterTemperatura); }}></Button>
        
      }
      {
        console.log(resultado)
      }
    {
      resultado && <Resp resultado={resultado}></Resp>
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
