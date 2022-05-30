import { Database } from "./Database";
import { ICustomer } from "../interfaces/ICustomer";

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

  async create(params: ICustomer) {

    const { name, lastName, cpf, acountManager, acountType, agency, birthDate} = params;

    const data = [name, lastName, birthDate ,cpf, acountType, acountManager, agency];

    return this.command(`INSERT INTO customer (name, lastName, birthDate, cpf, acountType, acountManager, agency) VALUES (?, ?, ?, ?, ?, ?, ?);`, data);
  };

  async delete(table: string, userId: number) {

    await this.getById(table, userId);

    return this.command(`DELETE FROM ${table} WHERE id = ?;`, [userId]);
  }
}
