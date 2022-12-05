const express = require('express'); 
const mongodb=require('mongodb');
const router = express.Router();
//const db = require('../../database')
//routes
router.get('/', async (req, res) => {
    const list=await loadListCollection();
    res.send(await list.find({}).toArray())
    // const list = await db.getList()
    // res.send(list)
})


router.post('/', async (req, res) => {

    const list=await loadListCollection();
    const todo_item = req.body.item;
    if (todo_item!="") {
        await list.insertOne(
            {
                item:req.body.item
            }
        ) 
    }
    res.status(201).send()
})

router.delete('/:id', async (req, res) => {
    // const item=req.params.id
    // await db.deleteTodo(item)
    const list=await loadListCollection();
    //  console.log(req.params.id)
    await list.deleteOne(
        {
           _id:new mongodb.ObjectId(req.params.id)
        }
    ) 
    res.status(200).send()
})

async function loadListCollection(){
    const client =await mongodb.MongoClient.connect(
        'mongodb+srv://user:user@cluster0.kabptih.mongodb.net/?retryWrites=true&w=majority'
        
    )
    return client.db('todoApp').collection('list');
}

module.exports=router;