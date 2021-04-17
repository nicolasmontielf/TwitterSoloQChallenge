const winston = require('winston');

const response = (success, data) => {
    return {
        success: success,
        data: data
    }
}

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({
          filename: 'logs.log'
        }),
    ]
})


module.exports = {
    response,
    logger
}