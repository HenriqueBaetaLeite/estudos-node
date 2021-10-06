#!/usr/bin/env node

const http = require("http");

const fs = require("fs");

const fileName = String(process.argv[2] || "").replace(/[^a-z0-9\.]/gi, "");

const quantityOfParagraphs = String(process.argv[3] || "").replace(
  /[^\d]/g,
  ""
);

// mensagem mostrando como usar:
const USAGE = "USO: node lorem-ipsum.js {nomeArquivo} {quantidadeParágrafos}";

if (!fileName || !quantityOfParagraphs) {
  return console.log(USAGE);
}

const URL = "http://loripsum.net/api/";

http
  .get(URL + quantityOfParagraphs, (res) => {
    let text = "";
    res.on("data", (chunk) => {
      text += chunk;
    });

    res.on("end", () => {
      fs.writeFile(fileName + ".html", text, () => {
        // aqui estou criando arquivo HTML, por padrão cria um txt
        console.log(`Arquivo ${fileName} pronto!`);
      });
    });
  })
  .on("error", (error) => {
    console.error("Got error:", error.message);
  });
