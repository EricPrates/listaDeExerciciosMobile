export default class Temperatura{
    constructor(valorTemp = 0, medida =''){
        this.valorTemp = valorTemp;
        this.medida = medida;
    }

    setValorTemp(valorTemp = 0){
        this.valorTemp = valorTemp;
    }
    getTemp(){
        return this.valorTemp;
    }
    getMedida(){
        return this.medida;
    }  
    setMedida(medida = ''){
        this.medida = medida;
    }
    
    converter(){
        if(this.medida === 'celsius'){
            const celsius = parseFloat(this.valorTemp);
            const farenheit = (celsius * 9/5) + 32;
            const kelvin = celsius + 273.15;
            return {farenheit, celsius, kelvin};
        }
        if(this.medida === 'farenheit'){
            const farenheit = parseFloat(this.valorTemp);
            const celsius = (farenheit - 32) * 5/9;
            const kelvin= celsius + 273.15;
            return {celsius, kelvin, farenheit};
        }
        if(this.medida === 'kelvin'){
            const kelvin = parseFloat(this.valorTemp);
            const celsius = kelvin - 273.15;
            const farenheit = (celsius * 9/5) + 32;
            return {celsius, farenheit, kelvin};
        }
        return this.valorTemp;
    }}