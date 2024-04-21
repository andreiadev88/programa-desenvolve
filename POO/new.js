// function User(nome, email) {
//     this.nome = nome
//     this.email = email

//     this.exibirInfos = function() {
//         return `${this.nome}, ${this.email}`

//     }

// }

// const novoUser = new User ('Andreia', 'deia@deia.com')
// console.log(novoUser.exibirInfos())

// function Admin(role) {
//     User.call(this, 'Andreia', 'deia@deia.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

const user = {
    init: function(nome, email){
        this.nome = nome
        this.email = email    
    },
    exibirInfos: function(nome) {
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Marina', 'm@m.com')
console.log(novoUser.exibirInfos())
// console.log(user.isPrototypeOf(novoUser))