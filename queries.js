const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {
	listAll(id){
        return database('cohort').select().where('id',id)
    }
}
