const clientes = require("./clientes.json");

function ordenar(lista, proppriedade) {
    const resultado = lista.sort((a, b) => {
        if(a[proppriedade] < b[proppriedade]){
            return -1;
        }
        if(a[proppriedade] > b[proppriedade]){
            return 1;
        }
        return 0;
    });
    return resultado;
}

const oerdenadoNome = ordenar(clientes, "nome");

console.log(oerdenadoNome);