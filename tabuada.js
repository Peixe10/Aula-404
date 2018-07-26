if (process.argv.length === 3 && !isNaN(Number(process.argv[2]))){
    
    //Para que o usuário só escreva um valor para calcular a tabuada
    //Verifica se o parametro argv2 não é um numero.
    let base = process.argv[2];
    
    for(let i=1;i<=10;i++){
        console.log(`${base}x${i} = ${i*base}`);
    }   
    
}
else{
    console.log("Utilização:");
    console.log("node tabuada.js <numero>");
}
