// Semana 2 - Lógica - Variáveis, Operadores e Condicional

/*

# Antes de tudo...

Adicionando arquivos JS:
  a) direto no HTML
  b) link no HTML de arquivo externo

*/

/* TIPOS DE DADOS:

  * String
  * Number
  * Boolean
  * Undefined vs null
  * Object
  * Array

*/

/*

* String: representa uma cadeia de caracteres. Strings são úteis para guardar dados que podem ser representados em forma de texto.
          Ex.: ABC, CASA, A
          Deve sempre ser escrita dentro de:
          "" --> aspas duplas ou
          '' --> aspas simples ou
          `` --> template string (acentuação utilizada nas crases)

*/

var cidade = "Salvador";

const estado = 'Bahia';

let idade = "36"; // !! Dica: você pode colocar um valor numérico dentro de uma String sempre que tiver certeza que não vai precisar utiliza ele para fazer cálculos ou comparações de tipo.

alert(`${cidade} ${estado}`); // a templete string é muito útil quando precisamos utilizar interpolação, que é o mesmo que concatenar valores dentro do texto sem utilizar o operado de soma (+)


/* 

 * Number: são números.

   10, -1 , 0 --> inteiros, positivos  e negativos;
   7.5, 3,4 --> reais (números com ponto flutuante, float);
   NaN --> Not a Number (não é um número);

*/

var nota = 7;

var preco = 19.90;

alert(nota - "casa"); // retorna um NaN porque não há como fazer cálculos entre String e Number. Ele reconhece que dentro das aspas há uma cadeia de caracteres.

