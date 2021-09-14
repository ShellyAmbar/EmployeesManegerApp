const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
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
    phone :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },

}, {timestamps:true})
const User = mongoose.model("UsersData", UserSchema);
module.exports = User;