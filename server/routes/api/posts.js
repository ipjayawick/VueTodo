const express = require('express'); 
const router = express.Router();

// // Handlebars Middleware
// app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// // Body Parser Middleware
// app.use(bodyParser.urlencoded({ extended: false }));

// // Set static folder
// app.use(express.static(path.join(__dirname, 'public')));

//routes
router.get('/', async (req, res) => {
    // const list = await db.getList()
    // res.render('index', { items: list })
    res.send("hello")
})

// app.post('/add', async (req, res) => {
//     let { todo_item } = req.body;
//     if (todo_item!="") {
//         const result = await db.createTodo(todo_item)
//     }
//     //console.log(req.body)
//     res.redirect('/')
// })

// app.post('/delete/:id', async (req, res) => {
//     const item=req.params.id
//     const result = await db.deleteTodo(item)
//     //console.log(req.params)
//     res.redirect('/')
// })

module.exports=router;