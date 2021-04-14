const Twitter = require('twitter');
const { streamers } = require("../streamers")

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
    
    const texto = createTextForTweet(team1, team2)

    try {
        twitterClient
            .post(
                'statuses/update',
                { status: texto, card_uri: 'tombstone://card' },
                function(error, tweet) {
                    if(error) throw error;
                    console.log(tweet)
                    console.log("Tweet enviado.")
                });
        return true;
    } catch (error) {
        console.error(error.message)
    }
}

const createTextForTweet = (team1, team2) => {
    let text = "¡TENEMOS PARTIDA del @soloqchallenge! \n\n"

    // Casos de partida.
    // Solo equipo 1 o equipo 2 tiene players del torneo.
    if ((team1.length > 0 && team2.length == 0) || (team2.length > 0 && team1.length == 0)) {
        text += "Se han encontrado en el mismo equipo: \n"
        let teamAux = (team1.length > 0) ? team1 : team2

        teamAux.forEach(player => {
            text += `- ${player.twitter} \n`
        })
        text += `\n Puedes mirar la partida en: \n`
        teamAux.forEach(player => {
            text += `- ${player.twitch} \n`
        })
    }
    // Ambos tienen players del torneo.
    else if ((team1.length > 0 && team2.length > 0)) {
        text += "Se han encontrado como rivales: \n"

        team1.forEach(player => {
            text += `- ${player.twitter} \n`
        })
        text += "\n VS \n \n"
        team2.forEach(player => {
            text += `- ${player.twitter} \n`
        })

        text += `\n Puedes mirar la partida en: \n`
        let teamAux = team1.concat(team2)
        teamAux.forEach(player => {
            text += `- ${player.twitch} \n`
        })
    }
    console.log(text)
    return text
}

module.exports = {
    sendTuit
}