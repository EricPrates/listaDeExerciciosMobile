class Produto{
    constructor(preco = 0){
        this.preco = preco
    }
    
    setPreco(preco= 0){
        this.preco = preco
    }
    getPreco(){
        return this.preco
    }
}
export default Produto