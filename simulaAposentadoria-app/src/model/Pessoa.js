export default class Pessoa {

    constructor(idade, tempoTrabalho, nome) {
        this.idade = idade || 0;
        this.tempoTrabalho = tempoTrabalho || 0;
        this.nome = nome || "";
    }

    setIdade(idade){
        this.idade = idade || 0;
    };
   
    setTempoTrabalho(tempoTrabalho){
        this.tempoTrabalho = tempoTrabalho || 0;
    };
   
    setNome(nome){
        this.nome = nome || "";
    }
    podeAposentar(){
        return (this.idade >= 65 || this.tempoTrabalho >= 30 || (this.idade >= 60 && this.tempoTrabalho >= 25));
    }   
};