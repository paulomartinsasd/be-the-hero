const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); /* Diz para o aplicativo que as requisições serão no formato JSON */
app.use(routes);
/*
    Rota / Recurso
*/

/**
 * Métodos HTTP:
 * 
 * GET: Busca/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deleta uma informação no back-end 
 */

 /**
  * Tipos de Parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota apôs "?" (Filtros, paginação)
  * Route Params: parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição para criar ou alterar recursos 
  */

  /**
   * SQL: MySQL, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoSQL, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */



app.listen(3333); // Faz o aplicativo usar a porta 3333