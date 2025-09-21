import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View,Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAvoidingView } from 'react-native';
import appController from '../controller/appController';
import { useState } from 'react';
import Input from '../components/Input';
import Title from '../components/Title';
import Btn from '../components/Btn';
import Resposta from '../components/Resposta';



export default function App() {
const control = appController();

const [precoGas, setPrecoGas] = useState('');
  const [precoEtanol, setPrecoEtanol] = useState('');
  const [consumo, setConsumo] = useState('');
  const [distancia, setDistancia] = useState('');
  const [resultado, setResultado] = useState(null);

  let resposta = (texto, valor) => {
    if (valor === undefined || valor === null) return;
    setResultado(`${texto} ${valor}`);
}
  
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />
      <Title titulo = 'Conversor de Combustível'></Title>
      <KeyboardAvoidingView>

        <Input value = {consumo} placeholder="Digite o consumo médio do veículo" label = 'Consumo médio do veículo' onChangeText= {
          (e) => {
            setConsumo(e)
            control.setConsumoMedio(e)
            
          }}/>
        
        <Input value = {precoGas} placeholder="Digite aqui o preço da Gasolina" label = "Valor da gasolina" onChangeText= {
          (e) => {
            setPrecoGas(e)
            control.setPrecoGasolina(e)
            
          }
        }/>
        <Input value = {distancia} placeholder="Digite aqui a Distância" label = "distância" onChangeText= {
          (e) => {
            setDistancia(e); 
            control.setDistanciaKm(e)
            
          }
        }/>
        
        <Input value = {precoEtanol} placeholder="Digite aqui o preço do Etanol" label = "Valor do Etanol" onChangeText= {
          (e) => {
            setPrecoEtanol(e)
             control.setPrecoEtanol(e)
              
            }
            }/>
        <View style = {styles.container}>
              <Btn label = 'Custo por Distância Etanol'  onPress={ () => {
                const press = control.calculaPrecoDistanciaEtanol();
                resposta('Custo por Distância Etanol', press )
               }
                }></Btn>
              <Btn label = 'Melhor opção'></Btn>
              <Btn label = 'Custo do KM gasolina' onPress={() =>{
                const press = control.calcularPrecoMedioGasolina();
                resposta('Custo do KM gasolina', press)}} ></Btn>
              <Btn label = 'Custo KM etanol'onPress={() =>{
                const press = control.calcularPrecoMedioEtanol();
                resposta('Custo do KM Etanol', press)}}></Btn>
              <Btn label = 'Limpar' onPress={() =>{
                control.setClean(); 
                setPrecoGas(''); 
                setPrecoEtanol('');
                setConsumo('');
                setResultado('') 
                Alert.alert('Tela limpa')}}>
              </Btn>
            <Resposta value={resultado}/>
          </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap:'wrap'
      
  },
 
});
