var http = require("http")
var fs = require("fs")


var server = http.createServer(function(req,res){
    console.log("the url" + req.url)
    res.writeHead(200, {"Content-type": "application/json"})
    var myObj = {
        name:  "ryu",
        job: "ninja",
        age: 29
    }
    res.end(JSON.stringify(myObj))
    

})
server.listen(3000, ()=>{
    console.log("server is up")
})