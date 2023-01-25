interface User {
    id: number
    firstName: string
    lastName: string
    role: string
  }
  
  function updateUser(id: number, update: Partial<User>) {
    const user = getUser(id)
    const newUser = { ...user, ...update }
    saveUser(id, newUser)
  }
  
  // interface Address {
  //   email: string;
  //   address: string;
  // }
  
  // type MyEmail = Partial<Address>;
  // const me: MyEmail = {}; // 가능
  // const you: MyEmail = { email: "noh5524@gmail.com" }; // 가능
  // const all: MyEmail = { email: "noh5524@gmail.com", address: "secho" }; // 가능
  
  interface Person {
    age: number;
    name: string;
  }
  
  const me: Person = { age: 10, name: "young" };
  // const you: Person = { age: 10 };