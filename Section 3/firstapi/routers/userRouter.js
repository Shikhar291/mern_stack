const { request } = require("express");
const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const Model = require("../models/userModel").myModel;

router.post("/add", (req, resp) => {
  Model.findOne({ username:req.body.username }).then((data) => {
    if (data) 
    {
      resp.status(409).json({ status: "fail" });
    } 
    else 
    {
      new Model(req.body).save().then((data) => {
          console.log(" user data saved");
          resp.status(200).json(data);
        }).catch((err) => {
          console.log(err);
          resp.status(500).json(err);
        });
    }
  
});

  console.log("/user/add");
  console.log(req.body);
});


router.get("/getall", (request, response) => {
  console.log("/user/add");
  Model.find()
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

router.post("/checklogin", (request, response) => {
  let formdata = request.body;

  Model.findOne({ username: formdata.username })
    .then((data) => {
      if (data) {
        if (data.password === formdata.password) {
          console.log("login Successful");
          response.status(200).json({ status: "success" });
        } else {
          console.log("invalid credentials");
          response.status(300).json({ status: "fail" });
        }
      } else {
        console.log("invalid credentials");
        response.status(300).json({ status: "fail" });
      }
    })
    .catch((err) => {
      console.log(err);
      response.status(500).json(err);
    });
});

module.exports = { router };
