const User = require('../models/usersModel');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

async function signup(req, res) {
    const user = new User(req.body);
    try {
      await user.save();
      const token = createJWT(user);
      console.log(token)
      res.json({ token });
    } catch (err) {
      // Probably a duplicate email
      res.status(400).json(err);
    }
  }

async function login(req, res) {
    try {
      const user = await User.findOne({email: req.body.email});
      if (!user) return res.status(401).json({err: 'bad credentials'});
      user.comparePassword(req.body.pw, (err, isMatch) => {
        if (isMatch) {
          const token = createJWT(user);
          res.json({token});
        } else {
          return res.status(401).json({err: 'bad credentials'});
        }
      });
    } catch (err) {
      return res.status(400).json(err);
    }
  }
  
  async function getUserInfo(req,res){
    try{
      res.json(req.user)
        // let userProfile = await User.find({});
        // console.log()
        // res.send({cities: allCities})
    } catch (err){
        res.send({message: err.message, response: false})
    }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  );
}

module.exports = {
    signup,
    login,
    getUserInfo
}