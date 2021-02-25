const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');
const User = require("../models/usersModel");

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


/*---------- Protected Routes ----------*/

router.get('/userProfile', usersCtrl.getUserInfo);
// router.post('/userProfile', userCtrl.create);



module.exports = router;