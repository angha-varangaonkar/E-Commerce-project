const express= require('express');
const app =express();
const dbConnect=require('./db');





const port =3000;
dbConnect();

app.use('/api',require('./routes/userRoutes'))

app.listen(port,()=>{
    console.log(`app is listening on the port :${port}`)
})