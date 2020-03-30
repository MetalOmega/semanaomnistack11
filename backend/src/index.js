/**
 * Rota (localhost:3333)
 * Recurso (localhost:333/user)
 */

 /**
 * 
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação do back-end
 */

 /**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação...)
 * Route Params: Parâmetros utilizados para identificar resursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * Banco de Dados
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server...
  * O SQL é o formato que se utiliza para se comunicar com Banco de Dados para buscar, escrever, etc.
  * NoSQL: MongoDB, CouchDB, etc.
  */

  /**
   * Driver: SELECT * FROM users
   * Query Buinder: table('users').select('*').where()
   */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
