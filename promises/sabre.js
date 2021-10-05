async function sabre() {
  return 'espada laser';
}

sabre().then((res) => console.log(res));

const espada = await sabre();

console.log(espada);
