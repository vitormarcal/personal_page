const express = require("express");
const app = express();

const port = 8080
const path = __dirname + '/views/';

app.use(express.static(path));

app.listen(port, () => {
    console.log(`app listening on port ${port}!`)
});