//Nullish coalescing operator (??)
// São a mesma função
resolver.setServers(nameServers[0] ? nameServers[0] : 'ns1.google.com')

resolver.setServers(nameServers[0] ?? 'ns1.google.com')
//The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

// Ou seja, ele testa se o valor da direita não é null ou undefined, se não for, ele retorna ele mesmo, se for nulo ou undefined, ele retorna o valor da direita

// Diferente do ternário (?) que testa true ou false, o nullish testa null/ undefined

//Pesquisar http status codes mdn pra achar uma explicação e uns exemplos de status code

// A diferença entre http e https é que https usa SSL e isso é mais seguro pq não permite que qualquer pessoa no wifi /ip / endereço possa ver o seus acessos

//url do node ta praticamente deprecated, só não foi ainda devido aos legados que usam essa dependência, então novas aplicações devem usar whatwg api url, eu já fiz a implementação dela pra ficar registrado como seria