var idade = 77
if(idade < 16){
    console.log('não vota')
}else if (idade < 18 || idade > 65){/*else if substitui a nessecidade de utilizar uma linha para criar um novo bloco. || = "ou", lendo-se "Se idade for menor que 18 OU maior que 65" */
    console.log('voto opcional')
} else{
    console.log('voto obrigatório')
}
