class Animal {
  static planet = "지구";
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
   static run(name = "String",speed = 0) {
    this.name = name
    this.speed += speed;
    console.log(`${this.name}가 속도 ${this.speed}로 달립니다.`);
  }
  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name}가 숨었습니다!`);
  }
}
let rabbits = [
  new Rabbit("흰 토끼", 10),
  new Rabbit("검은 토끼", 5)
];
rabbits.sort(Rabbit.compare);
Rabbit.run(); // 검은 토끼가 속도 5로 달립니다.
console.log(Rabbit); // 지구