import { useState } from "react";
import Combustivel from "../model/Combustivel";


const appController = () => {
    const [usuario, setUsuario] = useState("");
    const [gasolina, setprecoGasolina] = useState(new Combustivel);
    const [etanol, setprecoEtanol] = useState(new Combustivel);
    function getNome() {
        return usuario;
    }
    function setNome(nome) {
        setUsuario(nome);
    }
    function precoGasolina(precoG){
        setprecoGasolina = precoG;
    }
    function precoEtanol(precoE){
        setprecoEtanol = precoE;
    }
    return {
        getNome, setNome, precoEtanol, precoGasolina
    }

}

export default appController