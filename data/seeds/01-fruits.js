
exports.seed = function(knex, Promise) {
  return knex('fruits').truncate() // truncate = remove all exisiting records in that table 
    .then(function () {
      // add data into insert
      return knex('fruits').insert([
        { name: 'dragon fruit', avgWeightOz: 16.7, delicious: true, color: 'red' },
        { name: 'durian', avgWeightOz: 52.9, delicious: false, color: 'yellow' },
        { name: 'rambutan', avgWeightOz: 1.1, delicious: true, color: 'pink'},
        { name: 'lingonberry', avgWeightOz: 0.01, delicious: true,color: 'red' },
        { name: 'golden gooseberries', avgWeightOz: 0.02, delicious: false, color: 'yellow' }
      ]);
    });
};