const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1234567890",
    email: "andre@andre.com"
}

console.log(`O nome do cliente é ${cliente.nome} sua idade é ${cliente.idade}`);
console.log(`Os tres primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`);