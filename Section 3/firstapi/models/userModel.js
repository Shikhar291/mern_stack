
const moongoose=require('../connection');

const mySchema=new moongoose.Schema({
    name:String,
    username:String,
    password:String,
    age:Number,
    createdAt:{type:Date,default:new Date()},//createdAt:Date//user defined
});


const myModel=moongoose.model('users',mySchema);

module.exports={myModel};