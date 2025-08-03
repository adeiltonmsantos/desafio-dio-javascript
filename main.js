// Instalar previamente o pacote prompt-sync (npm install prompt-sync)
const prompt = require('prompt-sync')();

// Definindo variáveis para o nome do herói e seu XP
let nome;
let xp;
let nivel;

// Flag para o loop
let continuar = true

while(continuar){
    // Recebendo o nome do herói
    nome = prompt("Digite o nome do herói (digite FIM para sair): ")

    // Recebeu FIM. encerrando o programa...
    if(nome.toUpperCase() === "FIM"){
        break;
    }
    // Recebeu um nome. Continuando...
    else{
        // Recebendo o XP do herói
        xp = prompt("Digite o XP do herói: ");
        
        // Verificações
        if(xp < 1001){
            nivel = "Ferro";
        }
        else if(xp >= 1001 && xp < 2001){
            nivel = "Bronze";
        }
        else if(xp >= 2001 && xp < 5001){
            nivel = "Prata";
        }
        else if(xp >= 5001 && xp < 7001){
            nivel = "Ouro";
        }
        else if(xp >= 7001 && xp < 8001){
            nivel = "Platina";
        }
        else if(xp >= 8001 && xp < 9001){
            nivel = "Bronze";
        }
        else if(xp >= 9001 && xp < 10001){
            nivel = "Imortal";
        }
        else{
            nivel = "Radiante"
        }
        // Imprimindo a classificação
        console.log("\n\n------------------------------------------------------------------")
        console.log("O Herói de nome " + nome +" está no nível de " + nivel)
        console.log("------------------------------------------------------------------\n\n")
    }

}