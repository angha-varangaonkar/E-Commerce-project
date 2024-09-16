const express= require('express');
const app =express();
const dbConnect=require('./db');





const port =3000;
dbConnect();

app.listen(port,()=>{
    console.log(`app is listening on the port :${port}`)
})