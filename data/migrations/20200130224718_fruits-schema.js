
exports.up = function(knex) {
  return knex.schema.createTable('fruits', tbl => {
      tbl.increments(); //auto intger id field 
      tbl.text('name', 128).unique().notNullable(); //name field and not null 
      tbl.decimal('avgWeightOz'); 
      tbl.boolean('delicous');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('fruits');
};
