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
   
    function verificaMoeda(moeda){
        if(moeda === 'dólar'){
            return 'Valor em Dólar';
        }else if(moeda === 'euro'){
            return 'Valor em Euro';
        }else if(moeda === 'real'){
            return 'Valor em Real';
        }
    }

    return {
        setDolar,
       
        setEuro,
       
        setReal,
        
    };
};

export default MoedaController;