'use strict';

require('dotenv').load();

var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
var knex = require('knex')(config);

module.exports = function(){
  return function(tableName){
    return function(){
      return knex(tableName);
    };
  };
}();

//// HOW TO USE
/*
    var TableConstructor = require('<Path of this files location>'),
      TableQuery = require(<Name of table>);
*/

//// DATABASE SCHEMA
/*
    Insert Database Schema Here (For Reference)
*/