
import Combustivel from "../model/Combustivel";

import { useState } from "react"



const appController = ()=>{

      let gasolina = new Combustivel();
      let etanol = new Combustivel();
      let precoMedioGasolina = () => gasolina.preco / consumoMedio;
      let precoMedioEtanol = () => gasolina.etanol / consumoMedio;
      let distancia = 0;
      let precodistanciaGasolina = 0;
      let consumoMedio = 0;

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
        precodistanciaGasolina = distancia  * gasolina.preco;
        
    }
    function calculaPrecoDistanciaEtanol(){
        precodistanciaGasolina = distancia  * gasolina.preco;
        
    }
    function setConsumoMedio(consumo){
        consumoMedio = consumo;
    }
    
    return{
        //estados
        gasolina,etanol, distancia, consumoMedio,
        //Métodos
        setPrecoEtanol,setPrecoGasolina, setDistanciaKm, setClean, calculaPrecoDistanciaEtanol, 
        calculaPrecoDistanciaGasolina,precoMedioEtanol,precoMedioGasolina, setConsumoMedio  
    }

}

export default appController


