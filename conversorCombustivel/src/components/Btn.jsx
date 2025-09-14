import { Text, StyleSheet, TouchableOpacity, View} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Btn({label}){
const contemLimpar = label.toLowerCase().includes('limpar');
const estiloBota = contemLimpar? style.btnLimpar: style.view;

    return(
        <View style = {estiloBota}>
            <TouchableOpacity onPress={(e)=> console.log(e.target.value)}>
                <Text style = {style.texto}>{label}</Text>
            </TouchableOpacity>
        </View>
    );
}


const style = StyleSheet.create({
   
    texto:{
        textAlign: 'center',
        padding:10,
        fontSize:13,
    },
     view:{
    backgroundColor: '#e78127ff',
    flexDirection: 'row',
    flexWrap:'wrap',
    margin:8,
    borderRadius:100,
    backgroundColor: '#e78127ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLimpar:{
    backgroundColor: '#DCDCDC',
    flexDirection: 'row',
    flexWrap:'wrap',
    margin:8,
    borderRadius:100,
    justifyContent: 'center',
    alignItems: 'center',
  }
})