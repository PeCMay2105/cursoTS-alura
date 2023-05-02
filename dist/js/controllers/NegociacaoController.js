import { Negociacoes } from "../models/Negociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { negociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new negociacoesView("#negociacoesView");
        let $ = document.getElementById.bind(document);
        this.inputData = $("data");
        this.inputValor = $("valor");
        this.inputQuantidade = $("quantidade");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const novaNegociacao = this.criaNegociacao();
        const listaNegociacoes = this.negociacoes;
        console.log(listaNegociacoes.listaNegociacoes());
        this.negociacoesView.update(this.negociacoes);
        //console.log(novaNegociacao);
        this.limpaForm();
    }
    criaNegociacao() {
        const regEx = /-/g;
        let valor = parseFloat(this.inputValor.value);
        let quantidade = parseInt(this.inputQuantidade.value);
        let data = new Date(this.inputData.value.replace(regEx, ","));
        this.negociacoes.adiciona(new Negociacao(data, quantidade, valor));
        return new Negociacao(data, quantidade, valor);
    }
    limpaForm() {
        this.inputData.value = "";
        this.inputValor.value = "";
        this.inputQuantidade.focus;
    }
}
