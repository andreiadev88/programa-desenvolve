const cliente = {
    nome: "João Silva",
    idade: 26,
    email: "joao@joao.com",
    telefone: [1199999999, 1188888888]
};

cliente.enderecos = [
    {
        rua: "R. José Feliz",
        numero: 120,
        apartamento: true,
        complemento: "Bloco A ap 20"
    },
];

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function") {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}
