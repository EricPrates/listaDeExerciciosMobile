export default class Combustivel {

    constructor(preco) {
        this.preco = parseFloat(preco);
    }

    setPreco(preco){
        this.preco = preco;
    };
    getPreco(){
        return this.preco;
    };
    
};