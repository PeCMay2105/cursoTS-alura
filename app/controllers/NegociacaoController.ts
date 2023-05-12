import { DiasDaSemana } from "../enums/diasDaSemana.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { mensagemView } from "../views/mensagem-view.js";
import { negociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private negociacoes = new Negociacoes();
    public negociacoesView = new negociacoesView("#negociacoesView",true)
    private mensagem = new mensagemView("#mensagemView")


    

    constructor(){
        let $ = document.getElementById.bind(document);
        this.inputData = $("data")
        this.inputValor = $("valor")
        this.inputQuantidade = $("quantidade")
        this.negociacoesView.update(this.negociacoes);
        

    }

    public adiciona():void{

        const novaNegociacao = this.criaNegociacao();
        const listaNegociacoes = this.negociacoes;

        if(!this.ehdiaUtil(novaNegociacao.data)){
            this.mensagem.update("É necessário selecionar uma data correspondente a um dia útil")
            return
        }
        this.atualizaView();
        this.limpaForm()
        


    }

    private criaNegociacao():Negociacao{
        const negociacaoAdicionada = Negociacao.criaEConverte(this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value)
        if(this.ehdiaUtil(negociacaoAdicionada.data)){
            this.negociacoes.adiciona(negociacaoAdicionada)
            return negociacaoAdicionada
        }
        return negociacaoAdicionada;

        
    }

    private limpaForm():void{
        this.inputData.value = ""
        this.inputValor.value = ""
        this.inputQuantidade.focus
    }

    private atualizaView():void{
        this.negociacoesView.update(this.negociacoes)
        this.mensagem.update("Negociação adicionada com sucesso")
    }

    private ehdiaUtil(data:Date):boolean{
        return (data.getDay() != DiasDaSemana.Domingo && data.getDay() != DiasDaSemana.Sabado)
    }
}