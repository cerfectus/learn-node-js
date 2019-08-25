var stuff = require("./stuff")
var events = require("events")
var utils = require("util")
var fs = require("fs")

fs.unlink("./file/writeMe.txt", ()=>{
    fs.rmdir("./file", ()=>{
        
    })
})
var Person = function(name){
    this.name = name
}
utils.inherits(Person, events.EventEmitter)

var james = new Person("james")
var mary = new Person("mary")
var ryu = new Person("ryu")
var people = [james, mary, ryu]
people.forEach(function(person){
    person.on("speak",function(mssg){
        console.log(person.name + " said:" + mssg)
    })
})
james.emit("speak", "hey dudes")


console.log(stuff.counter(["1", "2", "3"]))
console.log(stuff.adder(3,5))