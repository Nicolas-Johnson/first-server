import express, { Express, Request, Response } from "express";
import { Database } from "./modules/Database";

const app: Express = express();

const db = new Database();

app.get("/", (req: Request, res: Response) => {

  res.send("<h1>Fintech SERVIDOR</h1>");

});

app.get("/customers", async (req: Request, res: Response) => {

  const connection = await db.connection();

  const [ rows ] = await db.command("SELECT * FROM customer;");
  
  res.json(rows);

});

app.get("/customer/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id) {

    const connection = await db.connection();
  
    const [ rows ] = await db.command(`SELECT * FROM customer WHERE id = ?;`, [id]);
  
    res.json(rows);
  }

});

app.listen(5001, () => {
  console.log("Server ON!");
});





















/*
import express, { Express, Request, Response } from "express";
import mysql from "mysql2/promise";
import { Database } from "./classes/Database";

const app: Express = express();

const db = new Database();

app.get("/", (req: Request, res: Response) => {

});

app.get("customers", async (req: Request, res: Response) => {

  const [rows] = await db.command("SELECT * FROM customer;");

  res.json(rows);

});

app.get("/customers/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id) {

    const [rows] = await db.command(`SELECT * FROM customers WHERE id = ?;` [id]);

    res.json(rows);
  }
})
*/