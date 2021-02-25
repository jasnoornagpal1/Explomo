let router = require('express').Router();
let bucketlistController = require("../controllers/bucketListCtrl");

router.get('/mybucketlist', bucketlistController.getBucketList);

module.exports = router;