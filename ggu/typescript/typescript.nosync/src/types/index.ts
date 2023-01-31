export enum Color {
    RED = "RED",
    Green = "GREEN",
    BLUE = "BLUE"
}

export enum Direction {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
  }
  
  // type TThingsInLife = {
  //     colorOfPen: Color;
  //     keyboardArrow: Direction;
  // }
  
  export interface ThingsInLife {
    colorOfPen: Color;
    keyboardArrow: Direction;
  }