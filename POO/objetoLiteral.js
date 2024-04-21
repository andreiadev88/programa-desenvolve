const user = {
    nome: "Andreia",
    email: "deia@deia.com",
    nascimento: "30/05/1988",
    role: "admin",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: "mariana@mari.com",
    role: "admin",
    criarCurso() {
        console.log("Curso criado!")
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()