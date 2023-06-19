const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const db = require('./util/database')

app.use('/',contactRoutes);
app.use('/admin', adminRoutes);
app.use(shopRoutes);

db.execute()

app.post('/success',(req,res)=>{
  res.status(200).send('<h1>Form Submitted Successfullt</h1>');
})


app.listen(3000);
