const http = require("http");

const fs = require("fs");

const URL = "http://loripsum.net/api/1";

http
  .get(URL, (res) => {
    let text = "";

    res.on("data", (chunk) => {
      text += chunk;
    });

    res.on("end", () => {
      fs.writeFile("command-line/lorem.html", text, () => {
        console.log("File created!");
      });
    });
  })
  .on("error", (error) => {
    console.error("Got Error:", error.message);
  });
