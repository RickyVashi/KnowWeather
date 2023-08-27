const express = require("express");
const path=require("path");
const hbs=require('hbs');
const app = express();
const port = process.env.PORT || 7654;

//Public Static Path
const static_Path = path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials");

app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);

app.use(express.static(static_Path));

//Routing
app.get("",(req,res) =>{
    res.render('index');
})

app.get("/about",(req,res) =>{
    res.render('about');
})

app.get("/weather",(req,res) =>{
    res.render('weather');
})

app.get("*",(req,res) =>{
    res.render('404error',{
        errorMsg : 'Opps! Page Not Found'
    });
})

app.listen(port,()=>{
    console.log("Listen at 7654");
})