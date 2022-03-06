import { Button, Container, Paper, TextField } from "@mui/material";
import { Formik } from "formik";
import "./addProduct.css";
import api_config from "../config";
import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  
const url = api_config.api_url;

const [thumbnail,setThumbnail]=useState("");


// add product form/

const  uploadThumbnail=(e)=>{
console.log("file selceted");

let file=e.target.files[0];


console.log(file.name);

setThumbnail(file.name);

let form=new FormData();
form.append("myfile",file);

fetch(url+"/util/uploadfile",{method:"POST",body:form}).then((res)=>{
  
  console.log(res.status);

});

};


  const productForm = {
    title: "",
    category: "",
    price: 0,
    thumbnail:"",
  };

  const submitProduct = (values) => {
    
    values.thumbnail=thumbnail;
    
    console.log(values);
    fetch(url + "/product/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    }).then((resp) => {
      console.log(resp.status);
Swal.fire({
  icon:'success',
  title:'Success',
  text:'Product added to list',
});


    });
  };

  return (
    <Paper>
      <Container style={{ height: "100vh" }}>
        <header></header>

        <Formik initialValues={productForm} onSubmit={submitProduct}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              
              {/* <TextField
                className="mt-5 w-100"
                label="Thumbnail Link"
                variant="outlined"
                color="secondary"
                id="thumbnail"
                value={values.thumbnail}
                onChange={handleChange}
              /> */}

              <label>Upload Thumbnail</label>
              <input type="file" onChange={uploadThumbnail} className="form-control"></input>

              <TextField
                className="mt-3 w-100"
                label="Category"
                variant="outlined"
                color="secondary"
                id="category"
                value={values.category}
                onChange={handleChange}
              />

              <TextField
                className="mt-3 w-100"
                label="Price"
                type="number"
                variant="outlined"
                color="secondary"
                id="price"
                value={values.price}
                onChange={handleChange}
              />

              <TextField
                className="mt-5 w-100"
                label="Title"
                variant="outlined"
                color="secondary"
                id="title"
                value={values.title}
                onChange={handleChange}
              />

              <Button
                variant="contained"
                type="submit"
                className="mt-5"
                color="secondary"
              >
                Add Product
              </Button>
            </form>
          )}
        </Formik>
      </Container>
    </Paper>
  );
};

export default AddProduct;
