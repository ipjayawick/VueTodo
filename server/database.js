const mysql=require('mysql2')
const dotenv=require('dotenv')

dotenv.config()

const pool=mysql.createPool({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
}).promise()

async function getList(){
    const [rows]=await pool.query("SELECT * FROM list")
    return rows
}
async function createTodo(item){
    const result=await pool.query(`INSERT INTO list VALUES(?)`,[item])
    return result
}
async function deleteTodo(item){
    const result=await pool.query(`DELETE FROM list WHERE item=?`,[item])
    return result
}

module.exports={createTodo,getList,deleteTodo}