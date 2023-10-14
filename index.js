import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;
import { JSDOM } from 'jsdom';
import jQuery from 'jquery';
const { window } = new JSDOM('');
const $ = jQuery(window);
var list=[];
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const today =[ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d=new Date();
let name=month[d.getMonth()];
let day=d.getDate();
let td=today[d.getDay()];
let dm=day+","+td+","+name;

app.get("/",(req,res)=>
{

res.render("index.ejs",{date:dm,task:list});
});
app.post("/",(req,res)=>
{
    var obj=req.body;
    var input=obj.userinput;
    list.push(input);
    res.render("index.ejs",{date:dm,task:list});
});
app.post("/submit",(req,res)=>{
list=[];
res.render("index.ejs",{date:dm,task:list});
});
$(".checkbox").click(function(){
    $("p").addClass("strike")
});




