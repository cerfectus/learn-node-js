var http = require("http");
var fs = require("fs")
//readable streams
var myReadStream = fs.createReadStream(__dirname + "/readme.txt", "utf8")
var myWriteStream = fs.createWriteStream(__dirname + "/writeme.txt") 

myReadStream.pipe(myWriteStream)

//myReadStream.on("data", (chunk) => {
//    console.log("new chunk")
//    myWriteStream.write(chunk)
//})
module.exports = {
myReadStream:myReadStream,
myWriteStream:myWriteStream
}