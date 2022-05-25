// console.log("hello")
//   const cal=(calcu,a,b)=>{
//     switch (calcu) {
//         case "add":
//             return a+b;

//             case "multiply":
//                 return a*b;

//                 case "divide":
//                     return a/b;

//                     case "subtract":
//                         return a-b;


// //         default:
// //             console.log("error occurred ")
// //     }
// //      }
// //     console.log(cal("multiply",10,5))

// // console.log(data)
// const array=data[0].name
// // console.log(array)

// const DATA=["welcome ", "to the ","code brew","labs"]
// // console.log(DATA)
// const newArray= DATA.concat(data)
// // console.log(newArray)

// // console.log(newArray[4].age)


// // console.log(newArray.splice(0,5))
// console.log(DATA.unshift("kashmir valley"))
// console.log(DATA)
// console.log(DATA.push("dateee!!!"))
// console.log(DATA)
// const D=(DATA.push("dateee!!!DGDGD"))
// console.log(DATA)


// const data=[
//     {name:'mehdi ', middlename:'hussain ', lastname:'malla ', age:'24', 
// working_as:'software intern'},
// {name:'malla ', middlename:'hussain ', lastname:'malla ', age:'24', 
// working_as:'software intern'},
// {name:'Hussain ', middlename:'hussain ', lastname:'malla ', age:'24', 
// working_as:'software intern'}
// ]
// console.log(data.pop(''))
// console.log(data)

// const array= ["mehdi"  ,'hussain ','malla ','24']
// console.log(array)
// // console.log(array.push("Kashmiri"))
// // console.log(array.pop())// removes the last elementy and return that element
// // console.log(array.unshift("valley"))// add element at the begining
// // console.log(array.shift())// removes the first elementy and return that element
// // console.log(array.splice(2))// removes the element from an array on the index based 

// // console.log(array)

// // console.log(array.toString())// convert the data into string
// console.log(array.join()) // join also converts the data into string    
// array[0]="learner" // here array[0] defines that index 0f which is used to add an element at specific position
// console.log(array)
// // console.log(array.length)
// // array [5]="interrn"
// // console.log(array)
// // console.log(array.length)

// if (array.length<5)
// {
//     console.log(array[4]="welcomeee")
//     console.log(array)
// }
// else{
//     console.log("hehhh")
// }
// // console.log(array[2])
// const array= ["mehdi"  ,'hussain ','malla ','24']
// console.log(array)
// const add= array.concat("peter")
// console.log(add)
// const xy=23;
// const z=(add.concat(xy))
// console.log(z)


// // for(let i=0;i<z.length;i++){
// // console.log(`welcome ${i}` )
// // }
// console.log(z)
// console.log(z.slice(2))// is used to delete the items from an array through the reference 
// // like if i write slice (2) it will creates the new array using first two elemenets but not delete the previous array

// console.log(z)

// const d= new Date();// new Date method is used to get the current date and time
// console.log(d)
// console.log(d.getFullYear())
// // it shows the current year
// console.log(z)
// console.log(z.sort())//  sorts array in an alphebatic order
// console.log(z.reverse())// it reverse the array from last to first

// const points=[1,2,5,7,0,11,9]
// // console.log(points.sort(function(a, b)
// // {return a - b}
// // ));
// function cal(a,b){
//     return a-b;
// }
// console.log(points.sort(cal))

// const points=[1,2,5,100,0,11,9]
// console.log(points)
// console.log("sort alphabetic order only",points.sort())

// points.sort(function(a,b){
// return a-b;
// })
// console.log("sort in ascendeing order",points)


// console.log(points)

// points.sort(function(a,b){
//     if(b>a){
//         return +1;
//     }
//     else if (a>b){
//         return -1;
//     }
//     else if(a===b){
//         return 0
//     }
//     else{
//         return null;
//     }
// })
// console.log("new array is",points)

// points.sort(function(a,b){
//     return b-a;
// })
// console.log("sort in descending order:",points)

// function newArray (points){
//     return Math.max.apply(null,points);
// }
// console.log("chdfhudfio",newArray( points))
// // const points = [1, 2, 5, 100, 0, 11, 9]
// // function newArray (points) { 
// //     return Math.max.apply(points) }
// // console.log("new Array is",newArray(points))

// for(let i=0; i<points.length;i++)
// {
//     console.log(points)
// }

// let newArr= points.map((item,index)=>{
//     console.log("the items are :",index,item)   

// })

// const data=[{name:"mehdi ", middle:"hussain "},{lastName:'malla', age:24}]
// let newArrays=data.map((index,item)=>{
//     console.log("the new item list is : ", index,item)

// })


// const cal =["worst ", "than", "ever",67,"check"]
// cal.push("heavy")
// console.log(cal)
// let  qwerty=cal.map((item,index)=>{
// console.log(index,"is the position of the item :",item)

// })

// console.log("object")
// let arr=['well done','should', "be",'more','initative']
// console.log(arr)

// const newData=cal.concat(arr)
// console.log(newData)
// console.log(newData.sort())
// let call=(newData.map((index,item)=>{
//     console.log(index,item)
// }))


// const code = [2, 4, 1, 0, 100, 450, 12, 120]
// function newArrayss(code) {
//     return Math.min.apply(null, code)
// }
// console.log(newArrayss(code))
// console.log(code.toString())
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const filter = words.filter(words => words.length <= 5)
// console.log(filter)

// function isBigData(value) {
//     return value > 100
// }
// let bigdata = code.filter(isBigData)
// console.log(bigdata)

// const number = [100, 200, 300, 400, 500, 800, 700, 900]
// const checkFilter = number.filter(number => number > 300)
// console.log("elements more  than 300 are:", checkFilter)


// for (let i = 0; i < number.length; i++) {
//     console.log(number)
// }

// let newArr = number.map((item, index) => {
//     console.log("the items are :", index, item)

// })

// const student = [{ name: "mehdi ", middle: 'hussiain', last: "malla" }]
// student[0].name= "Muntazir"
// student.push({name2:'amirr'})
// console.log(student)
// console.log(student[0].name)
// student.push({color:"white"})
// console.log(student)
// student.push({model:'modern'})
// console.log(student)

// // student.forEach((value)=>{
// //     value.value="diginity"
// // })
// // console.log(student)

// const userList=student.map(value=>
//      ({...value, active:'diginity',}))

// // console.log(userList)
// userList[1].name="passsionatism"
// userList.push({welcome:"doneee"})// here new object is created in the same array
// // console.log(userList)

// userList[4].last="poius"
// // console.log(userList)
// console.log(userList)
// console.log(userList[4].last)
// userList[4].profession="developer"// here a specific property is added to the fourth object
// console.log(userList)
// const userListss=[1,2,3,4,5,7,8,9]
// userListss.splice(1,2)
// console.log(userListss)

// const arr=[10,12,1,15,7,9,6,200,47]

// function myFunction()// simple sort function
// {
//      arr.sort()
//      console.log(arr)
// }
// myFunction()

// function newfunction()// function for ascending the integers
// {
//      arr.sort(function(a,b){
//           return a-b;
//      })
//      console.log("array in ascending order is:",arr)
// }
// newfunction()

// function newfun()// function for descending the integers of an array
// {
//      arr.reverse(function(a,b){
//           return a-b;
//      })
//      console.log("array in descending order is:",arr)
// }
// newfun()

// const year=new Date()  // there are the functions of the date time year month etc all about the time periods
// year.getMilliseconds()
// console.log(year)
// year.getDay()
// console.log(year)
// year.getFullYear()
// console.log(year)
// year.getTimezoneOffset()
// console.log(year)
// const d = new Date("03/25/2015");
// // console.log(d)
// dd=Date.now()
// console.log(dd)
// const d = new Date();
// console.log(d.setFullYear(2025));

// // let a=
// let a = Math.round(10.5545)// this method is used for the round off to the nearest
// console.log(a)
// let aa = Math.trunc(13.5545)// it returns the integer part and removes the decimal part
// console.log(aa)
// console.log("the power of the given number is:", aa = Math.pow(5, 2))

// const power = (a,b) => {


//      let c=Math.pow(a,b)
//      console.log("power of a given number is:",c)

//      // return c

// }
// power(10,5)
// const result = (a,b) => {


//      let c=Math.trunc(a,b)
//      console.log("power of a given number is:",c)

//      return c

// }
// result(10.124,0.455)
// const square=Math.sqrt(1025)
// console.log(square)

// const squareroot = (a) => {
//      console.log(a)
//   let c=  Math.sqrt(a)
//   return c
// //     console.log(c)
// }
// console.log(squareroot(64))

// const x= Math.floor( Math.random()*11)
// console.log(x)

// let x = "sss";
// console.log(Boolean(x));
// let y= new Boolean (false)
// let c=x===y
// console.log("sshhss",c)

// const vote = ( age) =>{

//      if (age>18) {
//           console.log("time to vote response")

//      }else if (age==17){
//      console.log("check for vote that is not eligible!")
// }
// else{
//      console.log("error occured")
// }}
// vote(17)

// const age=5;
// var votabel=age>18?"ready to vote" : "not ready"// ternaray operator
// console.log(votabel)

// const grade = "B"
// switch (grade) {
//      case "A":
//           console.log("Distinction")
//           break;
//      case "B":
//           console.log(" b part");
//           break;
//      case "C":
//           console.log("C part")

//      default:
//           console.log("failed")
//           break;
// }
let day = 3;
let dayName;


// switch (day) {
//   case 1:
//     dayName = 'Sunday';
//     break;
//   case 2:
//     dayName = 'Monday';
//     break;
//   case 3:
//     dayName = 'Tuesday';
//     console.log("object")
//     break;
//   case 4:
//     dayName = 'Wednesday';
//     break;
//   case 5:
//     dayName = 'Thursday';
//     break;
//   case 6:
//     dayName = 'Friday';
//     break;
//   case 7:
//     dayName = 'Saturday';
//     break;
//   default:
//     dayName = 'Invalid day';
// }

// for (let i = 0; i < 10; i++) {
//      console.log(`object ${i}`)
// }

// const data = ["employee", "worker", "staff", "office boy"]
// for (let i = 0; i <= data.length - 1; i++) {
//      console.log(data)
// }

// function even() {
//      for (let i = 1; i < 20; i++) {
//           if (i % 2 == 0) {
//                console.log("print even numbers ", i)
//           }
//      }
// }
// even()


// function odd() {
//      for (let i = 0; i < 20; i++) {
//           if (i % 2 == 1) {
//                console.log("print odd numbers ", i)
//           }
//      }
// }
// odd()

//   (%) this is modulo operator works as returning the remainder to check whether number is even or odd  
// function add (){
//      for (let num=10; num<100;num++){
//           if(num%2==0){

//                console.log("the even numbers are :",num)
//           }
//      }
// }
// add()

// let num=200;   // simple function to check number is even or odd
// if(num%2===1){
//      console.log("even number",num)
// }
// else{
//      console.log("the number is odd")
// }


// let data=[1,5,4,1,78,41]  //...............(for in) method works same as for loop with minimal code
// for(let x in data){
//      console.log(" object",data)
// }

// for(let x of data){
//      console.log(" object",data)//  ................(for of) method is also used instead of for loop
// }


// while loop........//
// let i=1;
// while(i<10){
//      console.log("object ",i)
//      i++
// }

// do while.....loop


let i=0;

do{
     console.log("check",i)
     i++;
     
}
while(i<10);
    
