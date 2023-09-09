const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var mongoadd = require(__dirname+"/addData");
var mongoread = require(__dirname+"/readData");
var mongoupdate = require(__dirname+"/updateData");
var mongodelete = require(__dirname+"/deleteData");
var sendMail = require(__dirname+"/mailService.js");

var app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.send("<h1>Hello</h1>")
});

app.get("/readData",(req,res)=>{
    var temp = req.body;
    mongoread(temp);
});

app.post("/addData",(req,res)=>{
    var temp = req.body;
    mongoadd(temp);
    res.send("added sucessfully")
})

app.post("/updateData",(req,res)=>{
    var temp = req.body;
    mongoupdate(temp.filter,temp.data);
    res.send("updated sucessfully")
})

app.post("/deleteData",(req,res)=>{
    var temp = req.body;
    mongodelete(temp);
    res.send("deleted sucessfully")
})

//Mail Service
app.post("/mailService",(req,res)=>{
    sendMail(req.body,res);
})

app.listen(7000,()=>{console.log("Port = 7000")});