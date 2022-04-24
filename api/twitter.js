const Twitter = require('twitter');
const { logger } = require("../utils")

const twitterClient = new Twitter({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_SECRET_KEY,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

const sendTuit = (data) => {
    let team1 = []
    let team2 = []

    data.forEach(player => {
        if (!player) return;

        if (player.teamId == 100) team1.push(player)
        if (player.teamId == 200) team2.push(player)
    })

    let texto = createTextForTweet(team1, team2)
    if (texto.length > 280) {
        texto = createTextForTweet(team1, team2, true)
    }

    try {
        twitterClient
            .post(
                'statuses/update',
                { status: texto, card_uri: 'tombstone://card' },
                function(error) {
                    if(error) {
                        console.log("error", error)
                        logger.log("error", `Función sendTuit - ${error.message}`)
                    } else {
                        logger.log("info", `Función sendTuit - Tuit enviado correctamente.`)
                    }
                });
        return true;
    } catch (error) {
        logger.log("error", `Error en función sendTuit: ${error.message}`)
    }
}

const createTextForTweet = (team1, team2, shortVersion = false) => {
    let text = "¡TENEMOS PARTIDA del @soloqchallenge! \n\n"

    // Casos de partida.
    // Solo equipo 1 o equipo 2 tiene players del torneo.
    if ((team1.length > 0 && team2.length == 0) || (team2.length > 0 && team1.length == 0)) {
        logger.log("info", `Función sendTuit - Solo un equipo tiene participantes.`)

        text += "Se han encontrado en el mismo equipo: \n"
        let teamAux = (team1.length > 0) ? team1 : team2

        logger.log("info", `Función sendTuit - ${JSON.stringify(teamAux)}`)
        
        if (!shortVersion) {
            teamAux.forEach(player => {
                text += `- @${player.twitter} \n`
            })
            text += `\n Puedes mirar la partida en: \n`
            teamAux.forEach(player => {
                text += `- https://www.twitch.tv/${player.twitch} \n`
            })
        }
    }
    // Ambos tienen players del torneo.
    else if ((team1.length > 0 && team2.length > 0)) {
        logger.log("info", `Función sendTuit - Los dos equipos tienen participantes.`)

        text += "Se han encontrado como rivales: \n"

        team1.forEach(player => {
            text += `- @${player.twitter} \n`
        })
        text += "\n VS \n \n"
        team2.forEach(player => {
            text += `- @${player.twitter} \n`
        })

        let teamAux = team1.concat(team2)

        logger.log("info", `Función sendTuit - ${JSON.stringify(teamAux)}`)
        
        if (!shortVersion) {
            text += `\n Puedes mirar la partida en: \n`
            teamAux.forEach(player => {
                text += `- https://www.twitch.tv/${player.twitch} \n`
            })
        }
    }

    if (shortVersion) {
        text += "\n No pongo los links de twitch xq el tweet se hace largo, sorry :("
    }
    
    return text
}

module.exports = {
    sendTuit
}