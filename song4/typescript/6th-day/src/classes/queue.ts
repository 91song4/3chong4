import type { ILinearStructure } from "../types";

class Queue<T> implements ILinearStructure<T> {
  private storage: T[] = [];

  constructor(private capacity = 4) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw new Error("queue is full!");
    }

    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.shift();
  }

  peek(): T | undefined {
    return this.storage[0];
  }

  size(): number {
    return this.storage.length;
  }
}

const stringQueue: Queue<string> = new Queue<string>();
stringQueue.push("hello");
stringQueue.push("world");
stringQueue.push("!");
stringQueue.push("!");
// stringQueue.push('!');

console.log(stringQueue.peek());
console.log(stringQueue.pop());
stringQueue.push("!");
