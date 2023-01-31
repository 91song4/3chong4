import { BADFLAGS } from "dns";
import { EventLoopUtilityFunction } from "perf_hooks";

interface Topping {
    tomatoes: boolean;
    onion: boolean;
    lettuce: boolean;
    ketchup: boolean;
}

const myToppings: Topping = {
    tomatoes: true,
    onion: true,
    lettuce: true,
    ketchup: true,
}    

const partialToppingsIWant: Partial<Topping> = {
    tomatoes: true,
    onion: undefined,
}

// --

interface BubbleTeaOrder {
    tea: boolean;
    straw?: boolean;
}

const myBubbleTeaOrder: Required<BubbleTeaOrder> = {
    tea: true,
    straw: true,
};

// --

interface BankAccount {
    accountNumber: string;
    balance: bigint;
}

const myAccount: Readonly<BankAccount> = {
    accountNumber: "1234",
    balance: BigInt(1000000),
};

// myAccount.balance = BigInt(0);

// console.log(myAccount);

//--

type Type = string[]
type TypeII = Array<string>

type ObjectTypeRecord = Record<string, string>;
type ObjectTypeObject = { [x: string]: string};

type County = "Korea" | "USA" | "Canada" | "UK";
type CountyCode = 82 | 1 | 44;

type CountyToCountryCode = Record<County, CountyCode>;
type CountyToCountryCodeObject = { [countryName in County]: CountyCode};

const countries: CountyToCountryCodeObject = {
    Korea: 82,
    USA: 1,
    Canada: 1,
    UK: 44,
}

//--

interface UserInfo {
    userName: string;
    favoriteColor: string;
    email: string;
    password: string;
}

type LessUserInfo = Omit<UserInfo, "password" | "email">

const newUser : LessUserInfo = {
    userName: "pony",
    favoriteColor: "rainbow",
    // password:"1234",
    // email: "hello@world.hello",
}

//--

type MyType = "dog" | "cat" | "alpaca";
type LessMyType = Exclude<MyType, "alpaca">;

const catOrDogAllowed: LessMyType = "cat";


type onChange = (isDone: boolean) => void;
type GruopOfTypes = string | undefined | onChange;
type FunnctionType = Exclude<GruopOfTypes, string | undefined>;

const onChangeHandler : FunnctionType = (isDone) => isDone;
console.log(onChangeHandler(true))
// const today: FunnctionType = "great day";

//--

interface User {
    firsyName: string;
    lastName: string;
}

interface Student {
    user: User;
    isGraduated: boolean;
    school: string;
}

type StudentName = Pick<Student, "user" | "isGraduated">;
const StudentName: StudentName = {
    user: {
        firsyName: "winnie",
        lastName: "pooh",
    },
    isGraduated: true,
};

//console.log(studentName);

// --

type MyPet = "dog" | "cat" | "alpaca";
type ExtractedMyPet = Extract<MyPet, "alpaca" | "cat">;

const onlyAlpacaOrCatAllowed: ExtractedMyPet = "cat";
// console.log(onlyAlpacaOrCatAllowed);

//--

type QueryParam = string | string[] | undefined | null;
type NonNullableQueryParam = NonNullable<QueryParam>;

const queryParam: NonNullableQueryParam = ["orders"];
const forbiddenQueryParam: NonNullableQueryParam = undefined;








interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}

class Stack<T> implements IStack<T> {
  // Queue
  private storage: T[] = [];

  constructor(private capacity = 4) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("stack is full");
    }

    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }
}

const stringStack = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
stringStack.push("!");
stringStack.push("!");
stringStack.push("!");

console.log(stringStack.peek());

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
