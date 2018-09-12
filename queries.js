const connection = require('./knexfile')[process.env.NODE_ENV || 'development']
const database = require('knex')(connection)

module.exports = {
	list(id){
        return database('cohort').select().where('id',id)
    },
    listAll(){
        return database('cohort')
    }
}
