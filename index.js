// Importamos el dotenv
require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.SERVER_PORT || 3000

const checkStreamers = require("./app/check_streamers").default

app.get('/', ({res}) => {
    res.send(`
        App escrita exclusivamente para la SoloQ Challenge. Código fuente en github.
    `)
})

app.get("/hola", async ({ res }) => {
    try {
        await checkStreamers()
        res.send("Done.")
    } catch (error) {
        res.send(error.message)
    }
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})