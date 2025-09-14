
import Combustivel from "../model/Combustivel";

import { useState } from "react"



const appController = ()=>{

      const [gasolina, setGasolina] = useState(new Combustivel())
      const [etanol, setEtanol] = useState(new Combustivel())
      const [distancia, setDistancia] = useState(0)

      function setPrecoGasolina(preco = 0){
        setGasolina(new Combustivel(preco))
      }

     function cleanView(){
        setGasolina(new Combustivel())
        setEtanol(new Combustivel())
        setDistancia(0)
    }

    function setPrecoEtanol(preco = 0){
        setEtanol(new Combustivel(preco))
    }
    
     function setDistanciaKm(km = 0) {
    setDistancia(parseFloat(km));
  }

    return{
        //estados
        gasolina,etanol, distancia,
        //Métodos
        setPrecoEtanol, cleanView, setPrecoGasolina, setDistanciaKm
    }

}

export default appController


