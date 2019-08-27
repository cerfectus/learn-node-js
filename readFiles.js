
var fs = require("fs");
var sentence = "hola perros soy la verga"
//sync methods
var readMe = fs.readFileSync("readme.txt", "utf8");
var writeFile = fs.writeFileSync("writeMe.txt", sentence)
//console.log(readMe)
//async  methods
var readMeAsync = fs.readFile("readme.txt", "utf8", function(err, data){
 fs.writeFile("writeMe.txt", data)
})