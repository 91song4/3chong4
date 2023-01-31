import type { ILinearStructure } from "../types";

class Stack<T> implements ILinearStructure<T> {
  private storage: T[] = [];

  constructor(private capacity = 4) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("stack is full!");
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

const stringStack: Stack<string> = new Stack<string>();
stringStack.push("hello");
stringStack.push("world");
stringStack.push("!");
stringStack.push("!");
// stringStack.push("!");

console.log(stringStack.peek());
console.log(stringStack.pop());
stringStack.push("!");
