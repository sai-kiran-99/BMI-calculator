//js hint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const app=express();


app.use(bodyparser.urlencoded({extended:true}));

app.get("/bmicalculator",function(req,res){
  req.sendFile(__dirname +"/bmicalculator.html");
});

app.post("/bmicalculator",function(req, res){
  var weight= parseFloat(req.body.weight);
    var height= parseFloat(req.body.height);

    var bmicalculator=weight/(height*height);
    res.send("your bmi is + ", bmicalculator)
});

app.listen(3000,function(req,res){
  console.log(" server is running on port 3000");
});
