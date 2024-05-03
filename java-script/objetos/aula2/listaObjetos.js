const cliente = {
    nome: "Paulo",
    idade: 24,
    email: "joao@joao.com",
    telefone: ["1155555555", "1144444444"]
};

cliente.enderecos = [ {
   rua: "R. José Inocente",
   numero: 1000,
   apartamento: true,
   complemento: "bloco 1"
}
];

cliente.enderecos.push({
    rua: "Rua Feliz",
    numero: 2000,
    apartamento: false
})

const listaApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApartamentos)