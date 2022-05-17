import express, { Express, Request, Response } from "express";
import { Database } from "./modules/Database";
import { Customer } from "./modules/Customer";
import { userInfo } from "os";

const app: Express = express();

const db = new Database();

const customer = new Customer();

app.get("/", (req: Request, res: Response) => {

  res.send("<h1>Fintech SERVIDOR</h1>");

});

app.get("/accounts", async (req: Request, res: Response) => {

  const [ rows ] = await db.command("SELECT * FROM accounttypes;");
  
  res.json(rows);
});

app.get("/account/:id", async(req: Request, res: Response) => {
  const { id } = req.params;

  if (id) {

    const [ rows ] = await db.command(`SELECT * FROM accounttypes WHERE id = ?;`, [id]);

    res.json(rows);
  }
});

app.get("/customers", async (req: Request, res: Response) => {

  const [ rows ] = await  customer.list();
  
  res.json(rows);

});

app.get("/customer/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id) {
  
    const [ rows ] = await db.command(`SELECT * FROM customer WHERE id = ?;`, [id]);
  
    res.json(rows);
  }

});

app.get("/agencies", async (req: Request, res: Response) => {

  const [ rows ] = await db.command("SELECT * FROM agencies;");

  res.json(rows);
});

app.get("/agencie/:id", async (req: Request, res: Response) => {

  const { id } = req.params;

  if (id) {

    const [ rows ] = await db.command(`SELECT * FROM agencies WHERE id = ?;`, [id]);

    res.json(rows);
  }
});

app.get("/districts", async (req: Request, res: Response) => {

  const [ rows ] = await db.command("SELECT * FROM district;");

  res.json(rows);
});

app.get("/district/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id) {

    const [ rows ] = await db.command(`SELECT * FROM district WHERE id = ?;`, [id]);

    res.json(rows);
  }
});

app.get("/employees", async (req: Request, res: Response) => {

  const [ rows ] = await db.command("SELECT * FROM employees;");

  res.json(rows);
});

app.get("/employee/:id", async (req: Request, res: Response) => {

  const { id } = req.params;

  if (id) {

    const [ rows ] = await db.command(`SELECT * FROM employees WHERE id = ?;`, [id]);

    res.json(rows);
  }
});

app.get("/managers", async (req: Request, res: Response) => {

  const [ rows ] = await db.command("SELECT * FROM managers;");

  res.json(rows);

});

app.get("/manager/:id", async (req: Request, res: Response) => {

  const { id } = req.params;

  if (id) {

    const [ rows ] = await db.command(`SELECT * FROM managers WHERE id = ?;`, [id]);

    res.json(rows);
  }
});

app.get("/rules", async (req: Request, res: Response) => {

  const [ rows ] = await db.command("SELECT * FROM rules;");

  res.json(rows);
});

app.get("/rule/:id", async (req: Request, res: Response) => {

  const { id } = req.params;

  if (id) {

    const [ rows ] = await db.command(`SELECT * FROM rules WHERE id = ?;`, [id]);

    res.json(rows);
  }
});

app.get("/services", async (req: Request, res: Response) => {

  const [ rows ] = await db.command("SELECT * FROM services;");

  res.json(rows);
});

app.get("/service/:id", async (req: Request, res: Response) => {

  const { id } = req.params;

  if (id) {

    const [ rows ] = await db.command(`SELECT * FROM services WHERE id = ?;`, [id]);

    res.json(rows);
  }  
});

app.get("/timetable", async (req: Request, res: Response) => {

  const [ rows ] = await db.command("SELECT * FROM timetable;");

  res.json(rows);
});

app.get("/timetable/:id", async (req: Request, res: Response) => {

  const { id } = req.params;

  if (id) {

    const [ rows ] = await db.command(`SELECT * FROM timetable WHERE id = ?;`, [id]);

    res.json(rows);
  }

});

app.listen(5001, () => {
  console.log("Server ON!");
});


/*
M - Model
V - View
C - Controller

Model - Conecta com o DB e traz algum resultado(Dados) de Lá.
controller => Lida com informações que o usuário envia e pode realizar algum tipo de tratamento com essas infos. 
*/