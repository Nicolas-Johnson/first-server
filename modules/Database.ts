import mysql from "mysql2/promise";
// import mysql from "mysql2/primise";
export class Database {
// export class Database {
  
  connection() {
    return mysql.createConnection({
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'Nicol@s301295*',
      database: 'fintech',
    });
  }

  async command(script: string, params?: any[]) {

    const connection = await this.connection();

    return connection.query(script, params);

  }
}
