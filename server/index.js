require('dotenv').config()
const express = require('express')
const app = express()
const errorHandler = require('./middlewares/errorHandles');
const notFound=require('./middlewares/notFound')
const connection=require('./db')
const cors=require('cors')

const userRouter=require('./routes/user.route')
app.use(cors())
connection()

app.use(express.urlencoded({extended:true }))
app.use(express.json())
app.use('/',userRouter);
app.use(notFound)
app.use(errorHandler)

const PORT=process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}` )
})


