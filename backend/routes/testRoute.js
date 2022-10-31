const router = require('express').Router();
const authorization = require('../middleware/authorization');

router.get('/industry', authorization, (req, res) => {
    console.log('In Industry')
    res.json({
        industry_details: {
            title: 'ABC',
            desc: 'Test Description'
        }
    })
})

module.exports = router;