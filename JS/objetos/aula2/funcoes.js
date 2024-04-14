const cliente = {
    nome: "Paulo",
    idade: 24,
    email: "joao@joao.com",
    telefone: ["1155555555", "1144444444"],
    saldo: 200,
    efetuaPagamento: function(valor) {
        if (valor > this.saldo ) {
            console.log("Saldo insuficiente");
        } else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    },
};

cliente.efetuaPagamento(33)