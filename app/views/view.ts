export abstract class View<t>{
    protected elemento:HTMLElement;
    private escape = false;
    constructor(seletorCSS:string,escapar?:boolean){
        this.elemento = document.querySelector(seletorCSS)
    }


    protected abstract template(model:t):string


    update(modelo:t,):void{
        let template = this.template(modelo)
        if(this.escape){
            template = template.replace(/<script>[\s\S]*?<\/script>/,"")
        }
        this.elemento.innerHTML = template

    }
}