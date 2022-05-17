import { Database } from "./Database";

export class GetFromTable extends Database {

  async list(table: string) {
    return this.command(`SELECT * FROM ${table};`);
  }

  async getById(table: string, userId: number) {

    const [ rows ] =  await this.command(`SELECT * FROM ${table} WHERE id = ?;`, [userId]);

    const data = rows as [];

    if (data.length === 0) {
      throw new Error("não encontrado!");
    }

    return rows;
  }
}