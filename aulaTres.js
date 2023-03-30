//tipagem dinâmica - não é necessário especificar o tipo da variável, o próprio JS interpreta isso;
//também pode ser chamada de untyped;

let minhaVar = 503;
minhaVar = "texto";
minhaVar = true; 

// linguagem interpretada - o nosso código será executado, onde um programa responsável irá ler e executar nosso código;

// linguagem compilada - o código irá passar por um compilador, pra ser transformado em linguagem de máquina, facilitando pro computador, mas dificultando pro programador;

//NodeJs - é um interpretador de javascript, geralmente utilizado para algoritmos de javascript focados no back-end;

//const numero; - vai retornar um erro de syntax, pois não tem inicializador na const. precisamos atribuir um valor para criar uma constante;

//console.log(numero - vai retornar o erro missing ) after argument list, pois não fechamos o ) da instrução;

//console.log(variavelInexistente) - vai retornar um referenceError, pois a variável não está definida;

console.log() //log - registro, onde podemos atribuir um numero, uma variável, uma string etc; 

//tratamento de erro - são os erros pré-definidos da ferramenta, informando para o usuário caso algo não saia como esperado

console.error("deu erro!") //pode ser usado junto de outras keywords para facilitar a interatividade do usuário;

console.error(new Error("deu erro"));

console.table() //para visualizar as informações em forma de tabelas de forma organizada;