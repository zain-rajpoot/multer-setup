const express = require('express')
const cors = require('cors')
const Database = require('./database/Database.js')
const Router = require('./router/Router.js')
const app = express()

Database();
app.use(cors({ origin: "*" }))
app.use('/uploads', express.static('uploads'));
app.use("/", Router)
app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})