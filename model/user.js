
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    
    username :{
        type: String,
        required: true,            
        primaryKey: true,
        max: 100,
    },

    email:{
        type: String, 
        required:true,
        max:100
    },
    
    password:{
        type:String,
        required:true,
        unique: true
    }
});

module.exports = mongoose.model('users', userSchema);