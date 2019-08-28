var http = require("http")
var fs = require("fs")


var server = http.createServer(function(req,res){
    console.log("the url" + req.url)
    if(req.url === "/" || req.url === "/home"){
        res.writeHead(200, {"content-type": "text/html"})
        fs.createReadStream(__dirname + "/index.html").pipe(res)
    }else if(req.url === "/contact"){
        res.writeHead(200, {"content-type": "text/html"})
        fs.createReadStream(__dirname + "/contact.html").pipe(res)
    }else if(req.url === "/api/ninja"){
        var ninjas = [{name: "ryu"},{name:"otto"}]
        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify(ninjas))
    }else{
        fs.createReadStream(__dirname + "/404.html").pipe(res)
    }

})
server.listen(3000, ()=>{
    console.log("server is up")
})