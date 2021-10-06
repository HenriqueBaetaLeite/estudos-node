const axios = require("axios");

const fs = require("fs");

const marked = require("marked");

const engine = (template, ...data) => {
  return template.map((s, i) => s + `${data[i] || ""}`).join("");
};

const render = (result) => {
  const title = "Star Wars API Node";

  const count = result.data.count;

  const items = result.data.results;

  const markdown = engine`
${title}

Tem ${count} pessoas

${items
  .map((item) => {
    return [item.name, item?.height, item.hair_color, item.gender].join(" | ");
  })
  .join("\n")}
`;
  console.log(marked(markdown));
  return marked(markdown);
};

const URL = "https://swapi.dev/api/people/";

axios
  .get(URL)
  .then(render)
  .then((_) => process.exit());
