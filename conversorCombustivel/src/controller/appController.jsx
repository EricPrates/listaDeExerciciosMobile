import { useState } from "react";
import Combustivel from "../model/Combustivel";


const appController = () => {
    
    const [gasolina, setprecoGasolina] = useState(new Combustivel);
    const [etanol, setprecoEtanol] = useState(new Combustivel);
    
    function precoGasolina(precoG){
        setprecoGasolina = precoG;
    }
    function precoEtanol(precoE){
        setprecoEtanol = precoE;
    }
    function getPprecoEtanol(){
        return etanol;
    }
    function getPprecoGasolina(){
        return gasolina;
    }
    return {
         precoEtanol, precoGasolina
    }

}

export default appController