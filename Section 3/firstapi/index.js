const express=require('express');
const app=express();
const cors=require('cors');
const utilRouter=require('./routers/utils').router;
const userRouter=require('./routers/userRouter').router;
const productRouter=require('./routers/productRouter').router;
const { createServer } = require("http");
const { Server, Socket } = require("socket.io");

const port =5000;

const httpServer = createServer(app);

const io = new Server(httpServer, { 

    cors:{
        origin:['http://localhost:3000']
    }
 });

io.on("connection", (socket) => {

    console.log("client connected");
    
    socket.on("sendmsg",(data)=>{
        console.log(data);
        data.sent = false;
        socket.broadcast.emit("recmsg",data);
    });
});

// httpServer.listen(3000);






app.use(cors({origin:['http://localhost:3000'],}));
app.use(express.static("./uploads"));
app.use(express.json());


// app.listen(5000,()=>{

//     console.log("listening 5000...");
// });


httpServer.listen(5000,()=>{
    console.log("listening 5000...");
});


app.use('/user',userRouter);//middleware
app.use('/product',productRouter);
app.use('/util',utilRouter);




app.get('/',(request,response)=>{
    response.send('hello');
});

app.get('/home',(request,response)=>{
    response.send('Home');
});

app.get('/home/room',(request,response)=>{
    response.send("home/room");
});

