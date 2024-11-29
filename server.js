const express = require('express');
const path = require('path');  // Import path module for serving static files
const moment = require('moment-timezone');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'public'))); // 'public' is where your frontend files will be

app.get('/api/timezone', (req, res) => {
    const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
    const timeZone = moment.tz.guess();
    console.log({ currentTime, timeZone });
    res.json({ currentTime, timeZone });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
