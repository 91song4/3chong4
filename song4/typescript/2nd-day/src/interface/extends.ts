interface Person {
  name: string;
}

interface Drinker {
  drink: string;
}

interface Developer extends Person, Drinker {
  skill: string;
}

let fe = {} as Developer;
// let fe: Developer = { name: "song", skill: "passion" };

fe.name = "song";
fe.skill = "PASSION";
fe.drink = "MonsterBlack";

console.log(fe);