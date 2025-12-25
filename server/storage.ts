import { db } from "./db";
import { items, type Item, type InsertItem } from "@shared/schema";

export interface IStorage {
  getItems(): Promise<Item[]>;
}

export class DatabaseStorage implements IStorage {
  async getItems(): Promise<Item[]> {
    return await db.select().from(items);
  }
}

export const storage = new DatabaseStorage();
