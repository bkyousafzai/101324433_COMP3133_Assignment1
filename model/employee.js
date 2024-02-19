
const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({

    first_name:{
        type:String,
        required: true,
        max:100
    },

    last_name:{
        type:String,
        required: true,
        max:50
    },

    email:{
        type:String,
        required: true,
        unique: true,
         
    },

    salary:{
        type:Number,
        required: true
    },

    gender:{
        type: String,
        emum :['Male','Female','Other' ]

    }
})

module.exports = mongoose.model('employee', employeeSchema);