//printing statement

//console.log()

// console.log('hello world!')
//two ways to see the ouput
// extension - code runner
//termianl - node [filename]
//================================================
//how to write the js code :
//variable - container to store the values

//syntax[formula]:
//variable_type variable_name = value  [ initalization]
//console.log(variable_name)  [printing statment or declaration]

// const sugarbox = "sugar"
// console.log(sugarbox)

//variable_type:

//var

// var a = 10   //redeclare
//     a = 5   //reassign
// console.log(a);

//let

// let b  = 10  // it can't redeclare
//     b = 5     //it can reassign
// console.log(b);

//const

// const c = 10  // it can't redeclare
//       c = 5   // it can't reassign
// console.log(c);

//datatypes :

//primitive datatypes :
//string  -  "happpy" or 'hello'

//number - 234 & 23.23

//boolean - true or false

//null
// var n = null
// console.log(n);

//undefined
// var a
// console.log(a);

//non primitive datatypes :

//array - []
//colllection of values and data within the square bracket

// const arr = ["hello",12,56.2,true,null,1234]
// console.log(arr[4]);

//length starts with 1
//index starts with 0
//length -1 = index

//object - {}
//collection of key and value pairs

// const obj = {
//     name : "jai",
//     age : 12,
//     dep : "IT"
// }
// console.log(obj);

//Functions: block of code
//Function statement or declaration
//syntax:
//function fn_name(){
//code
//}
// fn_nam()

// function home(){
//     console.log("relatives");
//     console.log("birthdayboy");
// }
// home()

//parameter - is like an variable_name
//arguments - is like an value

// function box(x){ //parameter

//     return x
// }
// console.log(box(100))//arguments

//Function expression

// var bigbox = function(){ //anonymous function
//     console.log("Teddy bear here!!");
// }
// bigbox()

//Immediate Invoke function Expression

// var store=(function(x){
//     console.log(x);

// })(10)

//Arrow function : short hand syntax
//syntax :
//()=>{ }

// var arr = (x) => {console.log(x)}
// arr(2)
//function statment

//op:
//hello xyz how are you ?

//operators :
//arithmetic operator
//add+,sub-,mul*,div/,%modulus,**exponent,increment++,decrement--

// var num = 2
// num-- //2-1
// console.log(num);

//assignment operator

// var num2 = 10
// num2+=5  //15+=
// console.log(num2);

//comparsion operator
//< lessthan , >greaterthan , <=lessthanorequal , >=greaterthanorequals

// var a = 10
// var b = 10
// console.log(a>=b);

//logical operator
//&& => and
// || => or
// ! => not

// var num = 10
// var num1 = 20
// console.log(num!=num1);

//Equality operator
//double equals  ==
//it checks the value not the datatype
// var db = 10
// var db2 = "10"
// console.log(db==db2);
//Triple equals ===
//it will check both the value and datatype

// var te = 10
// var te1 = "10"
// console.log(te===te1);

//Ternary operator
//syntax :
//(condition)? "statement_true": "statement_false"

// var age = 1000

// var limit = (age >= 18 && age<=70) ? "He is eligible to vote":"He is not eligible to vote"

// console.log(limit);

//Loop  - code will run continously  untill the condition met
//for
//syntax:
//for(initaliztion;condition;iteration[increment++,decrement--]){
//code
//}

// for(let i = 5 ; i>=0 ; i--){
//       console.log(i);
// }
//step
//step 1 => i=0 -> 0<5[true]-> print:0 -> 0++ = 1
//step 2 => i = 1 => 1<5[true]-> print:1 -> 1++ = 2
//step 3 => i = 2 -> 2<5[true] -> print:2 -> 2++ = 3
//step 4 => i = 3 -> 3<5[true] -> print:3 -> 3++ = 4
//step 5 => i = 4 -> 4<5[true] -> print : 4 -> 4++ = 5
//step 6 => i = 5 -> 5<5[false] // loop will stop

//loop the string
// let str = "happy"
// for(var i = 0;i<str.length;i++){
//     console.log(str[i]);

// }

//reverse the string
// let str2 = "javascript"
// let store = ""
// for(var i = str2.length-1 ; i>=0 ; i-- ){
//      store += str2[i] // "tp "+= p
//     console.log(store);
// }
// console.log(store);

// number
// let numstore = 0
// for(let i = 0 ; i<=5 ; i++){
//       numstore += i
// }
// console.log(numstore);

//loop - 0 - 10  even number - odd number
//while - Entry level condition checking loop

// let count = 0 //initialization
// while(count<5){ //condition
//      console.log(count); //print
//      count++ //iteration

// }

//do-while  - exit level condition checking

// let docount = 5
// do{
//      console.log(docount)  //5
//      docount++
// }while(docount<5) //5<5

//if-else
//syntax:
//if(condition){

//}else{

//}

// let age = 10
// if(age>=18){ //true
//      console.log("he is eligible to vote");

// }else{
//      console.log("he is not eligible to vote");

// }

//else-if

// let mark = 95

// if(mark>=90 && mark<=100){ //fail
//      console.log("Grade A");

// } else if(mark >= 80){  //fail
//      console.log("Grade B");

// }else if(mark >=70){ //fail
//      console.log("Grade C");

// }else if(mark >=60){ //true
//      console.log("Grade D");

// }else if(mark >=50){
//      console.log("Grade E");

// }else{
//      console.log("Fail");

// }

//array [14,53,23,12,121] find the maximum number

//Arraymethods:

//push - is used to push the values in the last of an array

// var bc = ["jai","gopal","hari","kali"]
// bc.push("sabari","logan")
// console.log(bc);

// //pop - is used to remove the values in the last of an array
// bc.pop()
// console.log(bc);

// //unshift - it will add the values in beginning of the array

// var roll = ["jai","gopal","hari","kali"]
// roll.unshift("vijay")
// console.log(roll);

// //shift
// roll.shift()
// console.log(roll);

// //concat  - used to merge two or more array .

// const veg = ["carrot","betroot","cucumber"]
// const fruits = ["apple","pineapple","mango"]
// const cosmetic = ["scent","powder"]
// const cover = veg.concat(fruits,cosmetic)
// console.log(cover);

// //sort :

// const num = [5,2,3,7,8,1,10,9,4,6]
// num.sort((a,b)=>b-a)
// console.log(num);

// //slice :   used to cut the array based on indices

// const birds = ["pigeon","vuluture","eagle","peacock","parrot"]
// const sl = birds.slice(2,-2)
// console.log(sl);

//splice:
//syntax:
//var_name.splice(index,counter[0,1],value)
// 0 => new value push and update
//1 => override or replace and update

// const weeks = ["sunday","monday","Tuesday","Thursday","Saturday"]
// weeks.splice(3,1,"Wednesday")
// console.log(weeks);

//String methods :

//length :
// let str = "java"
// console.log(str.length);

// //split

// var spl = "Hello world !"
// var spl2 = spl.split(" ")
// console.log(spl2);

// //join :

// var j = spl2.join("")
// console.log(j);

// //reverse :

// var val = "javascript"
// var rev =  val.split("").reverse().join("")
// console.log(rev);

// //includes :

// var inc = "newyork"
// var find = inc.includes("new")
// console.log(find);

// //toUppercase:

// var up = "javascript"
// console.log(up.toUpperCase());

// //toLowerCase

// var low = "CHENNAI"
// console.log(low.toLowerCase());

// //indexof : //first occurence

// var idx = "trendnologies"
// console.log(idx.indexOf("e"));

// //lastIndexOf - last occurence

// var lidx = "trendnologies"
// console.log(lidx.lastIndexOf("e"));

// //charAt

// var char = "happy"
// console.log(char.charAt(3));

// //substring :

// var sub = "annanagar"
// console.log(sub.substring(4));

// //startswith

// var sw = "police"
// console.log(sw.startsWith("p"));

// //endswith

// var ew = "Police"
// console.log(ew.endsWith("e"));

//trim :

// var tr = " happy "
// console.log(tr);
// console.log(tr.trim()); // cut the first and end empty space
// console.log(tr.trimStart());//it only cut the starting empty space
// console.log(tr.trimEnd());//it only cut the end of empty space

//replace
// var rep = "hello world"
// console.log(rep.replace("hello","welcome"));

//Object: collection of key and value pairs
//{ }
//json - Javascript object notation
// const obj = {
//    name : "vijay",
//    dep : "it",
//    exp : 4
// }

//update the values in the object
// obj.name = "sakthi"
// obj.dep = "NOn - it"
// obj.exp = 5
// console.log(obj);

//get the values in the object
// console.log(obj.name);
// console.log(obj.exp);
// console.log(obj.dep);

//Nested array and object

// var stdobj = [
//    {
//       name : "logan",
//       age : 12
//    },

//    {
//       name : "hari",
//       age : 14
//    },

//    {
//       name : "sakthi",
//       age : 16
//    },

//    {
//       name : "Kali",
//       age : 13
//    }
// ]
// console.log(stdobj[2]);

//object destructuring

// const obj = {
//    name : "vijay",
//    dep : "it",
//    exp : 4
// }
//  const {name,dep,exp}=obj
//  console.log(name,dep,exp);

//task :

//officeobj - 5 peps - name,dep,exp,id.no - 3person,4person
//2person retrive the values - obj destructuring

//formethods

//forEach - loop and read the array
//syntax:
//variable_name.forEach((value,index,acctualarray)=>)

// var arr = ["sunday","monday","TUesday","wednesday"]
// arr.forEach((val,idx,accarr)=>console.log(val,idx,accarr))
//forIn - loop the object
//syntax:
//for(var_type var_name in obj_name){
//code
//}

// var obj = {
//    name : "surya",
//    city : "newyork"
// }
// for(var x in obj){
//     console.log(obj[x]);

// }
//o/p:
//name <=> surya
//age <=> 35

//forOf - string or array
//syntax:
//for(var_type var_name of str_name){

//}

// let str = "hai"
// for(var x of str){
// console.log(x);
// }

//MRF
//Map , Reduce , Filter
//Map
//syntax:
//var_name.map((value,index,actualarray)=>)

// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var map = num.map((val, idx, accarr) => accarr*2);

// console.log(map);

//reduce
//syntax:
///var_name.reduce((accumulator,value,index,acctualarray)=>)

// var reduce = num.reduce((acc,val)=>acc+val,5)
// console.log(reduce);

// //filter

// //syntax:
// //var_name.filter((value,index,acctualarray)=>)

// var filter = num.filter((val,idx,accarr)=>val>5)
// console.log(filter);

///callback - passing the function into the another function's argument is called callback function.

// function name1(){
//     console.log("vijay");

// }
// function greets(x){
//     x()
//     console.log("Hello welcome !!");
// }

// greets(name1)

// function box1(x){
//     setTimeout(() => {
//         console.log("Verybigbox");
//         x()
//     }, 4000);

// }
// function box2(y){
//    setTimeout(() => {
//     console.log("bigbox");
//     y()
//    }, 1000);

// }
// function box3(z){
//   setTimeout(() => {
//     console.log("medium size box");
//     z()
//   }, 2000);

// }
// function box4(){
//     setTimeout(() => {
//         console.log("small box");
//     }, 3000);

// }
// //callbackHell
// box1(()=>{
//     box2(()=>{
//         box3(box4)
//     })
// })

//Promise

//syntax :

//return new promise((resolve,reject)=>{
//Async code
//})

//resolve - .then()
//reject - .catch()

//arun
//watercanfill - 2
//roomclean - 1
//trash out - 3

// function watercan(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const water = true
//             if(water){
//                 resolve("watercanfilled")
//             }else{
//                 reject("watercan not filled")
//             }
//         },3000)
//     })
// }

// function roomclean(){

//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             const rc = true
//             if(rc){
//                 resolve("room is cleaned")
//             }else{
//                 reject("room is not cleaned")
//             }
//         }, 1000);
//     })

// }

// function trash(){

//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             const tr = false
//             if(tr){
//                 resolve("trash out")
//             }else{
//                 reject("trash is not kept outside")
//             }
//         },2000);
//     })
// }

// watercan().then(val => {console.log(val); return roomclean()})
//           .then(val2 => {console.log(val2);return trash()})
//           .catch(err => {console.log(err);console.log("all task done")})

//async and await  - keyword
//async - it will return promise
//await - it will wait for promise

// async function work(){
//     try{

//         var watercans = await watercan()
//         console.log(watercans);

//         var roomscleans = await roomclean()
//         console.log(roomscleans);

//         var garabage =await trash()
//         console.log(garabage);
//     }catch(err){

//        console.log(err);

//     }
// }
// work()

//inheritance

// class Recepiebook{

//     maggie(){
//         console.log("maggie masala");
//         console.log("noodles");
//     }

//     sandwidch(){
//         console.log("bread");
//         console.log("cheese");

//     }

// }
// //object
// var chef = new Recepiebook();
// chef.maggie()
// chef.sandwidch()

//inheritance :

// class Parent {
//   house() {
//     console.log("Apartment");
//   }
// }

// class Child extends Parent {
//   bike() {
//     console.log("Duke390");
//   }
// }

// var prop = new Child();
// prop.bike();
// prop.house();



//Task : 
//Multi-level - inheritance
//grandparent - house,land 
//parent - car , Jewels 
//child - bike 

//o/P 
//parent - land , car , jewels 
//child - house , land ,car , bike

//hello world d