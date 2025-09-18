export default class Moeda {

    constructor(valor) {
        this.valor = parseFloat(valor);
    }

    setValor(valor){
        this.valor = valor;
    };
    getValor(){
        return this.valor;
    };
    
};