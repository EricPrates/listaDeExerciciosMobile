export default class Temperatura{
    constructor(temperatura){
        this.temperatura = temperatura;
    }

    setTemperatura(temperatura = 0){
        this.temperatura = this.temperatura;
    }
    getTemp(){
        return this.temperatura;
    }

}