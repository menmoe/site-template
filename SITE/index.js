const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;

app.get('*', (req, res) => {
    console.log(`${req.url}`);
    const filename = `${__dirname}/wwwroot${req.url}`
    if (exists(filename))
        res.sendFile(filename)
    else
        send404(res)
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

function exists(filename) {
    return fs.existsSync(filename);
}

function send404(res) {
    res.sendFile(`${__dirname}/404.html`);
}