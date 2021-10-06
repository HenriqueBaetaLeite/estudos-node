function Droid() {}

const r2d2 = new Droid();

console.log(r2d2);

const BattleDroid = {};

console.log(BattleDroid);

// Estas 2 maneiras acima estamos setando um objeto, primeiro uma função construtora ou em formato
// de JSON(objetos literais)

Droid.prototype.getLanguages = function () {
  return this.languages;
};

Droid.prototype.setLanguages = function (n) {
  this.languages = n;
};

r2d2.setLanguages(6_000_000);
// Podemos escrever números usando underline/underscore, para facilitar a leitura :)

console.log(r2d2.getLanguages());

const c3po = new Droid();

c3po.setLanguages(34_000);

console.log(c3po.getLanguages());

function CombatDroid() {}

CombatDroid.prototype = Object.create(Droid.prototype);

const combat1 = new CombatDroid();

combat1.setLanguages(3);

console.log(combat1.getLanguages());

// class Droid {
//   #languages;

//   setLanguages(languages) {
//     this.#languages = languages;
//   }

//   getLanguages() {
//     return this.#languages;
//   }
// }

// const c3po = new Droid();

// c3po.setLanguages(200);

// console.log(c3po.getLanguages());
