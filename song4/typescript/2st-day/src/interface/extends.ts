interface Person {
  name: string;
}

interface Developer extends Person {
  skill: string;
}

let fe = {} as Developer;
// let fe: Developer = { name: "song", skill: "passion" };

fe.name = "josh";
fe.skill = "TypeScript";
