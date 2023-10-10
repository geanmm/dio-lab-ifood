const hero = { name: "Fulano", xp: 5678, rank: undefined };

if (hero.xp <= 1000) {
  hero.rank = "Ferro";
} else if (hero.xp > 1000 && hero.xp <= 2000) {
  hero.rank = "Bronze";
} else if (hero.xp > 2000 && hero.xp <= 6000) {
  hero.rank = "Prata";
} else if (hero.xp > 6000 && hero.xp <= 7000) {
  hero.rank = "Ouro";
} else if (hero.xp > 7000 && hero.xp <= 8000) {
  hero.rank = "Platin";
} else if (hero.xp > 8000 && hero.xp <= 9000) {
  hero.rank = "Ascendente";
} else if (hero.xp > 9000 && hero.xp <= 10000) {
  hero.rank = "Imortal";
} else if (hero.xp > 10000) {
  hero.rank = "Radiante";
}

console.log(`O Herói de nome "${hero.name}" está no nível "${hero.rank}"`);
