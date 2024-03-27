const express = require("express");
const fs = require ('fs');
app= express ();
console.log("Folder proiect", _dirname);
console.log("Cale disier",_filename);
console.log("Director de lucru", process.cwd());
app.set("view engine","ejs");
app.use( "/resurse",express.static(_dirname+"/resurse"));
app.get(["/","/index","/home"],function(req,res){
    //res.sendFile(_dirname+"/index.html")
    res.render("pagini/index")
})
app.get("/cerere",function (req,res)
{
    res.send("<b>Hello</b> <span style='color:red'>world!<span>");
})
app.get("/data", function (req,res,next)
{
    res.write("Data: ");
    next();
});
app.get("/data",function (req,res){
    res.write(""+new Date());
    res.end();
});

app.get("/suma/:a/:b", function (req,res){
    var suma=parseInt(req.params.a)+parseInt(req.params.b)
    res.send(""+suma);
});
app.get("/*", function(req,res)){
    console.log(req.url)
    res.render("pagini"+req.url, function(err,rezHtml){
        console.log("Pagina:",rezHtml);
        console.log("Eroare:".err);
        res.send(rezHtml);
    })
}
app.listen(8080);
console.log("Serverul este pornit!");