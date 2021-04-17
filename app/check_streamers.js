const {
    checkIfIsPlaying,
    verifyIfPlayingWithOther
} = require("../api/riot")

const { streamers } = require("../streamers")
const { sendTuit } = require("../api/twitter")
const { logger } = require("../utils")
var moment = require('moment');

const checkStreamers = async () => {
    logger.log("info", `Estoy corriendo la fn a las: ${moment()}`)
    try {
        // Array de los que ya se encontraron, para no repetir el tweet.
        let repetidos = []; 

        // Loop sobre todos los streamers que hay
        for await (let str of streamers) {
            // Si está en el array de repetidos, significa que ya tuiteamos sobre ese match.
            if (repetidos.includes(str.name)) return

            let isPlayingWithOther = []

            // Checkeamos si está jugando actualmente.
            let isPlaying = await checkIfIsPlaying(str)
            
            // Si está jugando, verificamos si está jugando con algún otro streamer.
            if (isPlaying.success) {
                let diff = moment().diff(moment(isPlaying.data.gameStartTime), "seconds")
                if (diff <= 380) {
                    isPlayingWithOther = verifyIfPlayingWithOther(isPlaying.data)
                }
            }
            
            // Si el array es mayor a 1, quiere decir que está jugando con alguien más. Dentro de la función enviamos el tweet y también guardamos dentro del array de repetidos los usernames para que no vuelva a enviar el tuit.
            if (isPlayingWithOther.length > 1) {
                let aux = sendTweetAndReturnRepetidos(isPlayingWithOther, isPlaying.data)
                repetidos.push(...aux)
            }
        }

        return { success: true, message: "Actualizado correctamente." }

    } catch (error) {
        logger.log("error", `Error en la función checkStreamers: ${error.message}`)
        return { success: false, message: error.message }
    }
}

const sendTweetAndReturnRepetidos = (usersPlaying, dataMatch) => {
    const onlyUsernames = usersPlaying.map(element => {
        return element.name
    })
    
    const nuevoObjetoToTweet = dataMatch.participants.map( val => {
        if (onlyUsernames.includes(val.summonerName)) {
            return {
                teamId: val.teamId,
                summonerName: val.summonerName,
                twitter: streamers.reduce((acc, test) => { if (test.name == val.summonerName) return test.twitter; return acc }),
                twitch: streamers.reduce((acc, test) => { if (test.name == val.summonerName) return test.twitch; return acc })
            }
        }
        return false;
    })

    try {
        sendTuit(nuevoObjetoToTweet)
    } catch (error) {
        logger.log("error", `Error en la función sendTweetAndReturnRepetidos() tratando de enviar un tuit: ${error.message}`)
    }
   
    
    return onlyUsernames;
}

exports.default = checkStreamers