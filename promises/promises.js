// const fs = require('fs');

// const promifisy = require('util').promisify;

const text = `Aqui virá um belo texto escrevendo sobre como ser um bom desenvolvedor.`;

// const writeFileAsync = promifisy(fs.writeFile);

// const readFileAsync = promifisy(fs.readFile);

// writeFileAsync('promise.txt', text)
//   .then((_) => readFileAsync('promise.txt'))
//   .then((data) => console.log(data.toString()));

const fs = require('fs/promises');

fs.writeFile('promiseShort.txt', text)
  .then((_) => fs.readFile('promiseShort.txt'))
  .then((data) => console.log(data.toString()));
