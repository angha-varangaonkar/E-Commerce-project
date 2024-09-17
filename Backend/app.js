const express= require('express');
const app =express();
const dbConnect=require('./db');
const colors= require('colors');




const port =3000;
dbConnect();
app.use(express.json());

app.use('/api',require('./routes/userRoutes'))

app.listen(port,()=>{
    console.log(colors.magenta(`app is listening on the port :${port}`));
});