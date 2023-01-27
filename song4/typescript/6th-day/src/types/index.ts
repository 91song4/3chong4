enum Color {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

export enum Direction {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// type TTingsInLife = {
//   colorOfPen: Color;
//   keyboardArrow: Direction;
// }

export interface IThingsInLife {
  colorOfPen: Color;
  keyboardArrow: Direction;
}

export default Color;

export interface MyInterface {
  value: string | number | string[];
}

export interface MyInterfaceG<T = string> {
  value: T;
}