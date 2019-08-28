var express = require("express");
var bodyParser = require("body-parser")

var app = express()
var urlencodedparser = bodyParser.urlencoded({extended: false})

app.set("view engine", "ejs")
app.use("/assets", express.static("assets"))

app.get("/", (req,res) => {
    res.render("index")
})
app.get("/contact", (req, res)=> {
    res.render("contact", {qs: req.query})
})
app.post("/contact", urlencodedparser, (req, res)=> {
    console.log(req.body)
    res.render("contact-success", {data: req.body})
})
app.get("/profile/:id", (req,res)=> {
    var data = {age: 29, job : "Ninja", hobbies: ["run","swim","eat","prey","love"]}
    res.render("profile", {person: req.params.id, data:data})
})
//req.params.id
app.listen(3000, (req,res)=> {
    console.log("listening")
})
