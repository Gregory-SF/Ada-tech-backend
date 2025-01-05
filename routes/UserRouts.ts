import { Router } from "express";
import { randomUUID } from 'crypto'
import { readFileSync } from 'fs'
import dbJson from '../server.json'
import { writeFile } from 'fs/promises'
import path from 'path'

type User = {
    id: string
    name: string
    age:number
}

type  CreateUserDTO = Omit<User, "id"> 

// Outra forma de fazer
// const dbJson = readFileSync(dbJJsonPath)
// const users: User [] = JSON.parse(dbJson.toString()).users
const users: User [] = dbJson.users
const dbJsonPath = path.resolve(process.cwd(), 'server.json')

const userRoutes = Router()
userRoutes.get('/api/users', (request, response) => {
    response.json(users)
}) 

userRoutes.post('/api/users', async (request, response) => {
    const {name, age}: CreateUserDTO = request.body

    if(!name || age < 0){
        const errMessage = 'O usuário a ser criado precisa de nome e idade'
        response.status(400).send(errMessage)
    }

    const user = {id: randomUUID() , name, age}

    users.push(user)

    await writeFile(dbJsonPath, JSON.stringify({...dbJson, users}, null, 2))

    response.status(201).json(user)
})

userRoutes.delete('/api/users/:id', async (request, response) => {
    const { id } = request.params

    if(!id){
        const errMessage = 'O usuário a ser deletado precisa de um id'
        response.status(400).send(errMessage)
    }

    const foundUser = users.find(user => user.id === id)

    if(!foundUser){
        const errMessage = `Usuário com id ${id} não foi encontrado`
        response.status(400).send(errMessage)
    }

    const updatedUsers = users.filter(user => user.id != id)

    await writeFile(dbJsonPath, JSON.stringify({...dbJson, users: updatedUsers}, null, 2))

    response.status(204).json()
})

export {userRoutes}