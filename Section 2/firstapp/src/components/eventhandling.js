import { useState } from "react";

const EventHandling= ()=> {

    const dotask=()=>{
        console.log("ReactJS");
        console.log("React   JS");
    };

    let c=1;

    const handleChange= ()=>{
        console.log(c);
        c+=1;
        console.log("");
    };

    const [count,setCount] = useState(0);
    
    const updateState=()=>{
        console.log(count)
        setCount(count+1);
    }
    


    return (
        <div className="container mt-5">
            <h1>Event Handling</h1>
            <button onClick={dotask}className="btn btn-outline-primary">Click</button>

            <input  className="form-control mt-5" onChange={handleChange} />

            <h6>{count}</h6>
            <button className="btn btn-primary" onClick={updateState}>change</button>
            
        </div>
    );

};
export default EventHandling;