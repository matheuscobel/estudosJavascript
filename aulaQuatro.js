let x ="";
console.log(x);
x = "oi";


// primeiro nós declaramos a função, e depois executamos a função, um não pode acontecer antes do outro;

function imprimeTexto(texto) {
    console.log(texto)
}

imprimeTexto("oi");
imprimeTexto("outro texto");

//existem outras formas de se aplicar funções

function soma() {
    const resultado = 2 + 2; //essa const não vai devolver o resultado por que pedimos apenas para ela guardar este dado;
}

function soma1() {
    //dentro dessa função você pode atribuir vários outros códigos e console.log, mas sempre antes da keyword return, pois o que vem após, não será executado!;
    return 2 + 2;
}

console.log(soma1()) //aqui declaramos a função com () mesmo sem parâmetro atribuido, e a keyword return, vai devolver o valor que armazenamos, no caso o resultado da operação;

imprimeTexto(soma1()) //também podemos chamar uma função dentro de outra função, como nesse caso utilizar a função imprimeTexto, para mostrar o valor da função soma1;

function soma2(num1 , num2) { //adicionando parâmetros dentro da função, conseguimos ampliar a sua funcionalidade
    return num1 + num2;
}

console.log(soma2(2, 2));
console.log(soma2(200, 42));
console.log(soma2(-900 , 453));
//parâmetros também podem ser chamados de argumentos.;

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`; //nessa função usamos template string, ou template literal, para concatenar strings de forma mais ágil;
}

console.log(nomeIdade(24, "Matheus")) //nessa situação, os parâmetros foram invertidos, logo o JS irá imprimir de forma invertida;
console.log(nomeIdade("Matheus", 24)) //devemos tomar cuidado pra declarar os parâmetros da forma com que foram dispostos na função;

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

console.log(multiplica(soma2(4, 5), soma2(3, 3))); //aqui, utilizamos uma função dentro de outra função;
console.log(multiplica(soma2(4, 5))); //quando a função, a qual foi atribuida dois parâmetros, recebe apenas um parâmetro, ao tentar realizar a multiplicação, o retorno será NaN;

//diferentes funções podem ter o mesmo nome de parâmetros, já que após ser utilizado pela função, o nome do parâmetro fica disponível para ser reutilizado, porém o nome de cada função é único!;

//nas boas práticas, é indicado passar poucos parâmetros para uma função, e caso seja necessário chamar vários parâmetros, o indicado é dividir isso em várias funções para facilitar a manutenção do código;


//expressão de função
const soma3 = function(number1, number2) {return number1 + number2}
console.log(soma3(1, 1));

//a principal diferença da declaração de função pra expressão de função, é o processo de Hoisting, no qual antes de iniciar o algoritmo, o JS puxa todas as Funções e Variáveis para serem "armazenadas" no inicio do programa
//logo, nós podemos chamar um console.log pra uma função que está declarada mais à frente, mas o mesmo não acontece com uma expressão de função com const, que só pode ter o console.log chamado após sua declaração no algoritmo;

//arrow function
const apresentarArrow = nome => `meu nome é ${nome}`; //é semelhante à expressão de função, mas com um código mais clean
const soma4 = (num3, num4) => num3 + num4;


const somaNumerosPequenos = (num1 , num2) => {    //a arrow function também pode ser usada para expressões com mais de um return;
    if (num1> 10 || num2 > 10) {
    return "somente números de 1 a 9"
    } else {
        return num3 + num4;
    }
}