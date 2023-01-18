interface Point{
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
console.log(p1);
console.log(p1.x);
console.log(p1.y);

// p1.x = 10;   err.msg:  Cannot assign to 'x' because it is a read-only property.
// const와 비슷하다고 생각 됨