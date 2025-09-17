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
    function calculaRealDolar(){
        return real.getValor() * 5.20;
    }
    function calcularRealEuro(){
        return real.getValor() * 5.50;
    }
    function calcularDolarEuro(){
        return dolar.getValor() * 1.05;
    }
    function calcularDolarReal(){
        return dolar.getValor() / 5.20;
    }
    function calcularEuroReal(){
        return euro.getValor() / 5.50;
    }
    function calcularEuroDolar(){
        return euro.getValor() / 1.05;
    }
    
    return {setValorReal, setValorEuro, setValorDolar, calcularDolar, calcularEuro}
}