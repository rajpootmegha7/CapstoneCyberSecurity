/*
@Desc : This file was created to use it later while creating other API's for technology and Manufacturing.
*/

const router = require('express').Router();
const authorization = require('../middleware/authorization');
const techSchema = require('../models/technology.js');
const autoSchema = require('../models/automotive.js');

router.get('/technology', authorization, async(req, res) => {
    console.log('In technology')
    const records = await techSchema.find({})
    console.log(records)
    res.json({
        records
    })
})

router.get('/automotive', authorization, async(req, res) => {
    console.log('In Automotive')
    const records = await autoSchema.find({})
    console.log(records)
    res.json({
        records
    })
})

router.post('/getSupplyData', async (req, res, next) => {
    console.log("/Get Data");
    console.log(req.body);

    var new_data = []

    if (req.body.supply_type === "automotive") {
        autoSchema.find({"name": req.body.suppy_name}, async function(err, data){
            console.log(data[0])
            res.json(data[0])
        })
    }
    else if (req.body.supply_type === "technology"){
        techSchema.find({"name": req.body.suppy_name}, async function(err, data){
            console.log(data[0])
            res.json(data[0])
        })
    }
  
    // const user = await userSchema.findOne({email: req.body.email});
    // if (!user) return res.status(401).send('Email Not Found');
    // console.log(user.password);
  
    // const validPass = await bcrypt.compare(req.body.password, user.password);
    // if (!validPass) return res.status(401).send('Invalid Password');
    // // sending back the auth token which will expire after 3hrs
    // const token  = jwt.sign({_id: user._id}, process.env.JWT_SECRET,  {expiresIn: '3hr'});
    // res.header('auth-token', token).status(200).send({'token': token});
  
  });

module.exports = router;