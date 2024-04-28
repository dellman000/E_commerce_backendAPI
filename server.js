// const {Client}=require('pg')
const express=require('express')
const client=require('./db/Client')
const app =express();
const PORT = process.env.PORT||6789
const api_routes=require('./routes/api_routes')
//Load json


app.use(express.json())
app.use('/api',api_routes)

client.sync({force:true}).then(()=>{
    app.listen(PORT,()=>{console.log(`Server Started on localhost:`,PORT)})
})
