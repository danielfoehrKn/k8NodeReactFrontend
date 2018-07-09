var express = require('express');
const fetch = require("node-fetch");
var router = express.Router();



const API = 'https://backend-service/';
const DEFAULT_QUERY = 'echo/api/status';

router.get('/', function(req, res, next) {

    fetch(API + DEFAULT_QUERY)
        .catch((response) => {
            console.log("Error:" + response)
            res.send(response)
        })
        .then(data => {
            console.log("Response: " + data);
            res.send(data);
        });
});

module.exports = router;
