const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    contact : {
        type : Number,
        required : true
    },
    company : {
        type : String,
        required : true
    },
    history : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    stage : {
        type : String,
        required : true
    },
    target : {
        type : String,
        required : true
    },
    plan : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

// mongoose.model(modelName, schema)
const User = mongoose.model('user', UserSchema);
// User.createIndexes();    //we created indexes on email so that duplicate emails aaye to vo handle kr paaye but ye kaam hum ab auth m hi kr lenge
module.exports = User;