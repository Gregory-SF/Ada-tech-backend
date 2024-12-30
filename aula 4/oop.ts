import { Produto } from "../aula 3/01-oop"

interface EstabelecimentoInterface {
    endereco: string
    setor: string
    filaDeEspera: number
    retornaNomeDosProdutos: () => string[]
    diminuiFilaDeEspera(): void
}

interface ReceitaInterface {
    remedios: string[]
    identificacaoDoMedico: string
}

interface Remedio extends Produto{
    receitaObrigatoria?: boolean

}

interface FarmaciaInterface extends EstabelecimentoInterface{
    compraRemedioPrescrito: (receita: ReceitaInterface, produtosAComprar: string[]) => void
}

class Estabelecimento implements EstabelecimentoInterface {
    protected _filaDeEspera = 10

    constructor(
        public endereco: string, 
        public setor: string, 
        protected produtos: Produto[],
        filaDeEspera?: number
    ) {
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera
    }

    public retornaNomeDosProdutos() {
        return this.produtos.map(produto => produto.nome)
    }

    get filaDeEspera() {
        return this._filaDeEspera
    }

    set filaDeEspera(fila: number) {
        if(fila <= 0){
            return
        } 
        this._filaDeEspera = fila
    }
    
    diminuiFilaDeEspera() {
        if(this._filaDeEspera === 0){
            return
        }
        this._filaDeEspera--
    }
}

class Farmacia extends Estabelecimento implements FarmaciaInterface{
    constructor(
        public endereco: string, 
        public setor: string, 
        protected produtos: Remedio[],
        filaDeEspera?: number
    ) {
        super(endereco, setor, produtos, filaDeEspera)
    }
    public compraRemedioPrescrito (receita: ReceitaInterface, produtosAComprar: string[]): void{
        const remediosDisponiveis = this.produtos.filter(produto => produtosAComprar.includes(produto.nome))
        
        if(remediosDisponiveis.length === 0){
            console.log('Infelizmente não temos os rémedios em estoque')
        }

        const remediosAutorizados = remediosDisponiveis.filter(
            produto => 
                !produto.receitaObrigatoria ? true: receita.remedios.includes(produto.nome)
        )

        console.log({remediosDisponiveis})
        console.log({remediosComReceita: remediosAutorizados})
    }        
}

const supermercado = new Estabelecimento('Rua do limoeiro, 42', 'alimentação', 
    [
        {nome: 'pão', valor: 0.8}, 
        {nome: 'arroz', valor: 10},
        {nome: 'leite', valor: 5},
        {nome: 'leite', valor: 5},
        {nome: 'brigadeiro', valor: 1.5},
        {nome: 'carne moída', valor: -20}
    ], 
    25
)

const farmaciaDoZe = new Farmacia('Rua X, 42', 'farmaceutíco', 
    [
        {nome: 'aspirina', valor: 8}, 
        {nome: 'remédio controlado 1', valor: 80, receitaObrigatoria: true},
        {nome: 'remédio controlado 2', valor: 180, receitaObrigatoria: true},
        {nome: 'vitamina C', valor: 5},
        {nome: 'creme hidratante', valor: 5}
    ]
)

farmaciaDoZe.compraRemedioPrescrito({
    remedios: ['remédio controlado 1'],
    identificacaoDoMedico: '123-456-789'
}, ['aspirina', 'remédio controlado 1', 'shampoo'])