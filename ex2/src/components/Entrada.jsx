import { useState } from "react";
import { TextInput, Text, StyleSheet } from "react-native";

export default function Entrada({placeholder,}){

    const [valor, setValor] = useState(0);
    

    return(

        <TextInput placeholder= {placeholder} onChangeText={(e) =>{setValor(e)}}></TextInput>
    );

}

const style = StyleSheet.create({
    input:{
        borderWidth: 2,

    }
});