import Temperatura from "../model/temperatura"
import { useState} from "react";
const TempController = () =>{
    const [temperatura, setTemperatura] = useState(new Temperatura(0, ''));
    

    function setValorTemp(valor = 0){
        setTemperatura(new Temperatura(valor, temperatura.medida));
    }
    function setMedida(tipo = ''){
        setTemperatura(new Temperatura(temperatura.valorTemp, tipo));
    }
    function validaTemperatura(valor){ 
        if(isNaN(valor) || valor === null || valor === ''){
            return false;
        }
        else{
            let strValor = valor.toString().trim();
            const temVirgula =strValor.includes(',');

            if(temVirgula){
                strValor = strValor.replace(/,/g, '.');
            }
            return parseFloat(strValor);
        }
    }
    return{
        temperatura,
        setValorTemp,
        setMedida,
        validaTemperatura
    }
}
export default TempController;