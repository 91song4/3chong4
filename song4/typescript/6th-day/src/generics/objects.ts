import { MyInterface, MyInterfaceG } from "../types";

// const error: readonly Array<boolean> = [false];          // error
// const okay: readonly boolean[] = [false];                // okay
// const okayGeneric: ReadonlyArray<boolean> = [false];     // oaky


const stringObject: MyInterface = { value: "hello world!" };
const numberObject: MyInterface = { value: 1234 };
const stringArrayObject: MyInterface = { value: ["hello", "world"] };

// 제네릭(generic)을 써야하는 이유는 뭘까? 아래 예문에서 알아보자

const stringObjectG: MyInterfaceG<string> = { value: "hello world!" };
const defaultObjectG: MyInterfaceG = { value: "hellow world!!" };
const numberObjectG: MyInterfaceG<number> = { value: 1234 };
const stringArrayObjectG: MyInterfaceG<string[]> = {
  value: ["hello", "world"],
};

// const stringArrayObjectG_2: MyInterfaceG<Array<string>> = { value: ["hello", "world"] }; // 지저분해보인다.
