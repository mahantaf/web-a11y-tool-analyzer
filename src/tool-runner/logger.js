const winston = require('winston');
const {log} = require("winston");

const logger = winston.createLogger({
    level: 'info', // Set the default log level to "info"
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ level, message, timestamp }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        })
    ),
    transports: [
        new winston.transports.File({
            level: 'error',
            filename: 'error.log'
        }),
        new winston.transports.File({
            level: 'info',
            filename: 'info.log'
        })
    ]
});

module.exports = logger;