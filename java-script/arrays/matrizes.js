const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosMedia = [alunos, medias];

console.log(listaDeAlunosMedia);

console.log(
  `A aluna na posição 1 da lista de alunos é: ${listaDeAlunosMedia[0][1]}
     A média da Juliana é: ${listaDeAlunosMedia[1][1]}
    `
);

const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, false];

const funcionarios = [nomes, idades, faculdade];

console.log(funcionarios);

console.log(
  `O funcionário na posição 2 na lista de funcionários é: ${funcionarios[0][2]}
    Sua idade é: ${funcionarios[1][2]}
    Tem curso superior? ${funcionarios[2][2]} `
);
