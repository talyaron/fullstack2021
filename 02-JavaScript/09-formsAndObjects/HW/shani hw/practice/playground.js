// // vars 

// var z = 1 // int
// var x = 1.2 //Float
// var y = "LOL MAZ WAS HERE" // string
// var w = 'w' // CHAR
// var b = true // boolean
// var l = [1, 2, 3] // list / array
// var l2 = [[1,2], [3,4], [5,6,7,8]]
// var d = {ab: 12, shani: "cool"} // dict / object

// var my_box = "hello world"


// // cond

// var x = 1
// var y = 1

// var our_bool = (x == y)

// console.log(our_bool)

// if (x==y) 
// {
//     console.log("hello shani")
// }
// else
// {
//     console.log("bye shani")
// }


// ex1 
// get 2 numbers from user (via prompt)
// add the 2 numbers
// and alert the result



// ex2: calc

// alert("Welcome to Shani's calculator")

// let firstNum=prompt("enter shit:")
// let op=prompt("enter operator[+_/_-_*]")
// let secondNum=prompt("enter second shit:")

// let result="";


// if(op=="/"){
//     result = firstNum / secondNum
// }else if(op=="+"){
//     result = firstNum + secondNum   
// } else if(op=="-"){
//     result = firstNum - secondNum
// } else if(op=="*"){
//     result = firstNum * secondNum
// } else{
//     result= "cant do that"
// }


// alert(result)

// while loops
// for loops

// let i = 5
// while (i < 5)
// {
//     console.log("hi", i)
//     i = i + 1
// }


// for(let i=0; i<5; i++)
// {
//     console.log("hello", i)
// }


// ex3
// take a number 
// print all the numbers until this num
// num: 5 -> 1, 2, 3, 4, 5

// let num=prompt("shit?:");
// let result = " "
// for (let i=1;i<=num;i++)
// {
//     if(i<num)
//     {
//         result = result + i + ", "
//     }else if(i=num){
//         result = result + i 
//     }
// }
// console.log(result)



// // ex3.5
// let num=10;
// let result=""
// for(let i=0;i<=num;i++){
//     if(i==num){

//         result = result + i
    
        
//     } else if(i%2==0){
        
//         result = result + i + ", "
//     }    
    
// }
// console.log(result)


// ex4 :
// take a number from user
// print star triangle
// num: 3
// *
// **
// ***

// let num=3;
// let result=""
// for(let i=0;i<num;i++){
//     result = ""
//     for(let j=0;j<=i;j++){
//         result+="*" 
//     }
//     console.log(result)    
// }
// result=""

// for(let i=0;i<2;i++){
//     result+="*" 
// }
// console.log(result)
// result=""

// for(let i=0;i<3;i++){
//     result+="*" 
// }
// console.log(result)



// // 1
// // 12
// // 123
// // 1234

// let num=5
// let result=""


// for(let i=1;i<num;i++)
// { 
    
 
//     result=result+i
    
 
//     console.log(result)
// }
// console.log("End")































// let numOfStars=5
// let solution=""

// for(i=0;i<numOfStars;i++){
//     solution=solution+"*"

//     console.log(solution)
// }

// //the first exercise he gave with the stars
// let num=3;
// let result=""
// for(let i=0;i<num;i++){
//     result = ""
//     for(let j=0;j<=i;j++){
//         result+="*" 
//     }
//     console.log(result)    
// }
// result=""


//multipication table

let num=10;
//let result=0

for(i=0;i<num;i++){

    let result=1
    

    for(j=0;j<num;j++){
        
        result=j*i
       
    }
    
    console.log(result)
}























