const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const AutoSchema = new Schema({
    name: {
        type: Object
    }
});

module.exports = mongoose.model('Automotive', AutoSchema,'Automotive')