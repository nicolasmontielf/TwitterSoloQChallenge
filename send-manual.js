require('dotenv').config()
const { sendTuit } = require("./api/twitter")

const data = JSON.parse('[{\"teamId\":100,\"summonerName\":\"abby me arruinÃ³\",\"twitter\":\"ffaka_\",\"twitch\":\"ffaka\"},{\"teamId\":200,\"summonerName\":\"EL GRÃFICAS\",\"twitter\":\"Adri_Dalvenger\",\"twitch\":\"dalvenger\"}]');

try {
    sendTuit(data)
} catch (e)  {
    console.log(e)
}