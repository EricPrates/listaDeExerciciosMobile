import Moeda from "../model/Moeda";

const MoedaController = () => {

    let dolar = new Moeda();
    let euro = new Moeda();
    let real = new Moeda();


    function setDolar(valor=0){
        dolar.setValor(valor);
    }
    
    function setEuro(valor=0){
        euro.setValor(valor);
    }   
 
    function setReal(valor=0){
        real.setValor(valor);
    }
    function converteRealParaDolar(valorEmReal){
        return real / 5.30;
    }
    function converteRealParaEuro(valorEmReal){
        return real / 6.25;
    }
    function converteDolarReal(valorEmDolar){
        return dolar * 5.30;
    }
    function converteDolarEuro(valorEmDolar){
        return dolar * 0.85;
    }
    function converteEuroReal(valorEmEuro){
        return euro * 6.25;
    }
    function converteEuroDolar(valorEmEuro){
        return euro * 1.18;
    }

   function verificaMoeda(moeda, valor){
    if(moeda === 'dólar'){
        setDolar(valor);
   }else if(moeda === 'euro'){
        setEuro(valor);
   }else if(moeda === 'real'){
        setReal(valor);
   }
    
    }

    return {
        setDolar,
       
        setEuro,
       
        setReal,
        verificaMoeda,
        retornaTextoMoeda
    };
};

export default MoedaController;