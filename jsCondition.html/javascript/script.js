// var a =10;
// console.log(a);
// console.log(b);
// console.log();{



let test= "this is a global function"

function classA(){
   console.log("ClassA",test);
}
function classB(){
    console.log("ClassB",test);
    
}
function classC(){
    let test2= "this is local variable";
    console.log( "ClassC",test);
    console.log("Class", test2)
}
function classD(){
    let x= 20;
    console.log( "ClassD",test);
    console,log(x);
}
let v=10;
console.log(v);
console.log(x);
{
    console.log(v);
    console.log(x);

}
console.log(x);

function classE(){
    console.log("ClassE",test);
}
let a =5;
function classF(){
    console.log( "ClassF" ,test);
    console.log(a);
}
function classG(){
    console.log("ClassG",test);
    console.log(a);
}
function classB(){
    console.log("ClassB",test);
    console.log(a);
}


classA();
classB();
classC();
classD();
classE();
classF();
classG();
