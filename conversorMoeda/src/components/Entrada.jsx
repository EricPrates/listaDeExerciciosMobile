
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function Entrada({onChangeText, placeholder}) {
   
  
    return (
    <>
    <TextInput keyboardType="numeric" style={styles.input} placeholder={'valor em ' + placeholder}  onChangeText={(text) => onChangeText(text)}/>
    </>
   );
    
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200,
        borderRadius: 10,
    },
});     

