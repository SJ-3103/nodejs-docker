const express = require('express')
const app = express()

const PORT = 3000

app.get("/",(req,res) => {
    res.send("Hello Shubham Jain!!")
})

app.listen(PORT,() => {
    console.log("Listening on " + PORT)
})