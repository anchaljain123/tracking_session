const mongoose = require('mongoose');

const userScheme = new  mongoose.Schema({
    uname:{
        type:String,
        required:true,
    },
    pwd:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
});

module.exports = mongoose.model('User',userScheme);