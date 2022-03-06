
import { useState } from "react";
const Gallery=()=>{

    let url1="https://venturebeat.com/wp-content/uploads/2021/11/forzahorizon5-1.jpg?fit=750%2C422&strip=all";
    let url2="https://compass-ssl.xboxlive.com/assets/ed/ec/edecbd5e-4a92-4811-8a84-0fdc6e4baae3.jpg?n=ForzaHorizon4_E3PressKit_WM_07_SennaRear.jpg";
    let url3="https://www.slashgear.com/wp-content/uploads/2020/08/Forza-Horizon-3-rain-1280x720.jpg";
    let url4="https://gamingbolt.com/wp-content/uploads/2016/10/Forza-Horizon-3.jpg";
    
    const [maining,setMaining]=useState(url1);
    
    const changeImage=(imgurl)=>{
        setMaining(imgurl);

    };
    
    return(
            <div className="container">
                <h1 className="text-center">Gallery Component</h1>
                <hr />
            <img className="img-fluid mt-5" src={maining}></img>
            <div className="row">
                <div className="col-md-3">
                    <img onClick={()=>{changeImage(url1)}} className="img-fluid" src={url1}></img>
                </div>
                <div className="col-md-3">
                    <img onClick={()=>{changeImage(url2)}} className="img-fluid" src={url2}></img>
                </div>
                <div className="col-md-3">
                    <img onClick={()=>{changeImage(url3)}} className="img-fluid" src={url3}></img>
                </div>
                <div className="col-md-3">
                    <img onClick={()=>{changeImage(url4)}} className="img-fluid" src={url4}></img>
                </div>
            </div>
            </div>
        
    );

};
export default Gallery;