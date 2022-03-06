
const moongoose=require('../connection');

const mySchema2=new moongoose.Schema({
    title:String,
    category:String,
    price:Number,
    thumbnail:String,
    createdAt:{type:Date,default:new Date()},//createdAt:Date//user defined
});


const productModel=moongoose.model('products',mySchema2);

module.exports={productModel};