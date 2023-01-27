import Color from "../types";

const myColor: Color = Color.RED;
console.log({ myColor });

const yourColor: Color.BLUE = Color.BLUE;
console.log({ yourColor });

const otherColor: string = Color.GREEN;
console.log({ otherColor });

const chorock: Color = Color.GREEN;
console.log(chorock);

// type casting
const colorOfSky: Color.BLUE = Color.GREEN as Color.BLUE;
console.log(colorOfSky);

const faveColor = "LOVE" as Color;
console.log(faveColor);