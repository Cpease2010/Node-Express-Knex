
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cohort', (student) => {
        student.increments('id')
    })
};

exports.down = function(knex, Promise) {
    
};
