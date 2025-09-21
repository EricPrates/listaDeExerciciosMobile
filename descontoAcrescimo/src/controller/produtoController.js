import { useState } from "react"
import Produto from "../model/Produto"

const produtoController =() => {
    const [produto, setProduto] = useState(new Produto(0))  
    
   function setPreco(preco = 0){
        setProduto(new Produto(preco))
    }
  function precoTotal(quantidade = 0){ 
    return Number(produto.getPreco()) * Number(quantidade)
  }
  function precoDesconto(desconto = 0 ){
    return Number(produto.getPreco()) - (Number(produto.getPreco()) * Number(desconto / 100))
  }
  function precoAcrescimo(acrescimo = 0){
    return Number(produto.getPreco()) + (Number(produto.getPreco()) * Number(acrescimo / 100));
  }
  function clear(){
    setProduto(new Produto(0))
  }
    
    return{
        setPreco,
        produto,
        precoTotal,
        precoDesconto,
        precoAcrescimo,
        clear
      }
}

export default produtoController