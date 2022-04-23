// Importamos el dotenv
require('dotenv').config()
const cron = require('node-cron');
const checkStreamers = require("./app/check_streamers").default
const { logger } = require("../utils")

cron.schedule('*/4 * * * *', async function() {
    try {
        await checkStreamers()
        logger.info("Done.")
    } catch (error) {
        logger.error("Error", error.message)
    }
});