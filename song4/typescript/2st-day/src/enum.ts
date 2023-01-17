enum Color {
  Red,    // 0
  Green,  // 1
  Blue,   // 2
}
let color1: Color = Color.Green;

console.log(color1);           // 1
console.log(typeof color1);    // number

enum Color2 {
  Red = 3,
  Green,
  Blue,
}

let color2: Color2 = Color2.Green;
console.log(color2);           // 4
console.log(typeof color2);    // number

enum Color3 {
  Red = 3,
  Green = 7,
  Blue,
}

let color3: Color3 = Color3.Blue;
console.log(color3);           // 8
console.log(typeof color3);    // number

