const express=require('express');
const router=express.Router();
const Product=require('../models/productModel');
const app=express();

router.post('/products',async(req,res)=>{
    const product=new Product(req.body);
    try{
        await product.save();
        res.status(201).send(product);
    }catch (error){
        res.status(400).send(error);
    }
});


router.get('/products',async(req,res)=>{
    try{
    const products=await Product.find();
    res.status(200).send(products);
    }catch (error){
        res.status(500).send(error);
    }
});



router.get('/product:id',async(req,res)=>{
    const _id=req.params.id;
    const product=await Product.findById(_id);
    if(!product){
        return res.status(404).send();
    }
    res.send(product);
});

router.patch('/productUpdate:id',async(req,res)=>{
    const _id=req.params.id;
    const product=await Product.findByIdAndUpdate(_id,req.body,{new:true});
    if(!product){
        return res.status(404).send();
    }
    res.send(product);
})


router.delete('/productDelete:id',async(req,res)=>{
    const _id=req.params.id;
    const product=await Product.findByIdAndDelete(_id);
    if(!product){
        return res.status(404).send();
    }
    res.send(product);
});



module.exports=router;