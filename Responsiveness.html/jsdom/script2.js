// let arr=[12,34,56,34,45,67,78];
// for (var i=0;i<7;i++);
// {
//     console.log(arr[i])
// }
//  console.log(arr);

//  arr[2] = arr[2] +10;
//  console.log(arr);
//  arr=[];
  
//  console.log(arr);

//  arr.pop();

//  console.log(arr);

//  arr.push(99);

//  console.log(arr);

//  arr.unshift(11);

//  console.log(arr);

//  arr.shift();

//  console.log(arr);

//  console.log(arr.indexOf(78));

//  console.log(arr.includes(34));

//  let unar = [56,23,89,45,67,34,12,90,87,45];
//  console.log(unar);

//  unar.sort();

//  console.log

let fd = [
    ["Nandini","05-01-2005",8871412826,"Bhopal","TEacher"],
    ["heaven","16-09-2003",8871412826,"Bhopal","TEacher"],
    ["Rehaan","18-11-2006",8871412826,"Bhopal","TEacher"],
    ["Atif","18-6-2005",8871412826,"Bhopal","TEacher"],
    ["Karan","22-01-2005",8871412826,"Bhopal","TEacher"],
  
];

fd.forEach(element => {
    console.log(element)
});
// The above was a old format to store element

let FData =
[
{
     "name": "Nandini",
    "dob": "05-03-2005",
    "phone": 8871412826,
    "city": "Bhopal",
    "occupation": "Teacher"
},
  {
    "name": "Rehaan",
    "dob": "18-11-2006",
    "phone": 8871412826,
    "city": "Bhopal",
    "occupation": "Teacher"
  },
  {
    "name": "Atif",
    "dob": "18-06-2005",
    "phone": 8871412826,
    "city": "Bhopal",
    "occupation": "Teacher"
  },
  {
    "name": "Karan",
    "dob": "22-01-2005",
    "phone": 8871412826,
    "city": "Bhopal",
    "occupation": "Teacher"
  },
  

  {
    "name": "heaven",
    "dob": "16-09-2003",
    "phone": 8871412826,
    "city": "Bhopal",
    "occupation": "Teacher"
  }
]

// FData.forEach((item) =>
// {
//     console.log(item["city"])
// })

// let nandinii = {
//     name ="ishit garg",
//     dob:"06-02-2006",
//     phone:6268177560,
//     city:"bhopal",

// }
    
let arr =[22,43,6,74,8,91,5,23,32,9,8,92,45];
arr.sort((a,b)=> a-b);
console.log(arr);

console.log(arr.find((val)=> val===6));
console.log(arr.find((val)=> val===9));
console.log(arr.find((val)=> val===43));
console.log(arr.find((val)=> val>20));

console.log(arr.filter((val)=> val>20));;

console.log(arr.slice(7));

let ab ="this is web dev class";
console.log(ab.split(" "));

let str= "this is string"

// split
// charAt
console.log(str.charAt(5));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let a= 3.14;
console.log(a);
console.log(typeof a);
let b= a.toString();
console.log(b);

let c=  3.145756546786546685465486;
console.log(c.toFixed(5));

let fullName = "Nandini";
console.log("my name is $(nandini)");
