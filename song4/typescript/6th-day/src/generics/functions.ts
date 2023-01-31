import { Status } from "../types";
import type { User, Order } from "../types";

function getData<T = string>(data: T): T {
  return data;
}

console.log(getData<string>("hello world!"));
console.log(getData("hello world!"));
console.log(getData<number>(1234));
console.log(getData<User>({ email: "email@email.com", name: "katie" }));
console.log(getData<String[]>(["string", "data"]));
console.log(getData<String[]>([]));

const orders: Order[] = Object.entries<Status>(Status).map((status, index) => {
  return {
    buyer: `buyer #${index}`,
    orderStatus: status[1],
  };
});

console.log();
