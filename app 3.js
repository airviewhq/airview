const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.send("Welcome to Airview!");
});

app.listen(port, function() {
    console.log(`Airview is listening on port ${port}`);
});