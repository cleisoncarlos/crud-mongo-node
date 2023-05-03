
const express = require('express');
const router = express.Router();
const db = require('../db/conn');
const { ObjectId } = require('mongodb');

//middleware para passar os Ids corretamente no mongo via json na edição de post
const checkBodyId = (req, res, next) => {
    if ('_id' in req.body){
        req.body._id = new ObjectId(req.body._id)
    }
    next()
}
//----------------------------------------------------

    router.get('/list', async (req, res) => {
        const result = await db.findDocuments()
        res.send(result)     
    })       
        
    router.post('/add', async (req, res) => {
        const result = await db.insertDocuments(req.body)
        res.send(result)       
    })  
 
    router.patch('/update', checkBodyId, async (req, res) => {
        const result = await db.updateDocument(req.body)
        res.send(result)
        
    })    
        router.delete('/delete', (req, res) => {
        res.send('Delete list')
    })
 
module.exports = router;

