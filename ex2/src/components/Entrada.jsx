import { useState } from "react";
import { TextInput, Text, StyleSheet } from "react-native";

export default function Entrada({placeholder, text, onChangeText}){

    
    

    return(
        <>
            <Text>{text}</Text>
            <TextInput placeholder= {placeholder} onChangeText={onChangeText}></TextInput>
        </>
    );

}

const style = StyleSheet.create({
    input:{
        borderWidth: 2,

    }
});