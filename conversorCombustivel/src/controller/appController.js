
import Combustivel from "../model/Combustivel";

import { useState } from "react"



const appController = ()=>{

    let gasolina = new Combustivel();
    let etanol = new Combustivel();
    let precoMedioEtanol = 0
    let distancia = 0;
    let consumoMedio = 0;
    let precoMedioGasolina = 0;

    
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
    function calculaPrecoDistanciaGasolina(){
       return distancia  * gasolina.preco;
        
    }
    function calculaPrecoDistanciaEtanol(){
       return distancia  * etanol.preco;
        
    }
    function setConsumoMedio(consumo){
        consumoMedio = consumo;
    }
   function setPrecoMedioGasolina() {  precoMedioGasolina = gasolina.preco / consumoMedio};
    function setPrecoMedioEtanol() { precoMedioEtanol =  etanol.preco / consumoMedio};
    return{
        //estados
        gasolina,etanol, distancia, consumoMedio, precoMedioEtanol, precoMedioGasolina,
        //Métodos
        setPrecoEtanol,setPrecoGasolina, setDistanciaKm, setClean, calculaPrecoDistanciaEtanol, 
        calculaPrecoDistanciaGasolina,setPrecoMedioGasolina,setPrecoMedioEtanol, setConsumoMedio  
    }

}

export default appController


