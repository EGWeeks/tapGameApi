'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments(); // id --> SERIAL PRIMARY KEY
    table.string('user_name', 3); // first_name --> VARCHAR(3)
    table.string('email').unique().notNullable(); // email --> VARCHAR(255) Unique Not Null
    table.string('password', 63); // password --> VARCHAR(63)
    table.integer('high_score');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};