const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'uploads'),{
    maxAge : '1d'
}))
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.listen(PORT ,() => {
    console.log(`server is listening at ${PORT}`)
})
