import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Input from './src/components/Input.jsx';
import Btn from './src/components/Btn';
import produtoController from './src/controller/produtoController.js';
import { useState } from 'react';
import Resp from './src/components/Resp.jsx';

export default function App() {
  const control = produtoController();
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [acrescimo, setAcrescimo] = useState('');
  const [desconto, setDesconto] = useState('');
  const [resultado, setResultado] = useState(false);
  function limpar(){
    setPreco('');
    setQuantidade('');
    setAcrescimo('');
    setDesconto('');
    control.clear();
  }
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
    <View style = {styles.viewInternal}>
      <Text style = {[styles.texto, {marginBottom: 10, textAlign: 'center', fontFamily: 'Verdana', fontWeight: 'bold'}]}>Descontos e acréscimos</Text>
        <Input placeholder = 'Digite o preço' onChangeText={(valor) => {setPreco(valor); control.setPreco(valor)}} value={preco} ></Input>
        <Input placeholder = 'Digite a quantidade de produtos' onChangeText={setQuantidade} value={quantidade}></Input>
        <Input placeholder = 'Digite o valor do acréscimo' onChangeText={setAcrescimo} value={acrescimo}></Input>
        <Input placeholder = 'Digite o valor do desconto' onChangeText={setDesconto} value={desconto}></Input>
        <View style = {{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20}}>
          
          <Btn onPress={() => {
           setResultado(true)
          }}>Calcular</Btn>
          <Btn onPress={() => {
           limpar(); setResultado(false)
          }}>Limpar</Btn>
        </View>
      </View>
      {resultado && <Text style = {[{marginTop: 20, fontSize: 20}]}>Preço total: R$ {control.precoTotal(Number(quantidade))}</Text>
      }
      {resultado && <Text style = {[{marginTop: 20, fontSize: 20}]}>Preço com acréscimo: R$ {control.precoAcrescimo(Number(acrescimo))}</Text>
      }
      {resultado && <Text style = {[{marginTop: 20, fontSize: 20, color: 'green'}]}>Preço com desconto: R$ {control.precoDesconto(Number(desconto))}</Text>
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
  viewInternal: {
   backgroundColor: '#ff0000',
   margin: 40,
   padding: 20,
   
   borderRadius: 10,
   width: '80%',
   height: '60%',
   marginTop: 60,
   marginBottom: 60,
   
},
texto: {
  color: '#fff',
  fontSize: 30,
 }
});
