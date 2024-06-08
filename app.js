//install 
const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const productRoutes=require('./routes/productRoute');
//userRoute added
const userRoutes=require('./routes/userRoute');
require('dotenv').config();

const app=express();
const port=process.env.PORT || 3000;

app.use(bodyParser.json());
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.once('open',()=>{
    console.log('connected to MongoDB database');
});

app.use('/api',productRoutes);

//userRoute added

app.use('/api/users',userRoutes);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
