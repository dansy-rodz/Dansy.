//const prompt = require('prompt-sync')();
//const name = prompt("What is your name? ");
//console.log("Hello, " + name + "!");

//function example
//function sq(x){
  //  let ans = 0;
    //ans = x*x;
    //return ans;
//}
//console.log("anwser:"+ sq(2));

function greet(name, abc){
    console.log("hello"+name+"!");
    abc();
}
function abc() {
    console.log("goodbye!");
}
greet("dansy",abc)