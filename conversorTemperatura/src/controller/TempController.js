import Temperatura from "../model/temperatura"

const TempController = () =>{
    let celsius = new Temperatura();
    let farenh = new Temperatura();
    let kelvin = new Temperatura();

    function setCelsius(valor){
        celsius.setTemperatura(valor);
    }
    function setFarenh(valor){
        farenh.setValor(valor);
    }
    function setKelvin(valor){
        kelvin.setValor(valor);
    }
    return(
        setCelsius, setFarenh, setKelvin
    )
}