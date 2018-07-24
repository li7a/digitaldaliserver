const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'))

app.get("*", (req, res) => { res.sendFile(__dirname + "/public/index.html") });

app.listen(PORT, () => {
  console.log(`PORT=${PORT}`);
});
