
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function Input({placeholder, value, label, ChangeText}) {
    const [novoValor, setValor] = useState(value);
    return (
       <>
        <Text style ={styles.text} > Entre com o {label}: {novoValor}</Text>
        <TextInput style={styles.input} placeholder= {placeholder} onChangeText = {(e)=> setValor(e)}/>
    </>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderWidth:2
    },
    text:{
        fontSize: 20,
        margin: 2,
        padding: 5,
    }
});