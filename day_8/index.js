// age=5;
// console.log(age)

// function sum (a,a,b)
// {
//     return a+a+b;
// }
'use strict'
//NOTE USE STRICT MODE ;

// age = 5 ;
// console.log(age)

// function sum(a,a,b){
//     return a+a+b ;
// }

// console.log(sum(1,2,3))

//NOTE TYPE OF CONSOLE ;

console.error("this is an error") ;
console.warn('this is a warning');

//using console.time you can calculate the time of any operation
console.time('timeStamp');
console.log('hello')
console.timeEnd('timeStamp') ;

//NON PRIMITIVE DATA TYPES ;

const fruits = ['mango', 'papaya','grapes', 'guava','orange'] ; 
console.log(fruits.length)//5 
//last index 4 ; 5-1 
console.log(fruits[0]);
console.log(fruits[fruits.length-1])

//NOTE PUSH METHOD 
//REVIEW - ADD AN ELEMENT TO THE END OF THE ARRAY ,
//REVIEW ALWAYS RETURNS THE LENGTH OF NEW ARRAY 
//REVIEW IT MUTATES THE ORIGINAL ARRAY
const pushOutput = fruits.push('blueberry') ;

console.log(pushOutput);
console.log(fruits);
