import { useState } from "react";
import { View,Text,StyleSheet } from "react-native";

export default function Title({titulo}){



return(
        <View>
            <Text style = {style.titulo}>{titulo}</Text>
        </View>
    );

}

const style = StyleSheet.create({
    titulo:{
        fontSize: 25,
        color: '#FFD700',
        textAlign: 'center',
        padding: 2,
        margin: 10,
        fontFamily:'serif',

    }
})