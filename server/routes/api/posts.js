const express = require('express'); 
const router = express.Router();
const db = require('../../database')
// // Handlebars Middleware
// app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// // Body Parser Middleware
// app.use(bodyParser.urlencoded({ extended: false }));

// // Set static folder
// app.use(express.static(path.join(__dirname, 'public')));

//routes
router.get('/', async (req, res) => {
    const list = await db.getList()
    res.send(list)
})


router.post('/', async (req, res) => {
    const todo_item = req.body.item;
    if (todo_item!="") {
        const result = await db.createTodo(todo_item)
    }
})

router.delete('/:id', async (req, res) => {
    const item=req.params.id
    const result = await db.deleteTodo(item)
})

module.exports=router;