const express = require('express');
const router  = express.Router();
const path = require('path')
const rootDir = require('../util/path');
//below route will be = /admin/product
router.get('/',(req,res)=>{
    res.sendFile(path.join(rootDir,"views","shop.html"))//can use ..
})//path returns a path and it constructs the path by concatenating different segments. It also recognizes the OS and according
//to it makes the directory
/*
__dirname- global variable which holds the absolute path on our OS to this project folder
points to routes folder
../ - to go one level up i.e., to folder where routes folder has been stored 
*/
module.exports = router;