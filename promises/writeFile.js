import fs from 'fs/promises';

const text = `Aqui vai um texto sobre o curso vencer Leitura.
Um curso de leitura integral, onde treinamos velocidade de leitura com máxima
compreensão do texto.`;

await fs.writeFile('asyncAwait.txt', text);

const data = await fs.readFile('asyncAwait.txt');

console.log(data.toString());
