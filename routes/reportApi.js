var express = require('express');
const fetch = require("node-fetch");
var router = express.Router();


//read backend service port from env
const port = process.env.ANALYZER_SERVICE_PORT;
//use DNS name to connect to backend service
const API = 'http://goanalyzer-service:' + port + "/";

const DEFAULT_QUERY = 'analyzer/report';

router.get('/', function (req, res, next) {

    console.log("Starting to fetch report from goanalyzer");

    fetch(API + DEFAULT_QUERY)
        .then(res => res.json())
        .then(data => {
            console.log("Response from goanaylzer call: " + JSON.stringify(data));
            res.status(200).send(data);
        })
        .catch((response) => {
            console.log("Error: " + response)

            // var data = [
            //     {
            //         "_id": {
            //             "action": "labeled",
            //             "label": "enhancement",
            //             "repo": "danielfoehrKnk8Resources"
            //         },
            //         "count": 1
            //     },
            //     {
            //         "_id": {
            //             "action": "labeled",
            //             "label": "duplicate",
            //             "repo": "danielfoehrKnk8Resources"
            //         },
            //         "count": 2
            //     },
            //     {
            //         "_id": {
            //             "action": "labeled",
            //             "label": "",
            //             "repo": "danielfoehrKnk8Resources"
            //         },
            //         "count": 3
            //     },
            //     {
            //         "_id": {
            //             "action": "opened",
            //             "label": "",
            //             "repo": "danielfoehrKnk8Resources"
            //         },
            //         "count": 5
            //     },
            //     {
            //         "_id": {
            //             "action": "labeled",
            //             "label": "bug",
            //             "repo": "danielfoehrKnk8Resources"
            //         },
            //         "count": 3
            //     },
            //     {
            //         "_id": {
            //             "action": "closed",
            //             "label": "",
            //             "repo": "danielfoehrKn/k8Resources"
            //         },
            //         "count": 1
            //     },
            //     {
            //         "_id": {
            //             "action": "reopened",
            //             "label": "",
            //             "repo": "danielfoehrKn/k8Resources"
            //         },
            //         "count": 1
            //     },
            //     {
            //         "_id": {
            //             "action": "opened",
            //             "label": "",
            //             "repo": "danielfoehrKn/k8Resources"
            //         },
            //         "count": 2
            //     },
            //     {
            //         "_id": {
            //             "action": "labeled",
            //             "label": "",
            //             "repo": "danielfoehrKn/k8Resources"
            //         },
            //         "count": 2
            //     }
            // ];



            // res.status(200).send(data)
            res.status(500).send({error: response})
        })
});
module.exports = router;
