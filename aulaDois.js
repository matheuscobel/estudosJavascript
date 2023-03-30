//var - utilizada para salvar dados, e realizar operações

var altura = 5;
var comprimento = 7;
var area = altura * comprimento;
console.log(area);

//let - só conseguimos usar o let depois que ela é declarada, diferente do var que pode ser declarada depois;

let forma ="retângulo";
let altura2 = 5;
let comprimento2 = 7;
let area2; 

if(forma === "retângulo"){
    area2 = altura2 * comprimento2;
} else {
    area2 = (altura2 * comprimento2) / 2;
}

console.log(area2);

//const - o valor atribuido à const não pode ser alterado depois

const forma2 = "triângulo";
const altura3 = 5;
const comprimento3 = 7;
let area3 = altura3 * comprimento3; // por isso usamos o let aqui, para permitir que o valor seja alterado

if(forma2==="quadrado"){
    area3 = altura3 * comprimento3;
} else{
    area3 = (altura3 * comprimento3) / 2;
}

console.log(area3)

//como o var é muito solto, atualmente o padrão é utilizar const e let, mas alguns codes antigos ainda usam o var

//boolean

const usuarioLogado = true;
const contaPaga = false;

//truthy ou falsy - não são booleanos, mas para o javascript, eles se comportam como se fossem;
// 0 - false; 1 - true;

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

// null - vazio(mas ainda é um valor); undefined - vazio(sem valor atribuido);

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let texto = "javascript";

console.log(typeof numero); //typeof é uma keyword que serve para perguntar qual o tipo de dado está armazenado na variável;
console.log(typeof texto);

console.log(typeof minhaVar);
console.log(typeof varNull); //o null foi criado como um objeto, e não como "null" um erro, mas que não será concertado;

//conversão implicita - ocorre a conversão de um tipo em outro (ex. um número em string ou contrário)

const number = 456;
const numberstring = "456";

console.log(number === numberstring); //estamos comparando um número com um texto, ou seja, tipos diferentes (false)
console.log(number == numberstring); //com == o JS converte os tipos, e agora os dois serão iguais (true)

// um = atribui valor; dois == compara valor; três === compara valor e tipo;

console.log(number + numberstring);  //vai ocorrer uma concatenação e a variável número será convertida em string;



//conversão explícita - permite que nós convertamos um tipo em outro; Number() ou String();

console.log(number + Number(numberstring));

//a conversão explícita também pode acontecer dentro da const e obter o mesmo resultado:
// const numberstring = Number("456"); 

//se tentar fazer uma conversão explícita de Number() com um algarismo (ex:"456a"), o resultado será NaN;
