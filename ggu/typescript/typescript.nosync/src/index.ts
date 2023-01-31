// interface TableData {
//   [x: string]: string;
// }

// const enum TableKey {
//   ID = "ID",
//   FrirstName = "firstName",
//   LastName = "lastName",
//   Score = "score",
// }

// type StrictTableData = { [key in TableKey]: string };
// type LessStrictTableData = { [key in TableKey]?: string };

// const myTableData: LessStrictTableData = {
//   ID: "1",
//   firstName: "jane",
//   lastName: "doe",
// };

// console.log(myTableData);

import { Color } from "./types"

const { Red, Green, Blue: ImBlue } = Color;

const green = Color.Green;

const veggies = Color.Green;

const pepper = Color.Red;

const sky = ImBlue;

console.log(sky)

// DRY (Don't Repeat Yourself) => 개발 원칙