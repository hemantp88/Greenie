const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    email:String,
    username:String,
    mobile:String,
    password:String,
});


module.exports = mongoose.model('Users', User); 