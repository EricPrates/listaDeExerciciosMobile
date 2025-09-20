export default class Moeda {

    constructor(valor, tipo) {
        this.valor = parseFloat(valor)|| 0.00;
        this.tipo = tipo;
    }

    setValor(valor){
        this.valor = valor || 0.00;
    };
    getValor(){
        return this.valor;
    };
    setTipo(tipo){
        this.tipo = tipo;
    }
    getTipo(){
        return this.tipo;
    }
    ParaReal(){
        if(this.tipo === 'real'){
            return this.valor.toFixed(2);
        }else if(this.tipo === 'dólar'){
            return (this.valor * 5.20).toFixed(2);
        }else if(this.tipo === 'euro'){
            return (this.valor * 5.50).toFixed(2);
        }
    }
    paraDolar(){
        if(this.tipo === 'real'){
            return (this.valor / 5.20).toFixed(2);
        }else if(this.tipo === 'dólar'){
            return this.valor.toFixed(2);
        }else if(this.tipo === 'euro'){
            return (this.valor * 1.05).toFixed(2);
        }
    }
    paraEuro(){
        if(this.tipo === 'real'){
            return (this.valor / 5.50).toFixed(2);
        }else if(this.tipo === 'dólar'){
            return (this.valor / 1.05).toFixed(2);
        }else if(this.tipo === 'euro'){
            return this.valor.toFixed(2);
        }
    }

};