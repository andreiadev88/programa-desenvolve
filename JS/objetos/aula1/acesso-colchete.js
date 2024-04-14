const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "1234567890",
    email: "andre@andre.com"
};

console.log(
    `O nome do cliente é ${cliente["nome"]} e a pessoa tem ${cliente["idade"]} anos`
)

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});