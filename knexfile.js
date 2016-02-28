// Update with your config settings.
'use strict';

require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: process.env.DATABASE_USER,
      database: process.env.DATABASE_NAME
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
//process = node thing
//process.env nodes way of accessing unix environment variables
//each shell has its environment vars
//dot env package reads the contents of a file (.env) and adds them to the environment vars
//heroku uses a gui to set environment vars
//node has access to those environment vars


//in dev use dotenv 
//in heroku no need