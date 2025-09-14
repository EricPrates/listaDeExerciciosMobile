export default class Combustivel {

    constructor(precoGasolina, precoEtanol, kmPorLitro) {
        this.precoGasolina = parseFloat(precoGasolina);
        this.precoEtanol = parseFloat(precoEtanol);
        this.kmPorLitro = parseFloat(kmPorLitro);

    }

    setprecoEtanol(precoEtanol){
        this.precoEtanol = parseFloat(precoEtanol);
     }
    getprecoEtanol(){
        return this.precoEtanol;
    }
    setkmPorLitro(kmPorLitro){
        this.kmPorLitro = parseFloat(kmPorLitro);
     }
    getkmPorLitro(){
        return this.kmPorLitro;
    }
    setprecoGasolina(precoGasolina){
        this.precoGasolina = parseFloat(precoGasolina);
     }
    getprecoGasolina(){
        return this.precoGasolina;
    }
    
};