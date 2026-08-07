const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Bonjour depuis le serveur !");
});
app.listen(3000, () => {
    console.log("Serveur démarré sur http://localhost:3000");
});