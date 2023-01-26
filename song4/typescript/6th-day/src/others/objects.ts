import Color from '../types';

const keys = Object.keys(Color);
console.log(keys);

console.log("---------------------------");

const values = Object.values(Color);
console.log(values);

type IObjectType = {
  [key in Color]?: string;
};

const myObject: IObjectType = {};

// values.forEach((key) => {
//   myObject[key] = "hello";
// });

// console.log(myObject);

const keyValues = Object.entries(Color);
keyValues.forEach((key) => {
  myObject[key[1]] = key[0];
});
console.log(myObject);
