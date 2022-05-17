import { Database } from "./Database";

export class Customer extends Database {

  async list() {
    return this.command("SELECT * FROM customer;");
  }
}