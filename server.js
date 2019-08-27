var http = require("http")
var fs = require("fs")


var server = http.createServer(function(req,res){
    console.log("the url" + req.url)
    res.writeHead(200, {"Content-type": "text/html"})
    var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8")
    myReadStream.pipe(res)

})
server.listen(3000, ()=>{
    console.log("server is up")
})