const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosMedia = [alunos, medias];

function exibeNomeNota(aluno){
    if(listaDeAlunosMedia[0].includes(aluno)) {
        const [alunos, medias] = listaDeAlunosMedia;
        const indice = alunos.indexOf(aluno);
        const mediaAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaAluno}`);
    }else{
        console.log('Aluno não encontrado!');
    }
}
exibeNomeNota("Juliana")