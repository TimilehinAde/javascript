//This is Hello World Program of javascript

console.log("Hello world");
    
let firstname,lastname="Daily Tuition",Age = 24;
console.log(firstname);
console.log(lastname);
console.log(Age);

//creating a constant
const TEMP = 12.4, name = "Daily";

console.log(TEMP);
console.log(name);  

let Goal="Tutorial Make me Happy";

let reference = Goal;
let me =reference;
let you = me;

console.log(reference)

//DATA TYPE
    //primitive
let age = 24; 
age = "Hello " + "World";

console.log(age);

const blue = Symbol("color white");

const white =Symbol("color white");
console.log(blue === white);

let myNumber;
myNumber = 12.4;
myNumber=undefined

console.log(myNumber);

//Object Types->are mutable, can change value, like a container with different kind of data
//Array, Date, Regular Expression, Map and WeakMap, Set and WeakSet

 const obj = {
  name: "Timi",//key=name,value = "Timi"
  Age:24//key=Age, value= "24"
 };
 
 console.log(obj.name);
 //deleting property
 delete obj.Age; 
 delete obj.name;
 console.log(obj.Age);
 console.log(obj.name);

//Array-> a collection of different types of data

const a1 = [1,2,3,4,5];
const a2 = [1,2,null,4,'five'];
const a3 = ['hello','world','array'];

const a4 = [
  [1,2,3],
  [4,5,6]
];
//get array length
console.log(a2.length);
console.log(a3.length);
console.log(a4.length);
//get array index
a3[0] = 'Welcome'
console.log(a3[0][6]);

//Date
const dt = new Date(2023,3,26,23,15);
console.log(dt)

//Maps and Set
 //Maps
 const roles = new Map();
 //assign role to the user
 roles.set('t1','User1');
 roles.set('t2','User1');
 roles.set('t3','User1');
 roles.set('t4','User1');
 roles.set('t5','User1');
 roles.set('t6','User1');
 console.log(roles);

 //Set
 const role = new Set();
 role.add('t2',"User1"); 
 role.add("User2"); 
 role.add("User1","j8"); 
 role.add("yh7","User1"); 
 role.add("User1"); 
 role.add("User1"); 
 console.log(role);

 //Switch
 let ans = 5;

 switch (ans){
  case 1:
    console.log("you have selected javascript");
    break;
  case 2:
    console.log("you have selected node");
    break;
  case 3:
    console.log("you have selected java");
    break;
  case 4:
    console.log("you have selected python");
    break;
  default:
    console.log("you have selected the wrong option");
    break;  
 }


 //While Loop
let count = 1;

while(count<10){
  console.log(count);
  count++;
}
for(let i =1; i<4;i++){
  for (let j = 1; j <4; j++){
    console.log(i +","+j);
  }
  console.log("\n");
}

const obje={6:6,b:2,c:3,d:4}
for(let e in obje){
  console.log([e])
}


//for of
let ary=[1,2,3,4,5];
let str = "tuition";

for(let value of str){
  console.log(value)
}