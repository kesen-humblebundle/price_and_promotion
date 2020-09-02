const {importData} = require('../importData.js');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('publishers').del()
  //   .then(function () {
  //     // Inserts seed entries
  //     return importData();
  //   });
  importData();

};
