// This code encrypts the password sent by user while registration and stores
// user info into the DB
// and validates the password entered by user from login with decrypted 
// password from DB
// eslint-disable-next-line new-cap
const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const jwt = require('jsonwebtoken');
const validInfo = require('../middleware/validInfo');
const authorization = require('../middleware/authorization');
const userSchema = require('../models/userdetails.js');

require('dotenv').config();

// This code inserts the user info to DB and encrypts the password
router.post('/register', validInfo, async (req, res) => {
  try {
    // eslint-disable-next-line max-len
    const {username, email, password} = req.body;

    const _find_user_check = userSchema.findOne({username: username}, async function(err, data){
      if(err) console.log("connection failure")
      if(data){
        res.status(403).send("User Already Exists!!");
      }
      else {
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        
        const bcryptPassword = await bcrypt.hash(password, salt);
        console.log(bcryptPassword);

        const user = new userSchema({
          username: username,
          email: email,
          password: bcryptPassword
        });

        const savedUser = await user.save();
        res.send(savedUser);
      }
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  };
});

router.post('/login', async (req, res) => {
  console.log("/Login Post");
  console.log(req.body);

  const user = await userSchema.findOne({email: req.body.email});
  if (!user) return res.status(400).send('Email Not Found');
  console.log(user.password);

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send('Invalid Password');

  const token  = jwt.sign({_id: user._id}, process.env.JWT_SECRET,  {expiresIn: '1hr'});
  res.header('auth-token', token).send(token);

});

// this code verifies if user is logged in
router.get('/is-verify', authorization, async (req, res) =>{
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  };
});

module.exports = router;
