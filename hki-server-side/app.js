const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;
app.use(cors());

app.get("/", (req, res) => {
    res.send("welcome")
});

app.get("/v2/places", (request, response) => {
    response.header({"Access-Control-Allow-Origin":"*"});
    axios
    .get("https://open-api.myhelsinki.fi/v2/places/")
    .then((res) => {
        response.send(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
})

app.listen(port, () => {
    console.log(`Now listening to port ${port}`)
});
