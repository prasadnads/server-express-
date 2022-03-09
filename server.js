//jshint esversion:6

const express = require("express");

const app = express();
app.get ("/", function(req, res){
  res.send("<h1> Hello World..!</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at:prasadnads@gamil.com" );
});

app.get("/about", function(req, res){
  res.send("I'm Nandu Prasad i would to code and do fun with scripts");
});

app.get("/service", function(req, res){
  res.get("Web Development, Digital Marketing, Data Entry");
});

app.listen(3000, function(){
 console.log("Server started on port 3000")

});
