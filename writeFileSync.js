const fs = require('fs');

const text = `Aqui vai um texto sobre o curso vencer Leitura.
Um curso de leitura integral, onde treinamos velocidade de leitura com máxima
compreensão do texto.`;

fs.writeFileSync('vencerLeitura.txt', text);

const dataText = fs.readFileSync('vencerLeitura.txt');

console.log(dataText.toString());
