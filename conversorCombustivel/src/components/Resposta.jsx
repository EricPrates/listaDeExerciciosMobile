import {  View, StyleSheet } from "react-native";

export default function Resposta({value}){
    if(!value) return null
return(
    <View style = {style.view}>
        <Text>{value}</Text>
    </View>
);

}

const style = StyleSheet.create({
    view: {
        backgroundColor: '#dcdcdc',
        borderRadius: 60,

    }
})