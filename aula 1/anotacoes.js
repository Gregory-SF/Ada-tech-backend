// Usar console.error para mostrar erros de forma mais clara e que permita realizar um debug
if(1===2){
    console.error('Matemática errada')
}

// Usar console.dir para mostrar objetos de forma mais clara 
console.dir({
    nome: 'Gregory',
    idade:20,
    cnh: true,
    hobby: 'ler'
})

// Usar console.table para mostrar objetos como tabela, muito usado quando pegamos informações do banco de dados 
console.table({
    nome: 'Gregory',
    idade:20,
    cnh: true,
    hobby: 'ler'
})

// Usar console.time para iniciar um timer com uma label, para sabermos quanto tempo está levando para fazer qualquer coisa 
console.time('manipular arquivos')
console.timeEnd('manipular arquivos')

// em javascript pra percorrer objetos ussa for (const sla in nsei)
//     para percorrer arrays é for (const sla of nsei)
//     se eu quero pegar a primeira e o resto das letras da string da pra fazer assim
//     const [primeiraLetra, ...restoDoNome] = nome
//     isso signica que vai pegar a primeira letra, ou primeira unidade do dado, e o resto, independente de quanto seja, num array
//     da pra usar em arrays normais tbm

//Para iniciar um novo projeto Node.js com um arquivo package.json padrão, você pode executar o comando npm init no terminal, na pasta do seu projeto: 
// Execute o comando npm init -y
// Responda às perguntas sobre o projeto, como o nome, a versão e o tipo de licença
// O arquivo package.json será gerado
// O npm init é um comando que guia o usuário na criação do arquivo package.json, fornecendo opções que podem ser configuradas ou deixadas como padrão. 
