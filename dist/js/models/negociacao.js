export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return (this.valor * this.quantidade);
    }
    get data() {
        return new Date(this._data.getTime());
    }
    static criaEConverte(dataString, quantidadeString, valorString) {
        const regEx = /-/g;
        let valor = parseFloat(valorString);
        let quantidade = parseInt(quantidadeString);
        let data = new Date(dataString.replace(regEx, ","));
        return new Negociacao(data, quantidade, valor);
    }
}
