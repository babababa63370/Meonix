import { db } from "./db";
import { items, messages, type Item, type InsertItem, type Message, type InsertMessage } from "@shared/schema";

export interface IStorage {
  getItems(): Promise<Item[]>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async getItems(): Promise<Item[]> {
    return await db.select().from(items);
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages).values(insertMessage).returning();
    return message;
  }
}

export const storage = new DatabaseStorage();
