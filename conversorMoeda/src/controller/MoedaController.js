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
   


    return {
        setDolar,
       
        setEuro,
       
        setReal,
        
    };
};

export default MoedaController;