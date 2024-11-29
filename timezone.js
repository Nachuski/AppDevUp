const moment = require('moment-timezone');

const getCurrentTimeZone = () => {
    const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const timeZone = moment.tz.guess(); // Detects the local time zone
    return { currentTime, timeZone };
};

module.exports = getCurrentTimeZone;
