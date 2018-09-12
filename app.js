const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = process.env.PORT || 3000
const listener = () => console.log(`Listening to port ${port}!`)
const queries = require('./queries')

app.use(morgan('dev'))

app.disable('x-powered-by')

app.use(bodyParser.json())

app.get('/:id', (req,res,next) => {
    const pickOne = req.params.id
    queries.listAll(pickOne).then(students => res.json({students}))
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({error:err})
})

app.use((req,res,next)=>{
    res.status(404).json({error: {message: 'Not Found!'}})
})

app.listen(port,listener)
