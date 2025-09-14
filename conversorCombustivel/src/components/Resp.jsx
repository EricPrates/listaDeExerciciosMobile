import { ImageBackground, View, StyleSheet } from "react-native";

export default function Resp({value}){
return(
    <View style = {style.view}>
        <Text>{value}</Text>
    </View>
);

}

const style = StyleSheet.create({
    view: {
        backgroundColor: '#dcdcdc'
    }
})