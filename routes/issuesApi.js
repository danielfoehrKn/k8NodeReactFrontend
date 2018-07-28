var express = require('express');
const fetch = require("node-fetch");
var router = express.Router();
var app = require('../app.js');

// Emit event to client when the GithubBot post the notification
router.post('/', function (req, res) {

    if (app.io == null){
        let message = "Cannot handle request because socket is null";
        console.log(message);
        res.status(500).send({ error: message })
        return;
    } else if (app.io.sockets == null){
        let message = "Cannot handle request because there are no open sockets to clients";
        console.log(message);
        res.status(500).send({ error: message })
        return;
    }

    let id = req.body.id.toString();
    let label = req.body.label.toString();
    let action = req.body.action.toString();

    console.log("Issue body : " + JSON.stringify(req.body) + " Github ID: " + id + " label: " + label);

    var connectedClients = Object.keys(app.io.clients().connected);
    console.log("Emmitting issue event to all connected clients:  " + connectedClients.length)

    app.io.sockets.emit('issueCreated', {"id" : id, "label" : label, "action" : action});
    res.sendStatus(200)
})
module.exports = router;
