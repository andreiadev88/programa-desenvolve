const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calcularMedia(notasDaSala) {
    const somaNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);

    const media = somaNotas / notasDaSala.length;

    return media;
}

console.log(`A média da sala de JavaScript é ${calcularMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calcularMedia(salaJava)}`);
console.log(`A média da sala de python é ${calcularMedia(salaPython)}`);