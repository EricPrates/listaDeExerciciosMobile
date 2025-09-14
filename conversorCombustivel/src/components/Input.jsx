
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function Input({placeholder, value, label, onChangeText}) {
   
    return (
    <View style = {styles.view}>
        <Text style ={styles.text} > Entre com o {label}</Text>
        <TextInput style={styles.input} placeholder= {placeholder}  onChangeText = {onChangeText} value={value}  keyboardType="numeric" />
            
    </View>
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
        margin: 4,
        padding: 5,
    },
    view:{
        backgroundColor: '#FFD700',
        borderRadius: 20
    }
});