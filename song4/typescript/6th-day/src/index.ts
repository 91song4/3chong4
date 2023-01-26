console.log("\n");

// enums
import Color, { Direction } from "./types";

// interface
import type { IThingsInLife } from "./types";

// interface TTableData {
//   [x: string]: string;
// };

type TTableData = {
  [x: string]: string;
};

const enum TableKey {
  ID = "ID",
  FirstName = "firstName",
  LastName = "lastName",
  Score = "score",
}

type StrictTableData = {[key in TableKey]: string;};
type lessStrictTableData = {[key in TableKey]?: string;};

const myTableData: lessStrictTableData = {
  ID: "1",
  firstName: "jane",
  lastName: "doe",
};

console.log(myTableData);
