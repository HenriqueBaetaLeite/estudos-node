const fs = require('fs');

const text = `Aqui vai um texto sobre o curso vencer Leitura.
Um curso de leitura integral, onde treinamos velocidade de leitura com máxima
compreensão do texto.`;

fs.writeFile('vencerLeituraSync.txt', text, (err, result) => {
  fs.readFile('vencerLeituraSync.txt', (error, data) => {
    console.log(data.toString());
  });
});
