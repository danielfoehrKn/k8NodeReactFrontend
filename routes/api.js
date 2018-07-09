var express = require('express');
const fetch = require("node-fetch");
var router = express.Router();



const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

router.get('/', function(req, res, next) {

    fetch(API + DEFAULT_QUERY)
        .catch((response) => {
            console.log("Error:" + response)
            res.send(response)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Found size: " + data.hits.length);
            res.send(data);
        });
});

module.exports = router;
