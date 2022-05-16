import { Database } from "./Database";

export class User extends Database {

  async list() {
    return this.command("SELECT * FROM users;");
  }

  async getById() {
    return await this.command(`SELECT * FROM users WHERE id = ?;` [id]);
  }
}