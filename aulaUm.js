// tipo number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2; 

const operacaoMatematica = primeiroNumero * segundoNumero;

console.log(operacaoMatematica);

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5; 

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);

// NaN -> Not a Number

const alura = "Alura";

// tipo String

const texto1 = "Olá mundo!";
const texto2 = 'olá mundo!';

const citacao = 'O matheus disse "oi"';

console.log(texto1, texto2);
console.log(citacao);

//concatenação (+)

const fraseUm = "Meu nome é ";
const meuNome = "Matheus";

const texto = fraseUm + meuNome;

console.log(texto);

// pesquisar sobre template string ou template literal

// padrão de conversão de código UNICODE, usado pra exibir caracteres

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// o codigo \u serve para informar ao javascript que não se trata de uma string comum, e sim de códigos da UNICODE



const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase(); //método para fazer com que o JS converta todo o texto para minúsculo

console.log(cidade === inputMinusculo); 


const senha = "minhaSenha123"
console.log(senha.length) //método para ver a quantidade de caracteres em uma constante


// tipo booleano

console.log(primeiroNumero === segundoNumero); //método para avaliar se uma constante é igual a outra (irá retornar falso)

