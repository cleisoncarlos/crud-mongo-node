const express = require('express')
const app = express()

//const conn = require('./db/conn')

const todoRoute = require('./routes/todo')

// read body
app.use( express.urlencoded({extended: true}))
app.use(express.json())


app.use('/todo', todoRoute)



app.listen(3000, ()=> {
    console.log('Servidor levantado na porta 3000!')
})
