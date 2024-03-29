import { DatabaseAdapter, QueryOptions, Schema } from "./index.d";

class Bamboo {
  private db: DatabaseAdapter;

  constructor(db: DatabaseAdapter) {
    this.db = db;
  }

  async createTable(tableName: string, schema: Schema): Promise<void> {
    await this.db.createTable(tableName, schema);
  }

  async dropTable(tableName: string): Promise<void> {
    await this.db.dropTable(tableName);
  }

  async selectAll<T>(
    tableName: string,
    conditions?: QueryOptions
  ): Promise<T[]> {
    return this.db.selectAll<T>(tableName, conditions);
  }

  async selectUnique<T>(
    tableName: string,
    conditions: QueryOptions
  ): Promise<T | null> {
    return this.db.selectUnique<T>(tableName, conditions);
  }

  async selectFirst<T>(
    tableName: string,
    conditions: QueryOptions
  ): Promise<T | null> {
    return this.db.selectFirst<T>(tableName, conditions);
  }

  async insert(tableName: string, values: QueryOptions): Promise<void> {
    await this.db.insert(tableName, values);
  }

  async update(
    tableName: string,
    values: QueryOptions,
    conditions: QueryOptions
  ): Promise<void> {
    await this.db.update(tableName, values, conditions);
  }

  async delete(tableName: string, conditions: QueryOptions): Promise<void> {
    await this.db.delete(tableName, conditions);
  }

  async executeRaw<T>(query: string, params: any[] = []): Promise<T[]> {
    return this.db.executeRaw<T>(query, params);
  }

  async count(
    tableName: string,
    conditions: QueryOptions = {}
  ): Promise<number> {
    return this.db.count(tableName, conditions);
  }
}

export { Bamboo, DatabaseAdapter };
