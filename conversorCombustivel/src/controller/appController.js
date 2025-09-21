
import Combustivel from "../model/Combustivel";





const appController = ()=>{

    let gasolina = new Combustivel();
    let etanol = new Combustivel();
    let distancia = 0;
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
       return distancia  * gasolina.preco;
        
    }
    function calculaPrecoDistanciaEtanol(){
       return distancia  * etanol.preco;
        
    }
    function setConsumoMedio(consumo){
        consumoMedio = consumo;
    }
    function calcularPrecoMedioGasolina() { return consumoMedio === 0? 0 :  gasolina.preco / consumoMedio};
    function calcularPrecoMedioEtanol() { return consumoMedio === 0? 0 :   etanol.preco / consumoMedio};
    return{
     
        gasolina,etanol, distancia, consumoMedio,
     
        setPrecoEtanol,setPrecoGasolina, setDistanciaKm, setClean, calculaPrecoDistanciaEtanol, 
        calculaPrecoDistanciaGasolina,calcularPrecoMedioEtanol, setConsumoMedio, calcularPrecoMedioGasolina
    }

}

export default appController


