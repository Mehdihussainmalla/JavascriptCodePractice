//..........var............//
//..var is functional scope or global scope. var can be decalre and can be reassigned also. var is the old version of the javascript
//..sometimes need to change the value so the var keyword is used to declare a variable. 


//...........let..............//
//..let is block scoped variable and can be functionalised within the block only. let can be decalre at first and initialise 
//...at later stage. let can be reassigned also within the block.....//
//.............const............//
//.....const is same as let that is block scope but the difference is const can be decalre and intialise at one ....
//.......const cannot be redecalre and cannot be initialised later..///////




// console.log("hello")
// //   const cal=(calcu,a,b)=>{
// //     switch (calcu) {
// //         case "add":
// //             return a+b;

// //             case "multiply":
// //                 return a*b;

// //                 case "divide":
// //                     return a/b;

// //                     case "subtract":
// //                         return a-b;


// // //         default:
// // //             console.log("error occurred ")
// // //     }
// // //      }
// // //     console.log(cal("multiply",10,5))

// // // console.log(data)
// // const array=data[0].name
// // // console.log(array)

// // const DATA=["welcome ", "to the ","code brew","labs"]
// // console.log(DATA)
// // const array= ["mehdi"  ,'hussain ','malla ','24']
// // const newArray= DATA.concat(array)
// // console.log(newArray)
// // console.log(newArray[4])

// // // console.log(newArray.splice(0,5))// ........deletes the elements from an array and returns the deleted array
// // // console.log("the new array is :",newArray)
// // newArray.unshift("kashmir valley")///.....unshift add element at begining of an array
// // console.log(newArray)
// // newArray.push("dateee!!!")// ....push adds element at the last of an array
// // console.log(newArray)
// //  newArray.push("dateee!!!DGDGD")
// //  console.log(newArray)


// // const data=[
// //     {name:'mehdi ', middlename:'hussain ', lastname:'malla ', age:'24', 
// // working_as:'software intern'},
// // {name:'malla ', middlename:'hussain ', lastname:'malla ', age:'24', 
// // working_as:'software intern'},
// // // {name:'Hussain ', middlename:'hussain ', lastname:'malla ', age:'24', 
// // // working_as:'software intern'}
// // // ]
// // // console.log(data)

// // const array= ["mehdi "  ,'hussain ','malla ','24 ']
// // console.log(array)
// // array.push("Kashmiri")
// // console.log(array)
// // //  console.log(array.pop())// removes the last elementy and return that element
// // // // console.log(array.unshift("valley"))// add element at the begining
// // // // console.log(array.shift())// removes the first elementy and return that element
// // //  console.log(array.splice(2))// removes the element from an array on the index based 

// //  console.log(array)

// // //  console.log(array.toString())// convert the data into string

// // //  // join also converts the data into string   
// // // console.log(array.join("")) //return strings without commas
// // // console.log(array.join())// return strings with commas
// // // console.log(array.join("-")) // retuns string as highfin

// // array[0]="learner" // here array[0] defines that index 0f which is used to add an element at specific position
// //  console.log(array)
// // // // console.log(array.length)
// // // // array [5]="interrn"
// // // // console.log(array)
// // // // console.log(array.length)

// // if (array.length<=5)
// // {
// //     console.log(array[5]="welcomeee")
// //     console.log(array)
// // }
// // else{
// //     console.log("hehhh")
// // }
// // console.log(array[5])//.......returns the specific element from an array

// // const array = ["mehdi", 'hussain ', 'malla ', '24']
// // // console.log(array)
// // const d = array.concat("peter")// returns the new array
// // // console.log(d)
// // const xy = 23;
// // const z = (d.concat(xy))
// // // console.log(z)


// // for (let i = 0; i < z.length; i++) {
// //      console.log(z,`${i}`)
// // }
// // console.log(z)
// // console.log(z.slice(3))// is used to delete the items from an array through the reference (3) means how many numbers should be created 
// // // like if i write slice (2) it will creates the new array using first two elemenets but not delete the previous array
// // const fun =()=>{
// //      // z.push("convocation")
// //      z.slice(2)
// //      return z
// // }
// // const check=fun(z.push("practice"))
// // console.log(check)
// // console.log(z)

// // const d= new Date();// new Date method is used to get the current date and time
// // console.log(d)
// // console.log(d.getFullYear())
// // // it shows the current year
// // console.log(z)
// // console.log(z.sort())//  sorts array in an alphebatic order
// // console.log(z.reverse())// it reverse the array from last to first

// const points=[18,12,5,7,0,11,9]
// // console.log(points.sort(function(a, b)
// // {return a - b}
// // ));
// // function cal(a,b){  //...............here, this function is a comparison function..........//
// //     return a-b;
// // }
// // console.log(points.sort(cal))

// // const points=[101,2,5,103,0,111,9]
// // console.log(" sort alphabetic order only",points.sort())

// // points.sort(function(a,b){
// // return a-b;
// // })
// // console.log("sort in ascendeing order",points)


// // console.log(points)

// // points.sort(function(a,b){
// //     if(b>a){
// //         return +1;
// //     }
// //     else if (a>b){
// //         return -1;
// //     }
// //     else if(a===b){
// //         return 0
// //     }
// //     else{
// //         return null;
// //     }
// // })
// // console.log("new array is",points)

// // points.sort(function(a,b){
// //     return b-a;
// // })
// // console.log("sort in descending order:",points)
// // const points=[101,2,5,103,0,111,9]
// // function newArray (points){
// //     return Math.max.apply(null,points);
// // }
// // console.log(newArray(points))
// // // const points = [1, 2, 5, 100, 0, 11, 9]
// // // function newArray (points) { 
// // //     return Math.max.apply(points) }
// // // console.log("new Array is",newArray(points))

// // for(let i=0; i<points.length;i++)
// // {
// //     console.log(points, `${i}`)
// //}
// const points = [12, 25, 15, 100, 120, 11, 19]
// // let newArr= points.map((item,index)=>{
// //     console.log("the items are :",index,item)   

// // })
// // let data=points.map((item, index)=>{
// //      console.log(item, +" " +index)

// // })
// // console.log(points.length)
// // const data = [{ key: "1", name: "mehdi ", middle: "hussain " }, { key: '2', lastName: 'malla', age: 24 },
// // { key: '3', category: 'general', date_of_birth: 2001, address: 'chandigarh' }]
// // // console.log(data)
// // let newArray = data.map((element, index) => {
// //      console.log(element, +" " + index)

// // })



// // const data=[{name:"mehdi ", middle:"hussain "},{lastName:'malla', age:24}]
// // let newArrays=data.map((index,item)=>{
// //     console.log("the new item list is : ", index,item)

// // })


// // const cal =["worst ", "than", "ever",67,"check"]
// // cal.push("heavy")
// // console.log(cal)
// // let  qwerty=cal.map((item,index)=>{
// // console.log(index,"is the position of the item :",item)

// // })

// // console.log("object")
// // let arr=['well done','should', "be",'more','initative']
// // console.log(arr)

// // const newData=cal.concat(arr)
// // console.log(newData)
// // console.log(newData.sort())
// // let call=(newData.map((item,index)=>{
// //     console.log(index,item)
// // }))


// // const code = [2, 4, 1, 0, 100, 450, 12, 120]
// // function newArrayss(code) {
// //     return Math.min.apply(null, code)
// // }
// // console.log(newArrayss(code))
// // console.log(code.toString())
// // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// // const filter = words.filter(words => words.length <= 5)
// // console.log(filter)

// // const filteredData=words.filter(function (words){
// //     if(words.length<=5)
// //     {
// //      console.log(words)
// //     }
// // })
// // const data = [{ key: "1", name: "mehdi ", middle: "hussain " }, 
// // { key: '2', lastName: 'malla', age: 24,rank:10 },
// // { key: '3', category: 'general', date_of_birth: 2001, address: 'chandigarh' }]
// // const result =data.filter(function(data){
// //      return data.key
// // })
// // console.log(result)




// // function isBigData(value) {
// //     return value > 100
// // }
// // let bigdata = code.filter(isBigData)
// // console.log(bigdata)

// // const number = [100, 200, 300, 400, 500, 800, 700, 900]
// // const checkFilter = number.filter(number => number > 300)
// // console.log("elements more  than 300 are:", checkFilter)


// // for (let i = 0; i < number.length; i++) {
// //     console.log(number)
// // }

// // let newArr = number.map((item, index) => {
// //     console.log("the items are :", index, item)

// // })

// const student = [{ name: "mehdi ", middle: 'hussiain', last: "malla" }]
// //  student[0].middle="mehdi"
// //  console.log(student)
// // student[0].name= "Muntazir"
// // console.log(student)
// // student.unshift({name2:'amirr'})
// // console.log(student)
// // console.log(student[1].name2)
// // student.push({color:"white"})
// // console.log(student)
// // student.push({model:'modern'})
// // console.log(student)

// // student.forEach((value, index)=>{
// // console.log(index,value)
// // //     value.value="diginity"                    
// // })
// // console.log(student)

// // //   for each and map function are same but the difference is like for each returns the existing array 
// // //...... while as map returns the new array(note means to store the array in the another array by initialiseing it)

// // // const userList=student.map((value)=>({...value, active:'restorating'}))
// // const userList=student.map((value)=>({...value, distance:100}))
// // // console.log(userList)
// // // const userList=student.map(value=>
// // //      ({...value, active:'diginity',}))

// // // // console.log(userList)

// // userList.push({welcome:"doneee"})// here new object is created in the same array
// // userList[1].name="passsionatism"
// // console.log(userList)

// // userList[1].last="poius"
// // console.log(userList)
// // // console.log(userList)
// // console.log(userList[1].last)
// // userList[4].profession="developer"// here a specific property is added to the fourth object
// // console.log(userList)
// // const userListss=[1,2,3,4,5,7,8,9]
// // userListss.splice(1,2)
// // console.log(userListss)

// // const arr=[10,12,1,15,7,9,6,200,47]

// // function myFunction()// simple sort function
// // {
// //      arr.sort()
// //      console.log(arr)
// // }
// // myFunction()

// // function newfunction()// function for ascending the integers
// // {
// //      arr.sort(function(a,b){
// //           return a-b;
// //      })
// //      console.log("array in ascending order is:",arr)
// // }
// // newfunction()

// // function newfun()// function for descending the integers of an array
// // {
// //      arr.reverse(function(a,b){
// //           return a-b;
// //      })
// //      console.log("array in descending order is:",arr)
// // }
// // newfun()

// // const year=new Date()  // there are the functions of the date time year month etc all about the time periods
// // year.getMilliseconds()
// // console.log(year)
// // // year.getDay()
// // // console.log(year)
// // // year.getFullYear()
// // // console.log(year)
// // // year.getTimezoneOffset()
// // // console.log(year)
// // // const d = new Date("03/25/2015");
// // // // console.log(d)
// // // dd=Date.now()
// // // console.log(dd)
// // // const d = new Date();
// // // console.log(d.setFullYear(2025));

// // //  let a=12.045
// // // let ab = Math.round(a)// this method is used for the round off to the nearest
// // // console.log(ab)
// // // let aa = Math.trunc(a)// it returns the integer part and removes the decimal part
// // // console.log(aa)
// // console.log("the power of the given number is:", aa = Math.pow(5, 2))

// // const power = (a,b) => {

// //      let dd=Math.pow(a,b)
// //      console.log("object",dd)

// //      let c=Math.pow(a,b)
// //      // console.log("power of a given number is:",c)

// //      return c

// // }

// // const d=power(10,5)
// // console.log(d)
// // const result = (a,b) => {


// //      let c=Math.trunc(a,b)
// //      console.log("power of a given number is:",c)

// //      return c

// // }
// // result(10.124,0.455)
// // const square=Math.sqrt(1025)
// // console.log(square)

// // const fun =(squareroot)=>{
// // const date=Math.sqrt(squareroot)
// //      return date


// // }
// // const square=fun(169)
// // console.log(square)

// // const deep = function(data){
// //      const result= Math.sqrt(data)
// //      // console.log(result)
// //      return result

// // }
// // const lastTry=deep(1024)
// // console.log(lastTry)

// // const squareroot = (a) => {
// //      console.log(a)
// //   let c=  Math.sqrt(a)
// //   return c
// // //     console.log(c)
// // }
// // console.log(squareroot(64))
//..............math.floor is used to round off the integer to the nearest value.........//
// const x= Math.floor( Math.random()*11)
// console.log(x)

// // let x = "sss";
// // console.log(Boolean(x));
// // let y= new Boolean (false)
// // let c=x===y
// // console.log("sshhss",c)


// // const dateOfbirth=(vote)=>{
// //      if(vote<18){
// //           console.log("not eligilbe")

// //      }
// //      else if(vote===18){
// //           console.log("ready to authorise the vote")
// //      }
// //      else{
// //           console.log("no vote permitted")
// //      }

// // }
// // dateOfbirth (21)

// // const vote =(age)=>{
// //      switch (age) {
// //           case 15:
// //                console.log("not eligible for vote")
// //                break;
// //                case (age=18):
// //                     console.log("should be given the vote")
// //                     break;

// //           default:
// //                console.log("not interested")
// //                break;
// //      }

// // }
// // vote(15)



// // const vote = ( age) =>{

// //      if (age>18) {
// //           console.log("time to vote response")

// //      }else if (age==17){
// //      console.log("check for vote that is not eligible!")
// // }
// // else{
// //      console.log("error occured")
// // }}
// // vote(17)

// // const age=5;
// // var votabel=age>18?"ready to vote" : "not ready"// ternaray operator
// // console.log(votabel)

// // const grade = "B"
// // switch (grade) {
// //      case "A":
// //           console.log("Distinction")
// //           break;
// //      case "B":
// //           console.log(" b part");
// //           break;
// //      case "C":
// //           console.log("C part")

// //      default:
// //           console.log("failed")
// //           break;
// // }
// // let day = 3;
// // let dayName;


// // switch (day) {
// //   case 1:
// //     dayName = 'Sunday';
// //     break;
// //   case 2:
// //     dayName = 'Monday';
// //     break;
// //   case 3:
// //     dayName = 'Tuesday';
// //     console.log("object")
// //     break;
// //   case 4:
// //     dayName = 'Wednesday';
// //     break;
// //   case 5:
// //     dayName = 'Thursday';
// //     break;
// //   case 6:
// //     dayName = 'Friday';
// //     break;
// //   case 7:
// //     dayName = 'Saturday';
// //     break;
// //   default:
// //     dayName = 'Invalid day';
// // }

// for (let i = 0; i < 10; i++) {
//      console.log(`object ${i}`)
//  }
// const check=["employee", "worker", "staff", "office boy"]
// const data = check
// for (let i = 0; i <= data.length - 1; i++) {
//      console.log(data)
// }

// function even(i) {
//      for ( i = 1; i < 40; i++) {
//           if (i % 2 == 0) {
//                console.log("print even numbers ", i)
//           } else if(i%2===1)
//           {
//                console.log("print odd numbers ", i)
//           }
//           else {
//                console.log("not a number")
//           }
//      }
// }
// even(50)
// .......reduce method.............//
// const reduce = [140, 120, 4]
// console.log(reduce.reduce(myFunc))
//.............reduce function another methoad.........//
// function myFunc(total, num) {  //......here total is previous value, and num is current value../
//      return total + num;   //.........reducer function for the sum of the array and return the single value..//
// }

// const checkReduce = (myFunc, reduce) => {
//      return reduce.reduce(myFunc)
// }
// console.log(checkReduce(myFunc, reduce))

// const reduceArray = [140, 120, 4]  //.....the reduce method returns the total value according to the arthmetic operations//
// function myFunc(total, num) {  //......here total is previous value, and num is current value../
//      return total + num;        //.............all arithmetic operations can be performed ............//
//  }

// const checkReduce = (myFunc, reduceArray) => {
//      return reduceArray.reduce(myFunc)
// }
// console.log(checkReduce(myFunc, reduceArray))


///...........here in below code the reduce function is used for the array of arrays
// const reduce = [[140, 120,],[14,10],[21,11]]
//  let check=reduce.reduce((previous, current)=>previous.concat(current))
//  console.log(check)


// function odd() {
//      for (let i = 1; i < 20; i++) {
//           if (i % 2 == 1) {
//                console.log("print odd numbers ", i)
//           }
//           else if(i%2===0)
//           {
//                console.log("even numbers are ",i)
//           }
//           else{
//                console.log("error occurred")
//           }
//      }
// }
// odd()

// //   (%) this is modulo operator works as returning the remainder to check whether number is even or odd  
// // function add (){
// //      for (let num=10; num<100;num++){
// //           if(num%2==0){

// //                console.log("the even numbers are :",num)
// //           }
// //      }
// // }
// // add()

// // let num=200;   // simple function to check number is even or odd
// // if(num%2===1){
// //      console.log("even number",num)
// // }
// // else{
// //      console.log("the number is odd")
// // // }


// let data = [1, 5, 4, 1, 78, 41]  //...............(for in) method works same as for loop with minimal code
// for (let x in data) {
//      console.log(" object", data)
// }

// // for(let x of data){
// //      console.log(" object",data)//  ................(for of) method is also used instead of for loop
// // }


// while loop........//

// let i=1;
// while(i<10){
//      console.log("object ",i)
//      i++
// }

// // // do while.....loop


// let num=0;

// do{
//      console.log("check",num)
//      num++;

// }
// while(num<10);

// for (let i = 0; i < 10; i++) {
//      if (i ==3) {
//           continue;//.........continue keyword is used to skip the particular item 
//      }
//      console.log("object", i)
// }

// const data = ["we", "all", "are", "human", "beings",90]
// for (let i = 0; i < data.length-1 ; i++){
//      if (i == 2) { 
//           continue 

//      }
//      console.log(i, data)
// }


// // const dataa=data.toString()
// // console.log(dataa)


// ////////...............functions in javascript......../////

// const x = function (a, b) {
//      const d = Math.pow(a, b)
//      console.log("the exponentaial value of two numbers are:", d)
//      c = a * b
//      return c

// }
// console.log("the multiplication is:", x(2, 5))

// function check(x, y) {  ///............if place holders are two and argument is one how it works
//      if (y === undefined) {
//           y = 3;
//      }
//      return y * x
// }
//  console.log(check(10))


//  function myFunction(a, b, c) {
//      if (c === undefined) {
//           c = "malla"
//      }
//      firstName = a;
//      secondName = b
//      lastName = c
//      return `${firstName} ${secondName} ${lastName}`


// }
// const d = myFunction("mehdi", "hussain")
// console.log(d)

// console.log(Math.max.apply(null, [40, 10, 0, 410, 250]))//........here apply method is used for an array, no as a seperate arguments

// // const person={
// //      name:'mehdi',
// //      middle:"hussain",
// //      last:function(){   //..............bind function is pending
// //           return this.middle
// //      }
// // }
// // const education={
// //      degree:"masters",
// //      course:"computerApplications",
// //      passout:2021
// // }
// // console.log(person.last.bind(education))

// let count = 0;
// function add() {
//      count += 1
//      return count
// }
// console.log(add())
// console.log(add())       

// const myFunctions = () => {
//      console.log("check nested function or callback function")
//      let x = 10; let y = 20
//      console.log(`${x} * ${y}  =`, x * y)

// }

// const checks = () => {
//      myFunctions()
//      console.log("function invoked")


// }
// console.log(checks())

// let count =0;
// console.log("check the count:", ++count)


//...............function callback code execution..................//

// const friend2 = () => {
//      console.log(`zahoor is hardworking guy`)

// }

// const friend1 = (friend) => {
//      console.log(`${friend} is an intellectual guy`)
//      friend2()
// }
// friend1("Amir")

//........function call back using function call as arguments




// const friend1 = (name) => {
//      console.log(`  zahoor are hardworking guy and his friend is ${name}`)

// }
// const friend2 = (friend, callback) => {
//      console.log(`${friend} is an intellectual guy`)
//      callback("mehdi")

// }
// friend2("Amir", friend1)

// const shortMultiple =(a,b)=>{
//      console.log("call back values are :",a*b)

// }
// const multiple = (c,callback)=>{
//      let a=10,b=20;
//      console.log(a*b*c)
//      callback(5,3)

// }
// multiple(10,shortMultiple)

// const waitingProcess = () => {
//      console.log("waiting time will be 3 seconds")

// }

// const time = () => {
//      setTimeout(() => {
//           console.log("check time out period")

//      }, 3000);
//      waitingProcess()
// }
//   time()
// const process = (name, functionInvoke) => {
//      console.log(`My name is ${name}`)
//      let a = 10, b = 20;
//      let c = a * b;
//      functionInvoke("Hanjiwera Payeen kashmir", 193121)
//      return c

// }
// console.log(process("mehdi",))
// const address = (address, pincode) => {

//      console.log(`My address is ${address}.
// The pincode is ${pincode}`)
//      let x = 20
//      let y = 40
//      let c = x + y
//      console.log("the output is:", c);

// }

// console.log(process("Mehdi", address))
// const callBackFunction = (callback) => {
//      setTimeout(() => {
//           let c = 10 * 50
//           console.log("the out put is :", c)

//      }, 2000);
//      console.log("the grief in onees life matters when you realise for yourself")
//      callback(153, 5)
// }

// const addfunction = (num1, num2) => {
//      let c = num1 / num2
//      console.log("the division of two numbers is :", c)
// }

// callBackFunction(addfunction)


//.............callback function using multiple functions............//

// const conditional = (post, callbackFirst, callbackSecond) => {

//      setTimeout(() => {
//           console.log(`${post}`)

//      }, 2000);

//      callbackFirst("working ", "enjoy it")

//      callbackSecond("do fast", "welcome back")


// }

// const check = (process, success) => {
//      console.log(`if done then ${success} if not then ${process}`)
// }
// const checkList = (processList, successList) => {
//      console.log(`if done then ${successList} if not then ${processList}`)
// }
//  console.log(conditional("Mashallah", check, checkList))


// const data = [10, 21, 23, 14, 18, 11]

// console.log(data)
// const numbers = ()=>{
//      const odds =data.filter(num=>{
//           return num%2===0
//      })
//      console.log(odds)
// }
// numbers()
// const arrayList = [10, 21, 23, 14, 18, 11, 25,400,789,147]
// const evenCheck=()=>{
//      console.log(arrayList)

//      const data= arrayList.filter(num=>{
//         return  num %2===1
//      })
// console.log( data)
// }
// evenCheck()




// const even = () => {
//      const numbers = data.map((item) => {
//           console.log(item)
//           if (item % 2 === 0 && item %2!=1)

//           { return item}
//           // else {
//           //      return null
//           // }
//      })
//      console.log(numbers)

// }
// even()

// let x;
// for (x=0; x<6; ++x){   //pre incremenet process
//      console.log(x)
// }


// for (x=10; x>1; --x){   // ......pre decrement process and shows reverse result
//      console.log(x)
// }


// const x= Math.pow(4,2)
// console.log(x)

// let y=10
// y%=5
// console.log(y)
// let x= undefined;
// let y= null;

// // if(x==y){
//      console.log(true) //........loose equality operator 
// // }


// if(x===y){    //.........strict equality operator
//      console.log(true)
// }
// else {
//      console.log(false)
// }


// const data="12";
// const DATA=12;
// if(data==DATA)
// {
//      console.log("the result is :",true)
// }


// if (data===DATA){
//      console.log("the result is :",true)

// }
// else {
//      console.log("the result is :",false)
// }

// const sum = data+DATA;
// const check =String (sum)
// console.log(typeof check)

// let x = "40" + "10"
// console.log(x)
// const person = {
//      name: 'mehdi ', lastName: 'malla', age: 24, residence: "kashmir"
// }
// console.log(person)

// // console.log(person.age)
// console.log(`i am`,person.age ,"years old")
// const str = "mehdi ,hussain, malla";
// console.log(str.slice(1, 15)) //...........slice contains two parameters (a,b) here a is starting part and b is ending part
// //........if we pass only one parameter the method will return all the rest string..................//
// console.log(str.indexOf("hussain"))

// const string = "  Hello world!!"
// console.log(string)
// console.log(string.trim())  //..............The trim() method removes whitespace from both sides of a string. 

// console.log(string.replace(/^\s+|\s+$/gm, ''))  //.............replace method is also used to remove the white space to a string

// const splitProcess = () => {

//      const details = "how are you today , my dear friend"
//      const x = details.split(" ")   //........split() method is used to return an array of strings that is formed after the splitting method
//      console.log(x)
// }
// splitProcess()

//.....................practice for call back functions.................//

// const myFunction = (num,callback,callbackSecond)=>{
//      callbackSecond(10,40)
//      setTimeout(() => {
//          console.log(num*num)

//      }, 3000);
// console.log(callback(2,2))
// }

// const secondFunction = (a,b)=>{
//      const d= a*b
//      return d
// }


// function result(add,sub){
//   if(add)
//   {
//        console.log(add+3)
//   }
//   else{
//        console.log(sub-2)
//   }
// }

// myFunction(40,secondFunction,result)
// let text =
//      `The quick
// brown fox
// jumps over
// the lazy `;
// let x = "dog"
// console.log(text, `${x}`)   // ........string literals practice.............////

// let firstName= "Mehdi Hussain"
// let lastName='Malla';
// let fullName= `My full name is ${firstName} ${lastName}`;
// console.log(fullName)
//.........how to print extra large numbers using scientific notations...///
// ........  only e alphabet is written for scinetific no other alphabets.......//
//........... e represents zero (0) that is how mant zeroes..//////////

// const x=2e3;
// const y=10e4;
// const d= x+y;
// console.log(d)
// const x=2e3;  // ......value is 2000
// const y=10e-4;  // ..... value is 0.0010
// const d= x+y;
// console.log(d)  //.....tatal output is: 2000.0010
// let x = 0.2 + 0.1;
// console.log(x)
// // console.log(Math.trunc(x))
// console.log(Math.round(x))

// const x="100";    //............on strings the arithmetic operations can be performed........//
// const y="10";
// console.log(typeof x+y)
// console.log(typeof(x/y))
// console.log( x*y)
// console.log( x%y==1)

// const a="100"  //..........NaN  when a illegal string try to do arithmetic operations............//                      
// const b="abc"
// const c=a*b;
// console.log(c)
// // console.log(typeof Infinity)  //.............infinity returns a number..................//
// let x = 500;  //...........here x is a vaiarble        
// let y = new Number(500)//..............y is assigned to an number function..........//
// console.log(x === y)  //...................using strict operator function and varable cannot be the same
// console.log(x == y)  //............using looosley operator the function and variale passing same value are equal

// const x= "10"
// console.log(typeof Number(x))
// const xy= "10.00"
// console.log(typeof  parseInt(xy))  //..........parseInt tries to convert string into numbers
// const load="1230.1"
// console.log(parseFloat (load))  //.........parseFloat returns string into numbers and return the number..////////

// let x=Number.MAX_VALUE;  //................Number.MAX_VALUE returns the maxiumum value of javascript 
// console.log(x)    //..............output is 1.7976931348623157e+308................//
// let y=Number.MIN_VALUE;
// console.log(y)
//....................ARRAYS..............................//

// const data =["lasha", "takaalum","sham","kufa"]
// const fun=()=>{
// console.log(data)
// console.log(data[2])
// data[4]="Khoharaam"   //.........element added into any array using array name  with index number....//
// console.log(data)
// }
//  fun()
// const check={ firsName: "Mehdi", middleName: "Hussain", lastName: 'malla', residence: 'Kashmir Valley' }
// console.log(check.firsName)  //..............object

// const data = [{ firsName: "Mehdi", middleName: "Hussain", lastName: 'malla', residence: 'Kashmir Valley' }]
// data.unshift({name:"hussssssaaainn"})
// console.log(data)
// data.push({martial_status:'single'})
// console.log(data)
// // data.shift()
// // // console.log(data)
// data.pop()
// console.log(data)
// console.log(data)  //...........array of objects...........//
// console.log(data[0].firsName)
//  data[0].profession="developer"
//  console.log(data)
// // const userList=student.map((value)=>({...value, active:'restorating'}))


// data.forEach((value)=>{
//      value.lastRight="check for khooofiyat"
// })
// console.log(data)

// let newArray= data.map((value)=>({...value,active:"watan"

// }))

//  console.log(newArray)
// console.log(newArray[0].firsName)
// const data = [{ firsName: "Mehdi", middleName: "Hussain", lastName: 'malla', residence: 'Kashmir Valley' }]
// data.unshift({ name: "hussssssaaainn" })
// console.log(data)
// data.push({ martial_status: 'single' })
// console.log(data)
// data.shift()
// console.log(data)
// data.pop()
// console.log(data)

// data.splice(0,2)
// console.log(data)

// data.filter((item, index)=>{
//      console.log("the items are :",item, index)
// })
// const arrayData = ["welcome", "great", "distraction", "jashn", "cordinate", "manage"]
// const filter = arrayData.filter(words => words.length <= 5)
// console.log(filter)

// const arrayList= arrayData.length
// console.log(arrayList)
// arrayData.forEach((element,index) => {
//      console.log(index,element)
// });

// function myFunction(arrayData)
// {
// arrayData.forEach(element => {
//      console.log(element)
// });
// }
// myFunction(arrayData)


//..................using for each and callback function to return the elements of an array.............//
// arrayData.forEach(myFunction)
// function myFunction(value){
// console.log(value)
//  }
// console.log("you got little bit",arrayData[2])

// const datas =arrayData[1]
// console.log("you are",datas)


// const check=(arrayData)=>{

// setTimeout(() => {
//      console.log("they got high tempered ", arrayData[2])
// }, 3000);
// console.log(`you are a${arrayData[1]} personality i ever seen !` )

// }
// check(arrayData)
// const points = new Array(4, "welcome")  //...........using cumnstructor way to make new array..........//
// console.log(Array.isArray(points))  //...............Array.isArray returns whether the array is true or not 
// //.................so boolean value is returned......................///
// // console.log(points)

// console.log(points instanceof Array)  //.................istanceof also returns whether array exixts or not...////

//............................sorting....................................//
//..............sorting in alphabetic order  from left to right.................//
// const data = ["welcome", "back", "arrow", "divide", "calculate", "eatable"]
// data.sort()
// console.log(data)
// data.reverse()  //..............reverse sort from right to left............//
// console.log(data)


//....................sorting in alphabetic squence not like numbers..............//
// const newData= ()=>{
// const numbering=[20,15,45,87,01,54,25,52,11,12,21]
// numbering.sort()
// return numbering
// }
// console.log(newData())

//...................sorting in ascending order.............//
// const numbering = [20, 15, 45, 87, 01, 54, 25, 52, 11, 12, 21]
// numbering.sort(function (a, b) {   //.........this function is a comparison function...........//
//      return a - b;
// })


// const numbers=[10,12,4,0,12,14,54,75,70]
// numbers.sort(function(a,b){
//      return a-b
// })
// console.log(numbers)
// //..............reverse sorting .............//
// numbers.sort(function (a, b) {
//      return b - a;
// })
// console.log(numbers)
// const numbering = [20, 15, 45, 87, 01, 54, 25, 52, 11, 12, 21]
// // console.log(Math.max.apply(null, numbering))

//...........min and max value find out methods................//
// const minValue = (value) => {
//      console.log(value)
//      setTimeout(() => {
//           const min = Math.min.apply(null, value)
//           console.log(min)

//      }, 3000);

//      const max = Math.max.apply(null, value)
//      return max;
// }
// console.log(minValue(numbering))
//.................forEach iteration of an array.....................//
// const numbering = [20, 15, 45, 87, 01, 54, 25, 52, 11, 12, 21]
//  numbering.sort(function(a,b){
//       return a-b
//  })
// const data=numbering.forEach((element,index )=> {
//      console.log(` ${index} position elements in an arrray is ${element}`)

//  });
// numbering.map((item,index)=>{
//     console.log(index,item)   
// })

//..............how to modify the elements from an array (like by multiple divide add,etc)..............//
// const numbering = [20, 15, 45, 87, 01, 54, 25, 52, 11, 12, 21]

// const data=numbering.forEach(element => {
//    console.log(element *10)     
// });
// console.log(Math.floor(numbering[1]))//
// const myFunction=(value)=>{
//      // console.log("this is the ",value)
//      return value + 2
// }
// const numberList=numbering.map(myFunction);
// console.log(numberList)

// const numbering = [20, 15, 45, 87, 01, 54, 25, 52, 11, 12, 21]

// console.log(Math.floor(1.8))

// console.log(Math.floor(Math.random()*101))  //................Math.random() function is used mto return any random number

//.............another way of callback function...////////
// const myFunction = (multiply) => {
//      console.log("multiplication of two numbers is :", multiply)

// }

// const addfunction = (num1, num2) => {
//      let sum = num1 * num2
//      return sum

// }

// const result = addfunction(5, 5)
// myFunction(result)

//............how to solve arithmetic operations...............//
// const arithmetics = {
//      add: (a, b) => {
//           return `${a} + ${b} = ${a + b}`;
//      },
//      subtract: (a, b) => {
//           return `${a} -${b} = ${a - b}`
//      },
//      multiply: (a, b) => {
//           return `${a}*${b} = ${a * b}`
//      },
//      divide: (a, b) => {
//           return `${a}/${b} = ${a / b}`
//      },
// }


// console.log(arithmetics.add(10, 20));
// console.log(arithmetics.subtract(20, 10))
// console.log(arithmetics.multiply(20, 10))
// console.log(arithmetics.divide(20, 10))
// const radius = [4, 10, 12, 3, 15]
// const area = (radius) => {
//      return Math.PI * radius * radius

// }

// const circumference = (radius) => {
//      return Math.PI * 2 * radius
// }

// const diameter = () => {
//      return Math.radius * 2;
// }

// const calculate = (radius, logic) => {
//      const output = [];
//      for (let i = 0; i < radius.length; i++) {
//           output.push(logic(radius[i]));
//      }
//      return output;
// }
// console.log(calculate(radius, area))
// console.log("the circumference having following radius are:", calculate(radius, circumference))
// // console.log("the diameters are:",calculate (radius,diameter))



// let newArr=radius.map((item)=>{
//      const data=Math.PI*2*item
//      console.log(data)
//      return Math.PI*item*item
// })
// console.log("the area of a following radius are:::",newArr)
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const filter = words.filter(words => words.length <= 5)
// console.log(filter)

// const radius = [4, 10, 12, 3, 15]

// const vote =(age)=>{
//      if(age>=18)
//      {
//           console.log("vote permitted")
//      }
//      else {
//           console.log("vote access denied")
//      }

// }
// vote(14)

// const myVote = (age)=>{
//      return age>=18
// }


// function canVote(age) {
//      return age >= 18;
//  }

//  function func() {
//      var filtered = [10,14,12,10,46,43,23].filter(canVote);
//      console.log((filtered));
//  }
// //  func();
// const radius = [4, 10, 12, 3, 15]


// const isEven =(value)=>{
//  return value %2===0     

// }
// const filt=radius.filter(isEven)
// // console.log(filt)
// const sideSquare=[10,24,14,2,5,78]
//   const circumference = (sideSquare) => {
//           return Math.PI * 2 * sideSquare
//      }
// const calculate = (sideSquare, logic) => {
//      const output = [];
//      for (let i = 0; i < sideSquare.length; i++) {
//           output.push(logic(sideSquare[i]));
//      }
//      return output;
// }
// console.log(calculate(sideSquare,circumference))



// const circleData = [5, 4, 8, 7, 9, 6, 5, 10]

// const circleArea = (circleData) => {
//      return Math.PI * circleData * circleData

// }
// const circumference =(circleData)=>{
//      return Math.PI*2*circleData;
// }

// const area = (circleData, logic) => {

//      let output = []
//      for (let i = 0; i < circleData.length; i++) {

//           output.push(logic(circleData[i]))
//      }
//      return output;
// }



// const arr1 = (area(circleData, circleArea))
// console.log(arr1)
// const arr2 = (area(circleData, circumference))
// console.log(arr2)
// // ............how to add two arrays with first element of first array to first element of second element of second array
// const newArray = arr1.map((item, index) => {
//      return item + arr2[index]
// })

// console.log(newArray)
// const newArray = arr1.map((item, index) => {
//      return item / arr2[index]
// })

// console.log(newArray)

// let text = '{"employees":[' +
// '{"firstName":"John","lastName":"Doe" },' +
// '{"firstName":"Anna","lastName":"Smith" },' +
// '{"firstName":"Peter","lastName":"Jones" }]}';
// const obj=JSON.parse(text)
// console.log(obj)

// const list1=[10,5,11,45,100]
// const list2=[20,25,55,41,"12"]

// const finalList=list2.map((item,index)=>{
//      if(list2.length==list1.length){
//      return item*list1[index]
//      }
// })
// console.log(finalList)
// let message = "Hello world!";
// let x = message.toUpperCase();
// console.log(x)

// const data = ["welcome", "everyone", "fake"]
// // const data2=data.map(arr=>
// //      arr.toUpperCase())
// // console.log(data2)

// const arr = data.map((err) => {

//      return err.toUpperCase()
// })

// console.log(arr)

// const  promises=new Promise(function(resolve,reject){
//      const x="Himalayan Mountain";
//      const y="Himalayan Mountains";
//      if(x==y){
//           resolve();          
//      }
//      else{
//           reject()
//      }
// })
// promises.then((function (){
//      console.log("ready to visit")
// })).catch(function(){
// console.log("not able to climb")
// })


// const string = "welcome, back, to,the poius home";
// const newString = string.toUpperCase();
// console.log(newString);
// // console.log(newString.slice(5))
// console.log(newString.substr(4))

// const fun=(...args)=>{
//      let sum =0;
//      for(let a of args){
//           console.log(a)
//      sum +=a

//      }
//      return sum
// }
// let x=fun(10,5,45,87)
// console.log(x)

// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = {...numbersOne, ...numbersTwo};

// console.log(numbersCombined)


// const add = () => {
//     console.log('hello')
// }

// const dd = {
//     a:'a',
//     b:'b',
// }
// const forIn = (...values) => {
//     console.log(values)

//      let sum = 0;
//      for (let x in values) {
//           sum =sum+values[x]
//      }
//      return sum

// }
// const addition = forIn(add, dd)
// console.log(addition)


//...............the difference between the for in and for of is that...
// ..for in iterates the keys of the array or data
// const radius = [20, 10, 14, 15, 70, 30]
// const area = (radius) => {
//      return Math.PI * radius * radius
// }
// const circumference = (radius) => {
//      return Math.PI * 2 * radius
// }
// const diameter = (radius) => {
//      return 2 * radius
// }
// const calculate = (radius, logic) => {
//      let output = [];
//      for (let i = 0; i < radius.length; i++) {
//           output.push(logic(radius[i]))
//      }
//      return output
// }
// console.log(calculate(radius, area))
// console.log("the circumference is", calculate(radius, circumference))
// // console.log(calculate(radius, diameter))

//........how to find the area of a circle unsing one function only.............//
// const radius = [20, 10, 14, 15, 70, 30]
// const areaCircle=(radius)=>{
//      let output=[];
//      for(let i=0;i<radius.length;i++)
//      {
//            output.push(Number(( Math.PI*radius[i]*radius[i]).toFixed(2)))
//      }
//      return output

// }
// console.log(areaCircle(radius))


// const add = (a, b) => {
//      const c = a + b;
//      return c

// }
// console.log("the sum is :", add(4, 5))

// const arithmetic={
//      add:(a,b)=>{

//           return a+b
//      },
//      multiple:(a,b)=>{
//           return a*b
//      },
//      subtract:(a,b)=>{
//           return a-b;
//      },
//      divide:(a,b)=>{
//           return a/b;
//      },

// }

// const calculate=arithmetic.add(40,10);
// console.log(calculate)

//.......HOISTING............//
// let a;
// console.log(a)
// checkHoist("this practice is for")
// function checkHoist(check){
//      a=10
//      console.log(a)
// console.log(`${check} checking for the hoisting function`)
// }

// checkHoist("this practice is for")

// console.log(a)
// function checkHoist(check){
//      let a;a=10
//   console.log(a)

// console.log(`${check} checking for the hoisting function`)
// // return a
// }
// let firstName;
// let lastName
// console.log(`${firstName} + ${lastName}`)
//  firstName="mehdi Hussain";
//  lastName="Malla"
//  console.log(`${firstName}  ${lastName}`)
// function varTest() {
//      let x = 1;
//      {
//        let x = 2;  // same variable!
//        console.log(x);  // 2
//      }
//      console.log(x);  // 2
//    }
//    varTest()

// //.........variable hoisting onluy for var variables
// x = 9
// console.log(x)
// var x;

//........hoisting for the arrow function is not working only working for the simple functions../////    
// myfunc()

// const myfunc=()=>{
// console.log('check hoisting for arrow function')
// }

//............hoisting works for the callback functions also.....//


// myfunc()
// function myfunc() {

//      setTimeout(() => {
//           console.log("welcome to the world")
//      }, 3000);
//      console.log("check for hoisting for simple function")


// }
// const radius = [10, 20, 25]
// function calculate(radius) {
//      let output = [];
//      for (let i = 0; i < radius.length; i++) {
//           output.push(radius[i] * radius[i])
//      }
//      return output
// }
// console.log(calculate(radius))

// const numberOne=[10,21,3,4]
// const numberTwo=[5,6,17,8]
// const newNumber=[...numberOne,...numberTwo]
// console.log(newNumber)


// const sorting=newNumber.sort(function(a,b){
//      return a-b
// })
// console.log(sorting)


//..........how to add multiple arrays of multiple elements ...........//
// const firstArray = [1, 4, 7, 8, 12];
// const secondArray = [20, 10, 30, 50, 1];
// const thirdArray = [20, 10, 30, 50, 4];
// // console.log(typeof firstArray)
// const finalArray = [];
// if (firstArray.length === secondArray.length && thirdArray.length === firstArray.length) {
//      for (let i = 0; i < firstArray.length; i++) {
//           finalArray[i] = firstArray[i] + secondArray[i] + thirdArray[i]
//      }
//      console.log(finalArray)
// }
// else {
//      console.log("length of an array not same")
// }

// const firstArray = [1, 4, 7, 8, 12];
// const secondArray = [20, 10, 30, 50, 1];
// const myFun = (firstArray, secondArray) => {
//      let output = [];
//      if (firstArray.length === secondArray.length) {
//           for (let i = 0; i < firstArray.length; i++) {
//                output[i] = firstArray[i] + secondArray[i]

//           }
//           return output

//      }
//      else {
//           console.log("no matching length ")
//      }
// }

// console.log(myFun(firstArray, secondArray))

// let randomNumber = Math.floor(Math.random()) + 1;
// console.log(randomNumber)

//..........an array is a single object that contains multiple values......//

//.........conversion strings to numbers
// const a = "14";
// console.log(a)
// console.log(typeof a)
// console.log(typeof Number(a))

// const b = "mehdi";
// console.log(b)
// console.log(typeof b)
// console.log(Number(b))

// const abc = "14";
// console.log(abc)
// console.log(typeof abc);
// console.log(typeof String(abc))


// const data = 3 ** 3;
// console.log(data)
// const  array=[]
//  array.push(Math.pow(2,5))
//  console.log(array)

//......how to finnd the same words in an array...////
//   const alphabetic=()=>{
//      const strings=["mehdi", "mehdi","malla","dar"]
//      let newArr= strings.filter(words=>words==="mehdi"
//      )
//      console.log(newArr)
//  }
//  alphabetic()


//.............how to find even or odd using filter function........//
// const data=[2,8,14,16,11,13]
// const evenNumber=(data)=>{

// const output=data.filter(even=>even%2===0)
// console.log(output)
// }
// evenNumber(data)

// const oddNumber =(data)=>{
//      const output=data.filter((odd=>odd%2===1))
//      console.log(output)

// }

// oddNumber(data)
///........................end.........//

// const data = ["mehdi", "mehdi", "malla", "dar"]

// const cal = (data) => {
//      data.map((item) => {
//           if (item === "mehdi") {
//                console.log(item)
//           }
//      })
// }
// cal(data)



// const splitProcess = () => {

//      const details = "how are you today , my dear friend"
//      const x = details.split(" ")   //........split() method is used to return an array of strings that is formed after the splitting method
//      console.log(x)
// }
// splitProcess()

// const array = [124, 254, 140, 548, 1479, 9875, 15546, 12012, 14521, 102369]
// const evenFunction = (array) => {
//      let output = array.filter(num => num % 2 === 0)
//      console.log(output)

// }
// evenFunction(array)

// const oddNumbers=(array)=>{
//      let result=array.filter(odd=>odd%2===1)
//      console.log(result)

// }
// oddNumbers(array)

// const data = ["mehdi", "hussain", "mehdi"]
// console.log(data.includes("mehdi"))  //............includes is used to check whether the specific entry is in the array or in an object../
// const array = [124, 254, 140, 548, 1479, 9875, 15546, 12012, 14521, 102369]

// function evenOdd(array) {
//      const odds=[];
//      array.forEach(element => {
//          if(element % 2 !== 0){
//               odds.push(element) 
//          }
//      });
//      return odds
// }
// console.log(evenOdd(array))
//............find odd even using for loop and if else statement............//
// const myFun = (array) => {
//      for (let i = 0; i < array.length; i++) {
//           if (array[i] % 2 === 0) {
//                console.log("the even numbers are", array[i])
//           }
//           else if (array[i] % 2 === 1) {
//                console.log("the odd numbers are", array[i])
//           }
//           else {
//                console.log("no numbers exist")
//           }
//      }

// }
// myFun(array)

//.....startwith & endswith function is used to return true or false if the passing parameter with functions are in a string
// const data = "where there"
// const d = data.startsWith("where");
// console.log(d)
// console.log(data.endsWith("there"))
// console.log(data.indexOf("there"))  //........indexOf provides the position of a string.../

// const stringType = 'mozilla';
// // console.log(browserType.slice(0, 5)); 
// const update = stringType.replace("moz", "Van"); //........here replace used to replace the prefix of a string...//
// console.log(update)

// raw string which is not assigned to any variable
// let a=-10;
// let c= Math.abs(a)
// console.log(c)
//....math.abs is used to convert negative value into positive value...//
//..............
//how to change the string inputs to the numbers../////////
//...............parseInt ,Number r used to change string into numberic values
// let a="10";
// let b="20";
// let c=parseInt (a)+Number (b)
// console.log(c)

// for loop
// increasing order../////////////////
// const fun=()=>{
//     for (count =0;count <10;count ++)
//     {
//         console.log(count,"welcome")
//     }
//     // ...decrement order......//
//     for (count =10;count >0;count --)
//     {
//         console.log(count,"welcome")
//     }
// }
// fun()

// let a=0
// while (a<20) {
//     console.log(a)

//     a++;
// }

// const fun=()=>{
//     for (count =0;count <10;count ++){
//   if(count ==5)
//   {
//     continue;//...............is used to not to display the output for that conditional statement..//
//   }  
//         console.log(count)
//     }

// }
// fun()


// for (count =0;count <10;count ++){
//     if (count %2==0){
//         continue;  //.........continue is used to skip the specific condition
//     }
//     console.log(count)
// }
// for (count =0;count <10;count ++){
//     if (count==5){
//         break;  //.........break is used to skip the rest of the statements
//     }
//     console.log(count)
// }

// //................check whther an array exists or not

// const arr=["qwerty","roast","polarism"]
// // console.log(Array.isArray(arr))
// //.............Array.isArry  provides a boolean value that a vaiable is an array or not...
// const data=arr.valueOf();
// // console.log(data)
// const formatData=arr.join(" | ");
// console.log(formatData)
// //...............join method is used to provide the formatted data of an array


//.................indexof is used to get the index of an array....//
// let arr=["hey","you","welcome","here"];
// // console.log(arr.indexOf("you"));
// const clock = () => {
//     let date = new Date();
//     let a = date.getHours();
//     let b = date.getMinutes();
//     let c = date.getSeconds();
//     if (a > 12) {
//         a = a - 12;
//         //  console.log(a)
//     }
//     a = a < 10 ? "0" + a : a;
//     b = b < 10 ? "0" + b : b;
//     c = c < 10 ? "0" + c : c;


//     let result = a + ":" + b + ":" + c;
//     console.log(result)
//     setTimeout(clock, 1000);

// }
// clock()

// console.log(Math.ceil(3.0568));  //.......Math.ceil provides the round off only upper value here the result is 4
// console.log(Math.ceil(3.0)); //..............the output will be 3 not 4 
// console.log(Math.floor(3.758)); //...........floor returns the lower value only opp of ceil
// console.log(Math.floor(Math.random() * 10000));//.............this is how to generate the random number
// console.log(Math.ceil(Math.random() * 10000));
// const data = () => {
//  let num = 2;
//     for (let i = 1; i <= 10; i++) {
//         console.log(num + " x " + i + " =", i * num)//..........here nultiples of any num can be printed
//     }
// }
// data()

// const looping = () => {
//     for (let i = 0; i <= 5; i++) {
//         for (let j = 1; j <= i; j++) {
//             console.log("*")

//         }
//         console.log(i)
//     }
// }
// looping()
//.....how to use diffrent objects or elements in an array/////here function works as an object
// const data=["mehdi",90,{name:"hussain"},function(){
//     console.log("malla")
// }]

// console.log(data)

// data[3]()


// const words='my name is mehdi hussain malla';
// console.log(words)

// let data=words.split(" ")//..............split method is used to change a string into an array
// console.log(data)

//...........destrcuturing of an array........................//
// const words='my name is mehdi hussain malla';
//  const data=words.split(" ");
//  let [a,b,c,...d]=data;
// console.log(d)

// const data=[10,12,14,10,2,15];//.........for each data to get the each element 
// //..................also for each contains the annonyms function
// data.forEach(function(value){
//     console.log(value**2)
// })

// const data = [10, 12, 14, 10, 2, 15];
// data.filter((n) => {
//     // if (n % 2 === 0) {
//     //     console.log(n)
//     // }
// })

// let result = data.map((n) => n + 2)
// console.log(result)

// let final = data.reduce((a, b) => a - b)
// console.log(Math.abs(final))//...........math.abs used for changing negative to positve value


// const details =
//     [{ name: "muntazir", address: "payeen", pincode: 190123 },
//     { name: "mehdi", address: "hanjiwera", pincode: 193121 },
//     { name: "hussain", address: "pattan", pincode: 789456 },
//     { name: "malla", address: "kashmir", pincode: 412010 }]

// const fun = (data) => {
//     // console.log(data)
//     let sum = data.map((element, i) => {
//         return element?.name;
//         // console.log(raw, i);
//     })
//     return sum;
// }
// console.log(fun(details))

//............Set() method
//.....set method is used to not to return the duplicate value ....return one elenet if it is multiple times

// const data=new Set("bookkeeper")
// console.log(data)

// const data = new Set();
// data.add(2);
// data.add(10);
// data.add(2);
// data.add("mehdi");
// data.add("Hussain");
// data.add("mehdi");
//  data.forEach((n) => {
//     console.log(n)
// })
// console.log(data.has(2)) //....................has method provides a boolean value and check whether the
//......element is present in an array or set


//......................Map() method...///2nd one

// let map=new Map();
// map.set("mehdi", "hussain")
// map.set("mehdi", "hussain") ////////////.set () is used to add the values but it replaces the duplicate values
// for (let [k,v] of map)
// console.log(k ," : ", v)
// let num = 1;
// function show() {
//     console.log("mehdi", num);
//     num++;
//     show() //.........calling a function inside a function itself it will contineously run and we can check the length of a stack also 
// }
// show()

// swap of two variables using third variable

// let a = 20;
// let b = 10;
// let temp = a;
// a = b;
// b = temp;
// console.log(a, b)

//..........swap of two numbers using array destructuring method

// let a = 20;
// let b = 45;

// [a, b] = [b, a];
// console.log(`the value of a is now ${a} and the value of b is now ${b}`)


// object destructring
//const bioData={
//     name:"mehdi ",
//     address:"hanjiwera ",
//     age:24
// }

// let {name,age,address}=bioData;
// // console.log(age)
// const arr=[1,2,3]
// const arr2=[3,2,45]
// console.log(arr+arr2)
// let a=10;
// let b=20;
// b=b-a;
// a=a+b;
// // [a,b]=[b,a];
// console.log(a,b)

const data = [10, 54, 2, 5, 8, 52];
// console.log(data.sort(function (a, b)
// {
//     return a-b
// }
// ));
// const reverse = (data) =>{
//     const revrs = [] 
//     for (let i = data.length-1; i>=0; i--) {
//         revrs.push(data.pop())

//     }
//     return revrs
// }

// console.log(reverse(datas))


//   console.log(data);

// const sortArr = (data) => {

//     var output = [];
//     var inserted;

//     for (var i = 0, ii = data.length ; i < ii ; i++){
//       inserted = false;
//       for (var j = 0, jj = output.length ; j < jj ; j++){
//         if (data[i] < output[j]){
//           inserted = true;
//           output.splice(j, 0, data[i]);
//           break;
//         }
//       }

//       if (!inserted)
//         output.push(data[i])
//     }

//     return output
// }

// console.log(sortArr(data))
//................how to pass default parameters..............//
// const mult=(a,b=10)=>{
// console.log(a*b)
// }
// mult(4)


//........................passing multiple arguments and use operations.....//

// const operation=(...inputs)=>{
// // console.log(...inputs)
// let data=inputs.filter((item)=>{
//       return item %2===0
//     })
//     console.log(data)
// }
// operation(10,3,5,7,9,10,20)

// const operation = (...inputs) => {
//   // console.log(...inputs)
//   let total = 0;
//   for (let i of inputs) {
//     total += i
//   }
//   console.log(total)
// }
// operation(10, 3, 5, 7, 9, 10, 20)






































































