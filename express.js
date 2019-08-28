var express = require("express");
var app = express()

app.set("view engine", "ejs")

app.get("/", (req,res) => {
    res.send("hola bobos")
})
app.get("/contact", (req, res)=> {
    res.send("contacto")
})
app.get("/profile/:id", (req,res)=> {
    var data = {age: 29, job : "Ninja", hobbies: ["run","swim","eat","prey","love"]}
    res.render("profile", {person: req.params.id, data:data})
})
//req.params.id
app.listen(3000, (req,res)=> {
    console.log("hola perros")
})