const http = require("http");

// const server = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "text/plain" });
//   // response.end("Open the blast doors!");
//   if (request.url === "/") {
//     response.end("Open the blast doors!\n");
//   } else if (request.url === "/close") {
//     response.end("Close the blast doors!\n");
//   } else {
//   }
// });

const phrasesChewbacca = [
  "RRRRRRRRAAAAAAAAAAAAHHHHHHHHWWRRRRRR",
  "WWWWWWRRRRRRRRWWWWWWWRRRRRGGGGGRRRR",
  "RWRWRWRWRWRWRGRGRGRGRGRGGAAGAGAGAAGAGARRRRRR",
  "AAAAAARRRRRRRRRGGGGGGGGHHHHHHHH",
];

const routes = new Map();

routes.set("/", (_request, response) => response.end("Open the blast doors!"));

routes.set("/chewbacca", (request, response) => {
  const randomIndex = Math.floor(Math.random() * phrasesChewbacca.length);
  const say = phrasesChewbacca[randomIndex];
  response.end(say);
});

routes.set("/zeppelin", (_request, response) =>
  response.end("Talk in song from tongues of lilting grace")
);

routes.set("/tull", (_request, response) =>
  response.end("Greasy fingers smearing shabby clothes")
);

const server = http.createServer((request, response) => {
  if (!routes.has(request.url)) {
    return response.end("No doors\n");
  }
  return routes.get(request.url)(request, response);
});

server.listen(1337, () => console.log("O pai ta on! port 1337"));
