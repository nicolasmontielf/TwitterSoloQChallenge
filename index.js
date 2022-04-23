// Importamos el dotenv
require('dotenv').config()
const cron = require('node-cron');
const checkStreamers = require("./app/check_streamers").default

cron.schedule('* * * * *', async function() {
    try {
        await checkStreamers()
        console.log("Done.")
    } catch (error) {
        console.error("Error", error.message)
    }
});