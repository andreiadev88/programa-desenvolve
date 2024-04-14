const cliente = {
    nome: "José Alegre",
    idade: 36,
    email: "jose@jose.com",
    telefone: ["1155555555", "1166666666"]

};

cliente.enderecos = [
    {
        rua: "Rua Felicidade",
        numero: 1000,
        apartamento: true,
        complemento: "Bloco 1 ap 32"
    },
];

function ligarParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligadndo para ${telefoneComercial}`);
    console.log(`Ligadndo para ${telefoneResidencial}`);
}

ligarParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
};

console.log(encomenda);