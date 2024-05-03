const cliente = {
    nome: "José Alegre",
    idade: 36,
    email: "jose@jose.com",

};

// cliente.enderecos = [
//     {
//         rua: "Rua Felicidade",
//         numero: 1000,
//         apartamento: true,
//         complemento: "Bloco 1 ap 32"
//     },
// ];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro! É necessário ter um endereço cadastrado.")
}