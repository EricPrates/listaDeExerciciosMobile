import Temperatura from "../model/Temperatura"
import { useState} from "react";

const TempController = () =>{
    const [temperatura, setTemperatura] = useState(new Temperatura(0, ''));
    
    function substituiVirgula(texto){
        
        if(texto.includes(',')){
           return parseFloat(texto.replace(/,/g, '.'));
          
        }

        else{
            return parseFloat(texto);
        }
    }

    function setValorTemp(valor = 0){
        
        setTemperatura(new Temperatura(substituiVirgula(valor), temperatura.medida));
    }
    function setMedida(tipo){
        setTemperatura(new Temperatura(temperatura.valorTemp, tipo));
    }
    function validaTemperatura(valor){
        if(valor === null || valor === '' || valor === undefined){
            return false;
        }
        else if(isNaN(substituiVirgula(valor))){
            return true;
        }
        return true;
    }
    function converterTemperatura(){
        return temperatura.converter();

    }
    return{
        temperatura,
        setValorTemp,
        setMedida,
        validaTemperatura,
        converterTemperatura
    }
}
export default TempController;