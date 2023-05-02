import { NegociacaoController } from "./controllers/NegociacaoController.js";
import { negociacoesView } from "./views/negociacoes-view.js";
const controlador = new NegociacaoController();
const formulario = document.querySelector(".form")
formulario.addEventListener("submit", event=>{
    event.preventDefault();
    controlador.adiciona()
})

