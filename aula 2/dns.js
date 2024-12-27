const dns = require('node:dns')


// Duas versões para fazer a mesma coisa
// dns.resolve4(searchedUrl, (err, addresses) => {
//     if(err){
//         console.error('Url não encontrada')
//         return
//     }
//     console.log(addresses)
// })

async function bootstrap () {
    const searchedUrl = 'google.com'
    console.time('Pesquisando url por DNS padrão')
    const addresses = await dns.promises.resolve4(searchedUrl)
    console.timeEnd('Pesquisando url por DNS padrão')
    console.log(addresses)

    const nameServers = await dns.promises.resolveNs(searchedUrl)
    console.log(nameServers)

    const ipNs = await dns.promises.resolve4(nameServers[0])

    const resolver = new dns.Resolver()
    resolver.setServers(ipNs)
    
    
    console.time('Pesquisando url por DNS específico')
    const addressesWithResolver =  resolver.resolve4(searchedUrl, (error, addresses) => {
        if(error){
            console.error('Não foi possível encontrar ipv4')
            return
        }
        console.timeEnd('Pesquisando url por DNS específico')
        console.log(addresses)
    })
}

bootstrap()
