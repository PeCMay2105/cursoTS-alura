import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { mensagemView } from "../views/mensagem-view.js";
import { negociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new negociacoesView("#negociacoesView", true);
        this.mensagem = new mensagemView("#mensagemView");
        let $ = document.getElementById.bind(document);
        this.inputData = $("data");
        this.inputValor = $("valor");
        this.inputQuantidade = $("quantidade");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const novaNegociacao = this.criaNegociacao();
        const listaNegociacoes = this.negociacoes;
        if (!this.ehdiaUtil(novaNegociacao.data)) {
            this.mensagem.update("É necessário selecionar uma data correspondente a um dia útil");
            return;
        }
        this.atualizaView();
        this.limpaForm();
    }
    criaNegociacao() {
        const negociacaoAdicionada = Negociacao.criaEConverte(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (this.ehdiaUtil(negociacaoAdicionada.data)) {
            this.negociacoes.adiciona(negociacaoAdicionada);
            return negociacaoAdicionada;
        }
        return negociacaoAdicionada;
    }
    limpaForm() {
        this.inputData.value = "";
        this.inputValor.value = "";
        this.inputQuantidade.focus;
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagem.update("Negociação adicionada com sucesso");
    }
    ehdiaUtil(data) {
        return (data.getDay() != DiasDaSemana.Domingo && data.getDay() != DiasDaSemana.Sabado);
    }
}
