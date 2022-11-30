const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const AutoSchema = new Schema({
    name: {
        type: String
    },
    data: {
        type: Object
    }
});

module.exports = mongoose.model('Automotive', AutoSchema,'Automotive')