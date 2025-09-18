import { Text, StyleSheet, TouchableOpacity, View} from "react-native";


export default function Btn({label, onPress}){



    return(
        <View style = {style.lcontainer}>
            <TouchableOpacity style ={style.btn} onPress={(onPress)}>
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
     
  btnLimpar:{
    backgroundColor: '#DCDCDC',
    flexDirection: 'row',
    flexWrap:'wrap',
    margin:8,
    borderRadius:100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
    backgroundColor: '#90EE90',
    flexDirection: 'row',
    flexWrap:'wrap',
    margin:8,
    borderRadius:100,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '1px 1px 1px #000',
  },
})