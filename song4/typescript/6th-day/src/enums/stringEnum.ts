import Color from "../types";

const myColor: Color = Color.Red;
console.log({ myColor });

const yourColor: Color.Blue = Color.Blue;
console.log({ yourColor });

const otherColor: string = Color.Green;
console.log({ otherColor });

const chorock: Color = Color.Green;
console.log(chorock);

// type casting
const colorOfSky: Color.Blue = Color.Green as Color.Blue;
console.log(colorOfSky);

const faveColor = "LOVE" as Color;
console.log(faveColor);