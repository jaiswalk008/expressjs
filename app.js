const express = require('express');
const app = express();
const path = require('path');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');
const bodyParser = require('body-parser')
const contactRoutes = require('./routes/contactus')

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

//adminRoutes act as a middleware now
app.use('/admin',adminRoutes);
app.use('/',shopRoutes);//because of getmethod even if we change the order we will get correct page
app.use('/',contactRoutes);
app.post('/success',(req,res)=>{
    res.status(200).send('<h1>Form submitted successfully</h1>');
})
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','error404.html'));//method chaining also cn use app.setHeader.send(). send has to be in the end
}) 

app.listen(3000);