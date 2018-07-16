var express = require('express');
const fetch = require("node-fetch");
var router = express.Router();


//read backend service port from env
const port = process.env.BACKEND_SERVICE_PORT;
//use DNS name to connect to backend service
const API = 'http://backend-service:' + port + "/";

const DEFAULT_QUERY = 'echo/api/db/repositories';

router.post('/', function (req, res) {
    console.log("Registering Github Repository : " + JSON.stringify(req.body));
    console.log("Id : " + req.body.id.toString());

    var id = req.body.id;
    var body = { id: id };
    fetch(API + DEFAULT_QUERY, {
        method: 'POST',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.json())
        .then(json => {
            console.log("Received response" + JSON.stringify(json));
            res.send(data);
        }).catch((response) => {
        console.log("Error: " + response)
        // res.status(500).send({ error: response })
        res.status(200).send(body)
    });
})


router.get('/', function(req, res, next) {

    console.log("Starting to fetch all repositories");

    fetch(API + DEFAULT_QUERY)
        .then(res => res.json())
        .then(data => {
            console.log("Response from backend call: " + JSON.stringify(data));
            res.send(data);
        })
        .catch((response) => {
            console.log("Error: " + response)
            res.status(500).send({ error: response })
        })
});
module.exports = router;
