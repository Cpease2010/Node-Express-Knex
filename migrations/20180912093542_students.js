
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cohort', (student) => {
        student.increments('id')
        student.string('firstName')
        student.string('lastName')
        student.string('hometown')
        student.string('prevOccupation')
        student.integer('favoriteNum')
        student.string('pasttime')
    })
};

exports.down = function(knex, Promise) {

};
