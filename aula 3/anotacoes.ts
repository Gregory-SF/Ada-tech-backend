type Item = {
    nome: string
    valor: number
}

// Da pra declarar o objeto, ou o struct de forma externa e só chamar na definição da classe
class Store {
    private endereco: string
    private setor: string
    private produtos: Item[]

    constructor(endereco: string, setor: string, produtos: Item[]) {
        this.endereco = endereco
        this.setor = setor
        this.produtos = produtos
    }
}

// Ou declarar lá dentro mesmo


class Store2 {
    private endereco: string
    private setor: string
    private produtos: {
            nome: string,
            valor: number
        }

    constructor(endereco: string, setor: string, produtos: {nome: string, valor: number}) {
        this.endereco = endereco
        this.setor = setor
        this.produtos = produtos
    }
}

// Também tem como definir os paramentros no construtor como objetos, ai tu ão precisa colocar eles na ordem

// Pra rodar é npx ts-node pasta/arq.ts


// Aqui vai outras versões do código que também funcionam mas o instrutor deixou do jeito que vai ficar o meu código


/**
 * Versão da classe com a declaração fora do construtor, ou seja é mais extenso 
 */
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
