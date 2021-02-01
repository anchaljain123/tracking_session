const mongoose = require('mongoose');

const resultSchema = new  mongoose.Schema({
    results :{
        type: Array
    }
});

module.exports = mongoose.model('Result', resultSchema);