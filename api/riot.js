const axios = require('axios').default;
const { response } = require('../utils')
const { streamersIds } = require("../streamers")
const { streamers: allStreamers } = require("../streamers")
const { logger } = require("../utils")

// Creamos la instancia de axios
const client = axios.create({
    baseURL: "https://euw1.api.riotgames.com",
    headers: {
        "X-Riot-Token": process.env.RIOT_KEY
    }
})

// Función para verificar si el usuario está en partida.
const checkIfIsPlaying = async (streamer) => {
    try {
        const { status, data: isPlaying } = await client.get(`/lol/spectator/v4/active-games/by-summoner/${streamer.id}`)

        if (status != 200) {
            return response(false, isPlaying.message)
        }

        return response(true, isPlaying)
    } catch (error) {
        if (error.response) {
            if (error.response.data.status.status_code != 404) {
                logger.log("info", `Funcion checkIfIsPlaying() en el user ${streamer.twitch}: ${error.response.data.status.message}`)
            }
        }
        
        return response(false, error.message)
    }
}

// Verificar si es que está jugando con otro streamer.
const verifyIfPlayingWithOther = (matchData) => {
    let isPlayingWith = [];

    for (let participant of matchData.participants) {
        if (streamersIds.includes(participant.summonerId)) {
            let dataForThatStreamer = getDataForStreamer(participant.summonerId)
            isPlayingWith.push(dataForThatStreamer)
        }
    }

    return isPlayingWith;
}

// Sacamos la data completa de acuerdo al username.
const getDataForStreamer = (id) => {
    return allStreamers.find(element => {
        if (element.id == id) {
            return element;
        }
    })
}

module.exports = {
    checkIfIsPlaying,
    verifyIfPlayingWithOther
}