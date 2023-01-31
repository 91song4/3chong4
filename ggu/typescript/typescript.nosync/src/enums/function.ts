//enums
import { Color, Direction } from "../types";
import type { ThingsInLife } from "../types";

function printRGB(color: Color): Color {
  return color;
}

console.log(printRGB(Color.RED));
console.log(printRGB(Color.Green));

function printThingsInLife(things: ThingsInLife): string {
  return `color of pen: ${things.colorOfPen} keyboard arrow: ${things.keyboardArrow}`;
}

console.log(
  printThingsInLife({ colorOfPen: Color.BLUE, keyboardArrow: Direction.Left })
);
