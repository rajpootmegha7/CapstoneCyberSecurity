const router = require('express').Router();
const authorization = require('../middleware/authorization');
const _db_client = require('../db')
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

module.exports = router;