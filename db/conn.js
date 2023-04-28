
const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
// Database Name
const dbName = 'teste2';
const db = client.db(dbName);
const collection = db.collection('users');

async function connectToMongoDb() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Conectado com sucesso ao MongoDB');
  // the following code examples can be pasted here...  
  // return 'done.';
}

const findDocuments = async () => { 
    const findResult = await collection.find({}).toArray();
    console.log('Documentos encontrados =>', findResult);   
   // return findResult     
}
//findDocuments()

const insertDocuments = async () => {
    const insertResult = await collection.insertOne([{ name: 'Pessoa', email: 'teste@teste.com' }]);
    console.log('Documento inserido =>', insertResult);
}
//insertDocuments()

const updateDocument = async (document) => {
                                                    // query que identifica => set com a atualização 
    const updateResult = await collection.updateOne({ _id: document._id }, { $set: document });
    console.log('Documento atualizado =>', updateResult);
}
//updateDocument()

const deleteDocument = async (document) => {
    const deleteResult = await collection.deleteOne({ _id: document._id });
    console.log('Deleted documents =>', deleteResult);
}
//deleteDocument();

//connectToMongoDb()
//  .then(console.log)
// .catch(console.error)
//.finally(() => client.close());

module.exports = { connectToMongoDb, findDocuments, insertDocuments, updateDocument, deleteDocument }
