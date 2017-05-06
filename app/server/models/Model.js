const config = require('./config');

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: config.database_host,
    user: config.database_user,
    password: config.database_password,
    database: config.database_name
  }
});

const Model = require('objection').Model;
Model.knex(knex);

module.exports = class extends Model {

  static get modelPaths(){ return [__dirname]; }
  
};
