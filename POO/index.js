import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User ('Gisele', 'g@g.com', '1998-07-30')
// console.log(novoUser.exibirInfos())

// const novoAdmin = new Admin ('Rodrigo', 'r@r.com', '1990-08-1990')
// console.log(novoAdmin.nome)
// novoAdmin.nome = ''
// console.log(novoAdmin.nome)

const novoDocente = new Docente('Guilherme', 'g@g.com', '1985-01-01')
console.log(novoDocente.exibirInfos())
