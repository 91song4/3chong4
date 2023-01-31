import { type } from "os";

interface Toppings {
  tomatoes: boolean;
  onion: boolean;
  lettuce: boolean;
  ketchup: boolean;
}

const toppings: Toppings = {
  tomatoes: true,
  onion: true,
  lettuce: true,
  ketchup: true,
};

const partialToppings: Partial<Toppings> = {
  tomatoes: true,
  // onion: true,
  // lettuce: true,
  // ketchup: true,
};

const requiredToppings: Required<Partial<Toppings>> = {
  tomatoes: true,
  onion: true,
  lettuce: true,
  ketchup: true,
};

console.log(toppings);
console.log(partialToppings);
console.log(requiredToppings);

interface BubbleTeaOrder {
  tea: boolean;
  straw?: boolean;
}

const myBubbleTeaOrder: Required<BubbleTeaOrder> = {
  tea: true,
  straw: true,
};

interface BankAccount {
  accountNumber: string;
  balance: bigint;
}

const myAccount: Readonly<BankAccount> = {
  accountNumber: "1234",
  balance: BigInt(10000000),
};

console.log(myAccount);
// myAccount.balance = BigInt(0);
// console.log(myAccount);

type ObjectTypeRecord = Record<string, string>;
type ObjectTypeObject = {
  [x: string]: string;
};

type Country = "Korea" | "USA" | "Canada" | "UK";
type CountryCode = 82 | 1 | 44;

type CountryToCountryCode = Record<Country, CountryCode>;
type anotherCountryToCountryCode = {
  [key in Country]: CountryCode;
};

const countries: CountryToCountryCode = {
  Korea: 82,
  USA: 1,
  Canada: 1,
  UK: 44,
};

console.log(countries);

interface UserInfo {
  userName: string;
  favoriteColor: string;
  email: string;
  password: string;
}

type LessUserInfo = Omit<UserInfo, "password" | "email">;

const newUser: LessUserInfo = {
  userName: "pony",
  favoriteColor: "rainbow",
  // password: '1234',
  // email:'hello@world.hello'
};

type MyType = "dog" | "cat" | "alpaca";
type LessMyType = Exclude<MyType, "cat" | "alpaca">;

const onlyDogAllowed: LessMyType = "dog";
// const onlyDogAllowed: LessMyType = "cat";

type onChange = (isDone: boolean) => boolean;
type GruopOfTypes = string | undefined | onChange;

type FunctionType = Exclude<GruopOfTypes, string | undefined>;

const onChangeHandler: FunctionType = (isDone) => {
  return isDone;
};

console.log(onChangeHandler(true));
// const today: FunctionType = 'great day';

interface User {
  firstName: string;
  lastName: string;
}

interface Student {
  user: User;
  isGraduated: boolean;
  school: string;
}

type StudentName = Pick<Student, "user" | "isGraduated">;
const studentName: StudentName = {
  user: {
    firstName: "winnie",
    lastName: "pooh",
  },
  isGraduated: true,
};

console.log(studentName);

type MyPet = "dog" | "cat" | "alpaca";
type ExtractedMyPet = Extract<MyPet, "alpaca" | "cat">;

const onlyAlpacaOrCatAllowed: ExtractedMyPet = 'cat';
console.log(onlyAlpacaOrCatAllowed);

type QueryParam = string | string[] | undefined | null;
type NonNullableQueryParam = NonNullable<QueryParam>; 

const queryParam1: NonNullableQueryParam = 'orders';
const queryParam2: NonNullableQueryParam = ['orders'];
// const forbiddenQueryParam: NonNullableQueryParam = undefined;
// const queryParam4: NonNullableQueryParam = null;


console.log();
