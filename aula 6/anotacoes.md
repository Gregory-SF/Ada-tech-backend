
# Anotações

### Explicaçao fornecida pelo GitHubCopilot

O método use do objeto app, `app.use` (que é uma instância do Express) é utilizado para montar um middleware em uma rota específica. 
Neste caso, a rota é `/client`. Isso significa que qualquer solicitação que comece com `/client` será tratada pelo middleware especificado.  
O `express.static` é um middleware embutido no Express que serve arquivos estáticos, como HTML, CSS, JavaScript e imagens. 
Quando uma solicitação é feita para a rota `/client`, o middleware express.static será responsável por servir os arquivos estáticos.   
Esta linha de código configura o Express para servir arquivos estáticos da pasta public quando uma solicitação é feita para a rota `/client`. 
Por exemplo, se houver um arquivo index.html na pasta public, ele poderá ser acessado através da URL `http://localhost:3000/client/index.html` (supondo que o servidor esteja rodando na porta 3000


Isso é pra carregar a pagina html nesse path específico
```js
import express from 'express'
import { config } from 'dotenv'
import path from 'path'

config()
const app = express()
app.use('/client', express.static(path.join(__dirname, 'public')))
```

### O que é Middleware? 

Middleware é uma função que tem acesso ao objeto de solicitação (req), ao objeto de resposta (res) e à próxima função de middleware no ciclo de solicitação-resposta de uma aplicação Express. 
Essas funções podem executar qualquer código, fazer mudanças nos objetos de solicitação e resposta, encerrar o ciclo de solicitação-resposta ou chamar a próxima função de middleware na pilha.

---


Isso vai enviar um arquivo

```js
// Forma ruim
response.send(homePage)
// Forma mais polida
response.sendFile(homePage)
```
Aplicação na prática
```js
app.get('/api', (request, response) => {
    const homePagePath = path.join(__dirname, 'home.html')
    const homePage = readFileSync(homePagePath)
    response.send(homePage)
```

Para manter o server salvando após cada atualização no código 
foi necessário usar baixar e usar o pacote ts-node-dev