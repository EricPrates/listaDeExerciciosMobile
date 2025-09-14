
import Combustivel from "../model/Combustivel";

import { useState } from "react"



const appController = ()=>{

      let gasolina = new Combustivel();
      let etanol = new Combustivel();
      let consumoMedio = 0;
      let distancia = 0;

      function setPrecoGasolina(preco = 0){
        if(preco <= 0){
            return false;
        }
        gasolina.setPreco(preco)
      }

     function setClean(){
        gasolina = new Combustivel(0);
        etanol = new Combustivel(0);
        distancia = 0;
        consumoMedio = 0;
     }

    function setPrecoEtanol(preco = 0){
        etanol.setPreco(preco)
    }
    
     function setDistanciaKm(km = 0) {
        distancia = km;
  }
    
    return{
        //estados
        gasolina,etanol, distancia,
        //Métodos
        setPrecoEtanol,setPrecoGasolina, setDistanciaKm, setClean
    }

}

export default appController


