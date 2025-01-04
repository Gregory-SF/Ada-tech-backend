import express from 'express'
import { config } from 'dotenv'
import path from 'path'
// import { readFileSync } from 'fs'

interface IUser {
    name: string
    age:number
}

config()
const app = express()
// app.use('/client', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')))
const url = process.env.API_BASE_URL ?? 'http://localhost'
const port = process.env.API_PORT ?? 3300
const users: IUser [] = [
    {
        name: 'Fulano',
        age: 20
    },
    {
        name: 'Ciclano',
        age: 40
    },
    {
        name: 'Bertrano',
        age: 30
    }
]

app.get('/api', (request, response) => {
    response.status(200).send('<h1 style="color: purple;">Hello World</h1>')
}) 

app.get('/api/users', (request, response) => {
    response.json(users)
})


app.listen(port, () => {
    console.log(`Servidor rodando no endereço ${url}:${port}`)
})
