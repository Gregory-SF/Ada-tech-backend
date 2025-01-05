import { Product } from "./01-produto"

/* Com a extensão json to ts. você pode pegar um texto em json e transformar em objeto tipado
    Apertando ctrl + shift + p , depois seleciona json to ts e tadaaaa
*/

/**Isso serve para deixar todos os campos de um objeto / tipo opcionais
 */
const productAllOptional: Partial<Product> = {
    unitValue: 20
} 


/**Isso serve para deixar todos os campos de um objeto / tipo obrigatórios
*/
const productAllRequired: Required<Product> = {
    name: 'Jacket',
    amountInStock: 30,
    unitValue: 180,
    barCode: "9be37d8a-5a2a-4007-af0e-6195f6795a19"
} 

/**
 * Isso serve para omitir valores para não poder usá-los / instânciá-los
 */
const productOmitStockAndBarCode: Omit<Product, "amountInStock" | "barCode"> = {
    name: 'Shorts',
    unitValue: 180
} 

/**
 * Isso serve para pegar apenas esses valores
 */
const productOnlyNameAndValue: Pick<Product, "name" | "unitValue"> = {
    name: 'Shorts',
    unitValue: 180
} 

/**
 * Isso serve para impedir de mudar esse valores depois, eles são apenas para leitura
 */
const product1: Readonly<Product> = {
    name: 'Pair of Socks',
    amountInStock: 100,
    unitValue: 5,
}


export {}