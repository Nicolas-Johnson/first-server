import express, { Express, Request, Response } from "express";
import { ICustomer } from "./interfaces/ICustomer";
import { GetFromTable } from "./modules/getFromTable";

const app: Express = express();

app.use(express.urlencoded({ extended: false })); //middleawer

const getFromTable = new GetFromTable();

app.get("/", (req: Request, res: Response) => {

  res.send("<h1>Fintech SERVIDOR</h1>");

});

app.get("/accounts", async (req: Request, res: Response) => {

  const [ rows ] = await getFromTable.list("accounttypes");
  
  res.json(rows);
});

app.get("/account/:id", async(req: Request, res: Response) => {
  const { id } = req.params;

  if (id) {

    if (isNaN(Number(id))) {
      res.status(400).send("ID Invalido")
    }

    getFromTable.getById("accounttypes", Number(id))
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(404).send("Tipo de conta " + String(err.message))});
  }
});

app.get("/customers", async (req: Request, res: Response) => {

  const [ rows ] = await getFromTable.list("customer");
  
  res.json(rows);

});

app.get("/customer/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id) {

    if (isNaN(Number(id))) {
      res.status(400).send("ID Invalido");
    }
    //duvida linhas 29 a 32 no serve.ts sobre retur e se o res faz a mesma coisa.
  
    getFromTable.getById("customer", Number(id)).then((result) => {
      res.json(result);
    }).catch((err) => {
      res.status(404).send("Cliente " + String(err.message))});
  }

});
///customers
//metodo - post

app.post("/customer", async (req: Request, res: Response) => {
  // 1 - pegar dados do cliente
  const data = req.body as ICustomer;
  // 2 - validar os dados
  if (!data.name) {
    res.status(400).send("O Nome é obrigatorio");
  }
  if (!data.lastName) {
    res.status(400).send("O Sobre Nome é obrigatorio");
  }
  if (!data.cpf) {
    res.status(400).send("O cpf é obrigatorio");
  }
  if (!data.acountManager) {
    res.status(400).send("O ID do Gerente é obrigatorio");
  }
  if (!data.acountType) {
    res.status(400).send("O tipo de conta é obrigatorio");
  }
  if (!data.agency) {
    res.status(400).send("agencia é obrigatorio");
  }
  if (!data.birthDate) {
    res.status(400).send("A data de nacimento é obrigatorio");
  }
  // 3 - Enviar os dados para o banco
  const [ rows ] = await getFromTable.create(req.body);
  // 4 - Retornar para o usuario uma mensagem de sucesso ou falha
  res.json(rows);
})

app.delete("/customer/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id) {
    if (isNaN(Number(id))) {
      res.status(400).send("ID Invalido");
    }

    getFromTable.delete("customer", Number(id)).then(() => {
      res.status(200).send({ result: "Usuario excluido com sucesso!" });
    }).catch((err) => {
      res.status(404).send(String(err.message))});
  }

})

app.get("/agencies", async (req: Request, res: Response) => {

  const [ rows ] = await getFromTable.list("agencies");

  res.json(rows);
});

app.get("/agencie/:id", async (req: Request, res: Response) => {

  const { id } = req.params;

  if (id) {

    if (isNaN(Number(id))) {
      res.status(400).send("ID Invalido");
    }

    getFromTable.getById("agencies", Number(id)).then((result) => {
      res.json(result);
    }).catch((err) => {
      res.status(404).send("Agência " + String(err.message))});
  }
});

app.get("/districts", async (req: Request, res: Response) => {

  const [ rows ] = await getFromTable.list("district");

  res.json(rows);
});

app.get("/district/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  if (id) {

    if (isNaN(Number(id))) {
      res.status(400).send("ID Invalido");
    }

    getFromTable.getById("district", Number(id)).then((result) => {
      res.json(result);
    }).catch((err) => {
      res.status(404).send("Bairro " + String(err.message))});
  }
});

app.get("/employees", async (req: Request, res: Response) => {

  const [ rows ] = await getFromTable.list("employees");

  res.json(rows);
});

app.get("/employee/:id", async (req: Request, res: Response) => {

  const { id } = req.params;

  if (id) {

    if (isNaN(Number(id))) {
      res.status(400).send("ID Invalido");
    }

    getFromTable.getById("employees", Number(id)).then((result) => {
      res.json(result);
    }).catch((err) => {
      res.status(404).send("Funcionario " + String(err.message))});
  }
});

app.get("/managers", async (req: Request, res: Response) => {

  const [ rows ] = await getFromTable.list("managers");

  res.json(rows);

});

app.get("/manager/:id", async (req: Request, res: Response) => {

  const { id } = req.params;

  if (id) {

    if (isNaN(Number(id))) {
      res.status(400).send("ID Invalido");
    }

    getFromTable.getById("managers", Number(id)).then((result) => {
      res.json(result);
    }).catch((err) => {
      res.status(404).send("Gerente " + String(err.message))});
  }
});

app.get("/rules", async (req: Request, res: Response) => {

  const [ rows ] = await getFromTable.list("rules");

  res.json(rows);
});

app.get("/rule/:id", async (req: Request, res: Response) => {

  const { id } = req.params;

  if (id) {

    if (isNaN(Number(id))) {
      res.status(400).send("ID Invalido");
    }

    getFromTable.getById("rules", Number(id)).then((result) => {
      res.json(result);
    }).catch((err) => {
      res.status(404).send("Cargo " + String(err.message))});
  }
});

app.get("/services", async (req: Request, res: Response) => {

  const [ rows ] = await getFromTable.list("services");

  res.json(rows);
});

app.get("/service/:id", async (req: Request, res: Response) => {

  const { id } = req.params;

  if (id) {

    if (isNaN(Number(id))) {
      res.status(400).send("ID Invalido");
    }

    getFromTable.getById("services", Number(id)).then((result) => {
      res.json(result);
    }).catch((err) => {
      res.status(404).send("Serviço " + String(err.message))});
  }  
});

app.get("/timetable", async (req: Request, res: Response) => {

  const [ rows ] = await getFromTable.list("timetable");

  res.json(rows);
});

app.get("/timetable/:id", async (req: Request, res: Response) => {

  const { id } = req.params;

  if (id) {

    if (isNaN(Number(id))) {
      res.status(400).send("ID Invalido");
    }

    getFromTable.getById("timetable", Number(id)).then((result) => {
      res.json(result);
    }).catch((err) => {
      res.status(404).send("Turno " + String(err.message))});
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