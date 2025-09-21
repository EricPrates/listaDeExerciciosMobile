import { useState } from "react"
import Pessoa from "../model/Pessoa"
export const AposetadoriaController = () => {

    const [pessoa, setPessoa] = useState (new Pessoa(0,0));

    function setIdade(idade){

        setPessoa(new Pessoa(idade, pessoa.tempoTrabalho, pessoa.nome));
    }
    function setTempoTrabalho(tempoTrabalho){

        setPessoa(new Pessoa(pessoa.idade, tempoTrabalho, pessoa.nome));
    }
    function setNome(nome){ 
        setPessoa(new Pessoa(pessoa.idade, pessoa.tempoTrabalho, nome));
    }
    function verificarAposentadoria(){
        if(pessoa.podeAposentar()){
            return "Parabéns " + pessoa.nome + ", você pode se aposentar!";
        }
    }       
    return {
        pessoa,
        setIdade,
        setTempoTrabalho,
        setNome,
        verificarAposentadoria
    }

}