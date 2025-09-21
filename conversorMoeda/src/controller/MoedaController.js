
import Moeda from "../model/Moeda";

const MoedaController = () => {
    let moedaAtual = new Moeda(0,'');

    function definirMoedaTipo(tipo) {
        moedaAtual.setTipo(tipo);
    }
    function definirMoedaValor(valor) {
        
         moedaAtual.setValor(valor);
    }
    function converterParaReal() {
        return moedaAtual ? moedaAtual.ParaReal() : '0.00';
    }

    function converterParaDolar() {
        return moedaAtual ? moedaAtual.paraDolar() : '0.00';
    }

    function converterParaEuro() {
        return moedaAtual ? moedaAtual.paraEuro() : '0.00';
    }
    function getMoedaTipo() {
        return moedaAtual.getTipo();
    }
    function calcularConversao() {
            if (!moedaAtual.tipo || !moedaAtual.valor) return 'Nenhum valor ou moeda definida';

            if(moedaAtual.tipo.toLocaleLowerCase() === 'dólar'){
                return `Valor em real: ${converterParaReal()}, Valor em euro: ${converterParaEuro()}`;
            } else if(moedaAtual.tipo.toLocaleLowerCase() === 'euro'){
                return `Valor em real: ${converterParaReal()}, Valor em dólar: ${converterParaDolar()}`;
            } else if(moedaAtual.tipo.toLocaleLowerCase()    === 'real'){
                return `Valor em dólar: ${converterParaDolar()}, Valor em euro: ${converterParaEuro()}`;
            }
            return '';
        }

    return {
        definirMoedaTipo,
        definirMoedaValor,
        converterParaReal,
        converterParaDolar,
        converterParaEuro,
        getMoedaTipo,
        calcularConversao
    };
};

export default MoedaController;