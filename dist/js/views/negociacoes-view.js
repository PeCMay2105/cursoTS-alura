export class negociacoesView {
    constructor(seletorCSS) {
        this.elemento = document.querySelector(seletorCSS);
    }
    template(modelo) {
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
            ${modelo.listaNegociacoes().map(negociacao => {
            return `
                <tr>
                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                <td>${negociacao.quantidade}</td>
                <td>${negociacao.valor}</td>
                </tr>
                `;
        }).join("")}
            </tbody>    
        </table>
        `;
    }
    update(modelo) {
        const template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
}
