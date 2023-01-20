/**
 * Data Model Interfaces
 */
import baseItem, { Item } from "./item.interface";
import { Items } from "./items.interface";

/**
 * In-Memory Store
 */
let items: Items = {
  1: {
    id: 1,
    name: "Burger",
    price: 599,
    description: "Tasty",
    image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
  },
  2: {
    id: 2,
    name: "Pizza",
    price: 299,
    description: "Cheesy",
    image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
  },
  3: {
    id: 3,
    name: "Tea",
    price: 199,
    description: "Informative",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
  },
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => {
  return await Object.values(items);
};

export const find = async (id: number): Promise<Item> => {
  return items[id];
};

export const create = async (newItem: baseItem): Promise<Item> => {
  const id = new Date().valueOf();
  items[id] = {
    id,
    ...newItem,
  };
  return items[id];
};

export const update = async (
  id: number,
  itemUpdate: baseItem
): Promise<Item | null> => {
  if (!(await find(id))) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};

export const remove = async (id: number): Promise<void | null> => {
  if (!(await find(id))) {
    return null;
  }
  delete items[id];
};
