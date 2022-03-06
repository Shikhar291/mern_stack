import { Card,Grid, CardContent, CardMedia, Link, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import productData from "./products";
import "./listproduct.css"
import { maxWidth } from "@mui/system";
import api_config from "../config";

const ListProducts = () => {
  
  const [productArray, setProductArray] = useState([]);
  const [loading, setLoading] = useState(true);

var cardstyle={
  border:`1px solid black`,
}

const url=api_config.api_url;


const fetchData=()=>{

  fetch(url+'/product/getall').then((res)=>{
    return res.json();
  }).then((data)=>{
    console.log(data);
    setProductArray(data);
    setLoading(false);
    
  });
};

useEffect(()=>{
  fetchData();
},[]);




  const displayProducts = () => {
    
    if(!loading)
    {
    return productArray.map((product) => (
        <Grid item md={4}>
      <Card className="border-1 border-secondary border">
        <CardMedia
          component="img"
          height="200"
          image={url+"/"+product.thumbnail}
          alt={product.name}
          className="thumbnail"

        />
        <CardContent>
          <p className="p-title">{product.title}</p>
          <div className="p-rating"><span className="span-p-rating">{product.rating} <i className="fas fa-star"></i></span></div>
          <p><i className="fa fa-inr"> &nbsp; </i><span className="bold">{product.price}</span></p>
        </CardContent>
        </Card>
      
      </Grid>
    ));
    }
    else
    {
      <CircularProgress></CircularProgress>;
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-1 mb-2">
        OnePlus
        </h1>     
      <Grid container direction="row" alignItems="flex-start" spacing={2}>
          {displayProducts()}
      </Grid>
    </div>
  );
};

export default ListProducts;