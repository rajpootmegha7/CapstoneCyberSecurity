const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const TechSchema = new Schema({
    name: {
        type: Object
    }
});

module.exports = mongoose.model('Technology', TechSchema,'Technology')
