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

}