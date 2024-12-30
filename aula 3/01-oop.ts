export type Produto = {
    nome: string
    valor: number
}

// class Estabelecimento {
//     private endereco: string
//     private setor: string
//     private produtos: Produto[]

//     constructor(endereco: string, setor: string, produtos: Produto[]) {
//         this.endereco = endereco
//         this.setor = setor
//         this.produtos = produtos
//     }
// }

class EstabelecimentoBase {
    private _filaDeEspera = 10

    constructor(
        private endereco: string, 
        private setor: string, 
        private produtos: Produto[],
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

const padaria1 = new EstabelecimentoBase('Rua do limoeiro, 42', 'alimentação', 
    [
        {nome: 'pão', valor: 0.8}, 
        {nome: 'arroz', valor: 10},
        {nome: 'leite', valor: 5},
        {nome: 'leite', valor: 5},
        {nome: 'brigadeiro', valor: 1.5},
        {nome: 'carne moída', valor: -20}
    ], 
    -87
)

const padaria2 = new EstabelecimentoBase('Rua dos tamarindos, 12', 'conveniência', 
    [], 27
)

// Object Literal aparentemente, não é bom criar objetos desse jeito!!!
const padaria = {
    endereco: 'Rua do limoeiro, 42', 
    setor: 'alimentação', 
    produtos: [
        {nome: 'pão', valor: 0.8}, 
        {nome: 'arroz', valor: 10},
        {nome: 'leite', valor: 5},
        {nome: 'leite', valor: 5},
        {nome: 'brigadeiro', valor: 1.5},
        {nome: 'carne moída', valor: -20}
    ], 
    retornaNomeDosProdutos() {
        return this.produtos.map(produto => produto.nome)
    },
    _filaDeEspera: 10,
    get filaDeEspera() {
        return this._filaDeEspera
    },
    set filaDeEspera(fila: number) {
        if(fila <= 0){
            return
        } 
        this._filaDeEspera = fila
    }
}

console.log(padaria1)
console.log(padaria1.retornaNomeDosProdutos())
padaria1.diminuiFilaDeEspera()
padaria1.diminuiFilaDeEspera()
padaria1.diminuiFilaDeEspera()
padaria1.diminuiFilaDeEspera()
console.log(padaria)
// padaria1.filaDeEspera = 100
padaria2.filaDeEspera = -100
console.log(padaria1.filaDeEspera)
console.log(padaria2.filaDeEspera)