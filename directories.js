var fs = require("fs")

//remove directory
//fs.unlink("writeMe.txt", () =>{})

//create directory
//rmdir
//fs.mkdir("stuff", ()=> {})
fs.mkdir("file", function() {
    fs.readFile("readme.txt", "utf8",function(err, data){
        fs.writeFile("./file/writeMe.txt", data, ()=>{
            
        })
    })
})