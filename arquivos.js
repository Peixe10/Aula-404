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
        console.log(sucesso);
        console.log("Texto está na tela");

    }
}