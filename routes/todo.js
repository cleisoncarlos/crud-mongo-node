
const express = require('express');
const router = express.Router();
const db = require('../db/conn')


db.connectToMongoDb(() => {
    
    router.get('/teste',  (req, res) => { 
        res.send('servidor funcionando!')
    })

    router.get('/list', async (req, res) => {
        const listDocuments = await db.findDocuments()
        res.send(listDocuments)
     
    })
        
    router.post('/add', (req, res) => {
        res.send('Add list')
    })
    
        router.patch('/update', (req, res) => {
        res.send('Update list')
    })
    
        router.delete('/delete', (req, res) => {
        res.send('Delete list')
    })

})    

module.exports = router;

