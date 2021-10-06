#!/usr/bin/env node

const net = require("net");

const chatServer = net.createServer();

const clientList = [];

const broadCast = (message, client) => {
  clientList
    .filter((item) => item !== client)
    // filtro a mensagem para que enviou não receber tbm
    .forEach((element) => element.write(message));
};

chatServer.on("connection", (client) => {
  client.write("Hallo guest, willkomen!\n");
  clientList.push(client);
  client.on("data", (data) => broadCast(data, client));
  client.on("end", () => {
    console.log("Client end", clientList.indexOf(client));
    clientList.splice(clientList.indexOf(client, 1));
  });
  client.on("error", (error) => {
    console.error("Got error: ", error.message);
  });
});

chatServer.listen(9000);
