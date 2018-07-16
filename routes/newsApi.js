var express = require('express');
const fetch = require("node-fetch");
var router = express.Router();


//read backend service port from env
const port = process.env.BACKEND_SERVICE_PORT;
//use DNS name to connect to backend service
const API = 'http://backend-service:' + port + "/";

const DEFAULT_QUERY = 'echo/api/db/news';

router.get('/', function(req, res, next) {

    console.log("Starting to fetch news");

    fetch(API + DEFAULT_QUERY)
        .then(res => res.json())
        .then(data => {
            console.log("Response from backend call: " + JSON.stringify(data));
            res.send(data);
        })
        .catch((response) => {
            console.log("Error: " + response)
            res.sendStatus(500)
        })
});

module.exports = router;
