import { NegociacaoController } from "./controllers/NegociacaoController.js";
const controlador = new NegociacaoController();
const formulario = document.querySelector(".form");
formulario.addEventListener("submit", event => {
    event.preventDefault();
    controlador.adiciona();
});
