//parâmetros/argumentos/retorno

//declara função
function exibeInfoEstudante(nome, nota) {
  return `O nome é ${nome} e a nota é ${nota}`;
}

//exibe resultado da função no console
console.log(exibeInfoEstudante("Paula", 10));

//-----------------------------------------

//declara função
function somarDoisNumeros(numA, numB) {
  return numA + numB;
}

//execução (ou chamada) da função
somarDoisNumeros(2, 2);

//atribuindo o retorno de uma função a uma variável
const resultado = somarDoisNumeros(2, 2);

//exibe esultado no console
console.log(resultado);

//-----------------------------------------------

function dividir(dividendo, divisor) {
  return dividendo / divisor;
}

const resultado2 = dividir(10, 2);
console.log(`o resultado é ${resultado2}`); // o resultado é 5

//-----------------------------------------------

function dividir(dividendo, divisor) {
  return dividendo / divisor;
}

const resultado3 = dividir(10, 2);
console.log(`o resultado é ${resultado3}`);

//--------------------------------------------

function dividir(dividendo, divisor) {
    return dividendo / divisor;
    // este console não é executado
    console.log('fim da função');
   }
   
   const resultado4 = dividir(10, 5);
   console.log(`o resultado é ${resultado4}`); // o resultado é 2
 
   
//---------------------------------------------------------------------

function dividir(dividendo, divisor) {
    if (divisor !== 0) {
      return dividendo / divisor;
    } else {
      return 'favor não dividir por zero';
    }
   }
   
   const resultado5 = dividir(10, 5);
   console.log(resultado5); // 2
   const resultadoZero = dividir(10, 0);
   console.log(resultadoZero); // 'favor não dividir por zero'
   