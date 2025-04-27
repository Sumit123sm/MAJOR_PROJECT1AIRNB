const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose")

const userSchema=new Schema({
    email:{
        type:String,
        required:true
    }
});

userSchema.plugin(passportLocalMongoose)//username,passport,hashin,salting do automacaitly no need to build from sctrach

module.exports=mongoose.model("User",userSchema)