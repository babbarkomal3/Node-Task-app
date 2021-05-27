const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user') //defining routes
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter) //register router which is in new file
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Server is up on port '+ port)
 })