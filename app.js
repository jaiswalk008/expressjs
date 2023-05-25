const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));

//adminRoutes act as a middleware now
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);//because of getmethod even if we change the order we will get correct page
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');//method chaining also cn use app.setHeader.send(). send has to be in the end
}) 

app.listen(3000);