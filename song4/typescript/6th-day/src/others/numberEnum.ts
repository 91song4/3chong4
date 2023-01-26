enum Color {
  Red,
  Green,
  Blue,
}

const myColor: Color = Color.Red;
console.log({ myColor }); // { myColor: 0 }

const yourColor: Color.Blue = Color.Blue;
console.log({ yourColor }); // { yourColor: 2 }

// Reverse mapping
console.log(Color[0]); // Red
console.log(Color[2]); // Blue
