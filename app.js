const express = require("express");
const app = express();
const path = require("path");

/* app.listen(3001);
app.use(express.static(__dirname + "/public")); */

app.listen(process.env.PORT||3000,function(){
    console.log("Fuciona en puerto 3000")
})

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});