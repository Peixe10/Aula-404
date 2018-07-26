//Sincrono e assincrono

const fs = require("fs");

console.log("FS importado com sucesso.");

/*A função executada abaixo é Sync (sincrona), logo o programa precisa ler todo o arquivo para continuar a produção do restante do código:*/
// let texto = fs.readFileSync("teste.txt");
//Para utilizar uma function assincrona utiliza-se como ficou abaixo.

fs.readFile("teste.txt",callbackLeitura);

console.log("função de leitura executada");

//Callback -> Você entrega para uma função assincrona, que só será executada quando outra função, da qual ela é dependente, terminar.

//Abaixo função de callback: (obs: antes, no lugar dela estava só console.log(texto);)

function callbackLeitura(erro,sucesso){
    if(erro){
        console.log("Ocorreu um erro. O erro foi:");
        console.log(erro);

    }
    else{
        console.log(sucesso.toString());
        console.log("Texto está na tela");

    }
}

//NOTA IMPORTANTE, A FORMA MAIS COMUM QUE APARECERÁ É AQUELA QUE ESTA NO GIT

/*fs.readFile("texte.txt", function(erro,sucesso)

...

)*/

let paraEscrever = process.argv[2]; //Pegara a segunda coisa que está escrita e passará para um arquivo de texto. Ou seja, no node precisa estar escrito: node arquivo.js TEXTOQUEQUEROESCREVER

//writeFile serve para escrever em um arquivo, se fosse appendFile ele iria adicionando conforme vai escrevendo. Para pular linha utiliza o \r\n

fs.appendFile("escrever.txt", `${paraEscrever}\r\n`, (erro, sucesso) => {
    if(erro){
        console.log("Erro ao escrever o arquivo. O erro foi: ");
        console.log(erro);
    }
    else{
        console.log("Arquivo escrito com sucesso")
    }
});

console.log("Funcao de escrita executada")
