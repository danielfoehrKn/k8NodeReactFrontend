var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // read environment variables
  //   System.getenv("MY_POD_IP") + " | POD Name: " + System.getenv("MY_POD_NAME") + " | Pod Namespace: " + System.getenv("MY_POD_NAMESPACE") + " | Node Name : " + System.getenv("MY_NODE_NAME") + " | Pod Service Account: " + System.getenv("MY_POD_SERVICE_ACCOUNT") ;

  res.render('index', { title: 'Demo News Frontend', nodeName: process.env.MY_NODE_NAME, podName: process.env.MY_POD_NAME, podIp: process.env.MY_POD_IP, podNameSpace: process.env.MY_POD_NAMESPACE, podServiceAccount: process.env.MY_POD_SERVICE_ACCOUNT });
});

module.exports = router;
