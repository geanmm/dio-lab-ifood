class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const mago = new Heroi("Spellcaster", 23, "mago");
const guerreiro = new Heroi("Warlord", 43, "guerreiro");
const monge = new Heroi("Blind Monk", 61, "monge");
const ninja = new Heroi("Shadow Blade", 25, "ninja");
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
