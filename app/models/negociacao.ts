export class Negociacao{

    constructor(
        private  _data:Date,
        public readonly quantidade:number,
        public readonly valor:number
        ){}


    get volume():number{
        return (this.valor * this.quantidade)
    }

    get data():Date{
        return new Date(this._data.getTime());

    }

    public static criaEConverte(dataString:string,quantidadeString:string,valorString:string):Negociacao{
        const regEx = /-/g
        let valor = parseFloat(valorString);
        let quantidade = parseInt(quantidadeString);
        let data = new Date(dataString.replace(regEx,","))
        return new Negociacao(data,quantidade,valor);
    }
}