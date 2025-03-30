import { 
  users, 
  waitlistEntries, 
  type User, 
  type InsertUser,
  type WaitlistEntry,
  type InsertWaitlist
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  addWaitlistEntry(entry: InsertWaitlist & { createdAt: string }): Promise<WaitlistEntry>;
  getWaitlistEntries(): Promise<WaitlistEntry[]>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlist: Map<number, WaitlistEntry>;
  userCurrentId: number;
  waitlistCurrentId: number;

  constructor() {
    this.users = new Map();
    this.waitlist = new Map();
    this.userCurrentId = 1;
    this.waitlistCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async addWaitlistEntry(entry: InsertWaitlist & { createdAt: string }): Promise<WaitlistEntry> {
    // Check if email already exists in waitlist
    const existingEntry = await this.getWaitlistEntryByEmail(entry.email);
    if (existingEntry) {
      throw new Error('Email already registered in waitlist');
    }
    
    const id = this.waitlistCurrentId++;
    const waitlistEntry: WaitlistEntry = { 
      ...entry, 
      id,
    };
    
    this.waitlist.set(id, waitlistEntry);
    return waitlistEntry;
  }
  
  async getWaitlistEntries(): Promise<WaitlistEntry[]> {
    return Array.from(this.waitlist.values());
  }
  
  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    return Array.from(this.waitlist.values()).find(
      (entry) => entry.email === email,
    );
  }
}

export const storage = new MemStorage();
