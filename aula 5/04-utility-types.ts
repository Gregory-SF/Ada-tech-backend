import { Product } from "./01-produto";

const product1: Readonly<Product> = {
    name: 'Pair of Socks',
    amountInStock: 100,
    unitValue: 5,
}

const productAllOptional: Partial<Product> = {
    unitValue: 20
} 

const productAllRequired: Required<Product> = {
    name: 'Jacket',
    amountInStock: 30,
    unitValue: 180,
    barCode: "9be37d8a-5a2a-4007-af0e-6195f6795a19"
} 

const productOmitStockAndBarCode: Omit<Product, "amountInStock" | "barCode"> = {
    name: 'Shorts',
    unitValue: 180

} 

const productOnlyNameAndValue: Pick<Product, "name" | "unitValue"> = {
    name: 'Shorts',
    unitValue: 180
} 