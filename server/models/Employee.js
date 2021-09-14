const mongoose = require('mongoose');
const EmplyeeSchema = new mongoose.Schema({
    firstName :{
        type:String,
        required:true
    },
    lastName :{
        type:String,
        required:true
    },
    photoUrl :{
        type:String,
        required:false
    },
    email :{
        type:String,
        required:true
    },
    phone :{
        type:String,
        required:true
    },
    address :{
        type:String,
        required:true
    },
    roll :{
        type:String,
        required:true
    },
    startDate :{
        type:String,
        required:true
    },

})
const Emplyee = mongoose.model("EmployeesData", EmplyeeSchema);
module.exports = Emplyee;