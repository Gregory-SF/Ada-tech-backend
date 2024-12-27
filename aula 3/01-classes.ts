type Produto = {
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

class Estabelecimento {
    private filaDeEspera: number

    constructor(
        private endereco: string, 
        private setor: string, 
        private produtos: Produto[],
        filaDeEspera?: number
    ) {
        this.filaDeEspera = filaDeEspera ?? 10
    }

    retornaNomeDosProdutos(){
        return this.produtos.map(produto => produto.nome)
    }

    diminuiFilaDeEspera(){
        this.filaDeEspera--
    }

    getFilaDeEspera(){
        return this.filaDeEspera
    }
}

const padaria3 = new Estabelecimento('Rua do limoeiro, 42', 'alimentação', 
    [
        {nome: 'pão', valor: 0.8}, 
        {nome: 'arroz', valor: 10},
        {nome: 'leite', valor: 5},
        {nome: 'leite', valor: 5},
        {nome: 'brigadeiro', valor: 1.5},
        {nome: 'carne moída', valor: -20}
])

console.log(padaria3)
console.log(padaria3.retornaNomeDosProdutos())
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
console.log(padaria3.getFilaDeEspera())
