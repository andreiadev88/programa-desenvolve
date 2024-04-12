const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosMedia = [alunos, medias];

function exibeNomeNota(aluno){
    if(listaDeAlunosMedia[0].includes(aluno)){
        console.log(`${aluno} está cadastrado`);

        const indice = listaDeAlunosMedia[0].indexOf(aluno);
        const mediaAluno = listaDeAlunosMedia[1][indice];

        console.log(`${aluno} tem a média ${mediaAluno}.`);
    }else {
        console.log('Aluno não encontrado');
    }
} 

exibeNomeNota('Ana');