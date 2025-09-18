import { Text, StyleSheet, TouchableOpacity, View} from "react-native";


export default function Btn({label, onPress}){



    return(
        <>
            <TouchableOpacity onPress={(onPress)}>
                <Text style = {style.texto}>{label}</Text>
            </TouchableOpacity>
        </>
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