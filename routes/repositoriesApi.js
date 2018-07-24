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

    // "/" in id causes problems when query in rest style to java backend
    var id = req.body.id.replace("/", "");
    console.log("Id : " + id);
    fetch(API + DEFAULT_QUERY, {
        method: 'POST',
        body: JSON.stringify({"id": "".concat(id).concat("")}),
        headers: {'Content-Type': 'application/json'},
    })
        .then(res => res.json())
        .then(json => {
            console.log("Received response" + JSON.stringify(json));
            res.status(200).send(json);
        }).catch((response) => {
        console.log("Error: " + response)
        res.status(500).send({error: response})
    });
})


router.get('/', function (req, res, next) {

    console.log("Starting to fetch all repositories");

    fetch(API + DEFAULT_QUERY)
        .then(res => res.json())
        .then(data => {
            console.log("Response from backend call: " + JSON.stringify(data));
            res.status(200).send(data);
        })
        .catch((response) => {
            console.log("Error: " + response)
            res.status(500).send({error: response})
        })
});
module.exports = router;
