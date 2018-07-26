/*Exercício Aula Node - 40

Escrever um programa de cadastro de pessoas em node.js

Seu arquivo deve chamar cadastro.js

As pessoas cadastradas vao ser salvas em pessoa.json
Para cadastrar uma nova pessoa, o comando deve ser:
node cadastro.js salvar <nome> <email>
Para listar todos os cadastrados:]
node cadastro.js buscar-todos
Para listar uma pessoa em especifico:
node cadastro.js buscar <nome>
Para facilitar a sua vida:
- salve os arquivos com string de JSON.

Como fazer:

Nome da pessoa fica na chave e email fica no valor. 
Esse objeto vira string

Quando uma nova pessoa é cadastrada.*/

let salvar = process.argv[2];
const fs = require("fs");

if (salvar=="salvar"){
    
    let nome = process.argv[3];
    let email = process.argv[4];

    let objeto = {nome:email};
    
    fs.appendFile("pessoas.json",JSON.stringify(objeto), (erro,sucesso)=> {
        
        if(erro){
            console.log("Erro ao escrever o arquivo. O erro foi: ");
            console.log(erro);
        }
        else{
            console.log("Arquivo escrito com sucesso")
        }
    })
    
    console.log("EXECUTADO")
    
}