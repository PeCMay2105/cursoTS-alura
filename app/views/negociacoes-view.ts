import { Negociacoes } from "../models/Negociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { mensagemView } from "./mensagem-view.js";
import { View } from "./view.js";

export class negociacoesView extends View<Negociacoes>{

    template(modelo:Negociacoes):string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
            ${modelo.listaNegociacoes().map(negociacao =>{
                return `
                <tr>
                <td>${this.formataData(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
                </tr>
                `
            }).join("")}
            </tbody>    
        </table>
        `
    }

    update(modelo:Negociacoes):void{
        const template = this.template(modelo)
        this.elemento.innerHTML = template

    }
    private formataData(data:Date):string{
        return new Intl.DateTimeFormat().format(data)
    }
}