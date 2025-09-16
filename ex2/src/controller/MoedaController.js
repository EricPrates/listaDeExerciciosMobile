import Moeda from "../Model/Moeda"

const MoedaController = () =>{
    const real = new Moeda();
    const euro = new Moeda();
    const dolar = new Moeda();

    function setValorReal(valor){
        real.setValor(valor);
    }
    function setValorEuro(valor){
        euro.setValor(valor);
    }
    function setValorDolar(valor){
        dolar.setValor(valor);
    }
}