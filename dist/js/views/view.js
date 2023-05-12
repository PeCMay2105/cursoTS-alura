export class View {
    constructor(seletorCSS, escapar) {
        this.escape = false;
        this.elemento = document.querySelector(seletorCSS);
    }
    update(modelo) {
        let template = this.template(modelo);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}
