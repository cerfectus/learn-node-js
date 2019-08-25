var counter = function(arr){
    return "the array is " + arr.length + " items long"
};
var adder = function(a,b){
    return `the sum of ${a}, ${b} is ${a+b}`
};
var pi = 3.14;

module.exports = {
    adder: adder,
    counter: counter,
    pi: pi
};