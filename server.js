const express = require('express');
const path = require ('path');


const app = express();
const PORT = process.env.PORT || 2000;

//setting template engine
app.set('view engine', 'ejs');

//setting public path 
const publicPath = path.join(__dirname, 'public')

//middleware
app.use(express.static(publicPath))

app.get('/',(req, res)=>{
    res.render('index')
})

app.listen(PORT, (req, res)=>{
    console.log(`Server is runnin on port no : ${PORT}`);
})