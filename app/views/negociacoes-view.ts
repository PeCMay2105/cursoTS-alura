import { Negociacoes } from "../models/Negociacoes.js";
import { Negociacao } from "../models/negociacao.js";

export class negociacoesView{
    private elemento:HTMLElement;

    constructor(seletorCSS:string){
        this.elemento = document.querySelector(seletorCSS)
    }
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
                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
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
}