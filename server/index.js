const express = require("express");
const cors = require('cors')
const app = express();
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename:"./sqlite.db"
    },
    useNullAsDefault: true
})

app.use(cors())
app.use(express.json())



app.get('/api/order',(req, res)=>{

    knex.select().table('orders').then((resorders)=>{
        res.json(resorders)
    }).catch(e=>console.log(e))

})

app.post('/api/order',(req, res)=>{
    const currentDate = new Date().toISOString()
    knex('orders').insert({created_at: currentDate}).then((data)=>{
        res.send(data)
    }).
    then(()=>{
        res.json('thanks for your order')
    }).
    catch(e=>console.log(e))

})


app.listen(1337, () => {
 console.log("Server running on port 1337");
});