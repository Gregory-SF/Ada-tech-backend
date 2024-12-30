type Constructor = new (...args: any[]) =>{};
type GConstructor<T = {}> = new (...args: any[]) => T;
type AnimalProps = GConstructor<{nome: string, idadeEmMeses: number}>

function MixinVoa <TBase extends AnimalProps>(superClasse: TBase){
    return class extends superClasse {
        constructor(...args: any){
            super(args[0])
        }
        voar() {
            console.log(`${this.nome} voou`)
        }
    }
}

function MixinNada <TBase extends AnimalProps>(superClasse: TBase){
    return class extends superClasse {
        constructor(...args: any){
            super(args[0])
        }
        nadar() {
            console.log(`${this.nome} nadou`)
        }
    }
}

function MixinAnda <TBase extends AnimalProps>(superClasse: TBase){
    return class extends superClasse {
        constructor(...args: any){
            super(args[0])
        }
        andar() {
            console.log(`${this.nome} andou`)
        }
    }
}

interface AnimalIterface {
    nome: string
    idadeEmMeses: number
    comer: () => void
}

class Animal implements AnimalIterface {
    public nome: string
    public idadeEmMeses: number
    constructor ({nome, idadeEmMeses} : {nome: string, idadeEmMeses: number}) {
        this.nome = nome
        this.idadeEmMeses = idadeEmMeses
    }

    comer() {
        console.log(`${this.nome} se alimentou `)
    }
}

const cachorro = new (MixinAnda(Animal))({nome: 'Mel',idadeEmMeses: 10}) 
const mosca = new (MixinVoa(Animal))({nome: 'Mosca X',idadeEmMeses: 0.1})
const pato = new (MixinNada(MixinAnda(MixinVoa(Animal))))({nome: 'Carlos',idadeEmMeses: 5})

cachorro.comer()
cachorro.andar()
mosca.comer()
mosca.voar()
pato.andar()
pato.voar()
pato.nadar()


export {}