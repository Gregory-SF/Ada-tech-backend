// import products from './produtos.json'

// import fs from "node:fs"
import { writeFileSync } from "node:fs"
import path from "node:path"

const productJson = JSON.stringify([
    {
        "name": "Pair of Socks",
        "amountInStock": 100,
        "unitValue": 5
    },

    {
        "name": "T-shirt",
        "amountInStock": 500,
        "unitValue": 45
    }
], null, 0) //botar 2 como espaçamento, fica bem mais legível
// A escolha do 0 para o espaçamento foi levando em consideração o tamanho do arquivo, manter ele mais enxuto resulta num arquivo final mais leve em KB

const fileOutPath = path.join(__dirname, 'generated-products.json')

const products = JSON.parse(productJson)

// fs.writeFileSync(fileOutPath, productJson)
writeFileSync(fileOutPath, productJson)

console.log(productJson)
console.log(products)
// products.forEach(product => console.log(product))