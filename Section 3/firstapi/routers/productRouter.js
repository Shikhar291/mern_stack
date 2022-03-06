const express=require('express');

const router=express.Router();

const {productModel}=require('../models/productsModel');



router.post('/add',(request,response)=>{
    
    console.log(request.body);

    new productModel(request.body).save().then((data)=>{
       
        console.log('data saved successfully');
        response.status(200).json({status:'success'})
    }).catch((err)=>{
        console.log(err);
        response.status(500).json({status:'fail'});
    });

});




router.get("/getall", (request, response) => {
    console.log("/product/getall");
    productModel.find()
      .then((data) => {
        console.log(data);
        console.log("data fetched");
        response.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        response.status(500).json(err);
      });
  });



  router.delete("/delete/:id", (request, response) => {
    
    productModel.findByIdAndDelete(request.params.id)
      .then((data) => {
        console.log(data);
        console.log("data deleted");
        response.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        response.status(500).json(err);
      });
  });



module.exports={router};
