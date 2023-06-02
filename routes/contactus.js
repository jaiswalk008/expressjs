const express =require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

router.use('/contactus',(req,res)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
})
module.exports = router;