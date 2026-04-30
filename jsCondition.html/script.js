let n=5;

if(n>0){
    console.log("positive integer");
}
else{
    console.log("negative number");
}


 if(n<18){
    console.log("eligible for vote");
 }
 else{
    console.log("not eligible")
 }
 let m = 8;

if (m % 2 == 0) 
    {
    console.log("even");
} 
else 
    {
    console.log("odd");
    }
var M=55;
if(M>=90)
{
    console.log("A+");
}
else if(M>=75&&M<90)
{
    console.log("B");
}
else if(M>=50&&M<75)
{
    console.log("C");
}
else
{
    console.log("Fail");
}

let usr="abcde";
let pass="12345";

if(usr==="abcde" && pass==="12345")
{
    console.log("login success")
}
else
    {
    console.log("login failed")
}

let data;

let name = "nandini";

data=name ||"N/A";
{
    console.log(data)
}
// if(name){
//     console.log("name")
// }
// else{
//     console.log("N/A");
// }
let x=2;
 console.log(x>10 && y<5);

 for (let i=0; i<5; i++){
    if (i===3){
        continue;
    }
    console.log(i);
 }
let choice=5;
switch(choice){
    case 1:{
        console.log("tea");
        break
    }
    case 2:{
        console.log("coffee");
        break
    }
    case 3:{
        console.log("lassi")
        break
    }
    default:{
        console.log("paani")
        break
    }
}
