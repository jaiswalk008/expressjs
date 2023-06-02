const express = require('express');
const router = express.Router();//A mini expreess app tied to other express app which we can export
const path = require('path')
const rootDir = require('../util/path');
//below are the routes registered with router
//filtering routes = suppose we want to change all the routes in the admin folder to /admin/...
//instead of doing for every route we can add a filter in the app.js file

//below route will be = /admin/add-product
router.get('/add-product',(req,res,next)=>{
   
    res.sendFile(path.join(rootDir,'views','add-product.html'));
})
//below route will be = /admin/product
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/')
    
})
//Note : Same Path can be used if the methods are different

module.exports = router;