//1)question
//anonymous function
//odd numbers
// var arr = [2,3,4,5,6,7,8,9,10]
// var result =[];
// var odd = function(arr){
//      for(var i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//            result.push(arr[i]);
//         }
//     }
//     return result;
// }
// console.log(odd(arr));
//output:-
//[3, 5, 7, 9]
//======================================================================

// 2)title caps in a string array
// var titleCase= function(st) {
//   return st.split(" ").reduce( (s, c) => s +""+(c.charAt(0).toUpperCase() + c.slice(1) +" "), '');
// }
// console.log(titleCase("kumaresan for guvi"));
//output:-
//Kumaresan For Guvi 
//======================================================================
 
//3)Sum of all numbers in an array
// var str= function(arr)
//  {
//   let sum = 0;
//   for (const item of arr) {
//     sum += item;
//   }
//   return sum;
// }
// console.log(str([1, 2,3,4,5,6,7]));
//output:-
//28
//=====================================================================

//4) prime numbers in an array
//  var num= function(a){
//   a =a.filter((ele)=>{
//     for (var i=2;i<=Math.sqrt(ele);i++)
//     {
//       if(ele%i===0)return false;
//     } 
//     return true;
//   })
//   return a;
//  }
//  console.log(num([2,3,4,5,6,7,8,9]));

//output
//[2, 3, 5, 7]
//=========================================================================

//5)palindromes in an array
// var palindrome= function(words){
// var arr = [];
// var str = words.slice(0);
// var pal = str.toString().split("").reverse().join("").split(",");
// for (let i = 0; i < words.length; i++) {
//   for (let k = 0; k < pal.length; k++) {
//     if (words[i] == pal[k]) {
//       arr.push(words[i])
//     }
//   }
// }
// return arr;
// }
// console.log(( palindrome)(['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip']));
//output:-
//['racecar', 'pineenip']
// ======================================================================
//6)median of two sorted arrays of the same size

//7)Remove duplicates from an array


// var num=function(arr) {
// return arr.filter((item,
// index) => arr.indexOf(item) === index);
// }
// console.log(num( ["apple", "mango", "apple","orange", "mango", "mango"]));
//output:-
//['apple', 'mango', 'orange']
//=============================================================

     

//8)Rotate an array by k times
// var rotate =function (a,k) {
//     for (var i=0;i<k;i++)
//     {
//       a.unshift(a.pop())
//     }
//     return a;
//   }
//   console.log(rotate([1,2,3,4,5,6,7],4));
//output:-
//[4, 5, 6, 7, 1, 2, 3]
//===================================================================
//=====================================================================
//IIFE function

//odd numbers
// ( function odd(arr){
//   var result =[];
//      for(var i=0;i<arr.length;i++){
//         if(arr[i]%2!=0){
//            result.push(arr[i]);
//         }
//     }
//    console.log( result);
// }
// )([2,3,4,5,6,7,8,9,10])
//output:-
//[3, 5, 7, 9]
//======================================================================

// 2)title caps in a string array
// var titleCase= function(st) {
//   return st.split(" ").reduce( (s, c) => s +""+(c.charAt(0).toUpperCase() + c.slice(1) +" "), '');
// }
// console.log(titleCase("kumaresan for guvi"));
//output:-
//Kumaresan For Guvi 
//======================================================================
 
//3)Sum of all numbers in an array
// ( function str(arr)
//  {
//   let sum = 0;
//   for (const item of arr) {
//     sum += item;
//   }
//   console.log( sum);
// }
// )([1, 2,3,4,5,6,7])
//output:-
//28
//=====================================================================

//4) prime numbers in an array
//  ( function num(a){
//   a =a.filter((ele)=>{
//     for (var i=2;i<=Math.sqrt(ele);i++)
//     {
//       if(ele%i===0)return false;
//     } 
//     return true;
//   })
//  console.log (a);
//  })
// ([2,3,4,5,6,7,8,9])

//output
//[2, 3, 5, 7]
//=========================================================================

//5)palindromes in an array
// (function palindrome(words){
// var arr = [];
// var str = words.slice(0);
// var pal = str.toString().split("").reverse().join("").split(",");
// for (let i = 0; i < words.length; i++) {
//   for (let k = 0; k < pal.length; k++) {
//     if (words[i] == pal[k]) {
//       arr.push(words[i])
//     }
//   }
// }
// console.log (arr);
// }
// )(['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'])
//output:-
//['racecar', 'pineenip']
// ======================================================================
//6)median of two sorted arrays of the same size


//7)Remove duplicates from an array

 
//=============================================================

     

//8)Rotate an array by k times
//(function rotate (a,k) {
//     for (var i=0;i<k;i++)
//     {
//       a.unshift(a.pop())
//     }
//     console.log(a);
//   }
//   ([1,2,3,4,5,6,7],4)
//output:-
//[4, 5, 6, 7, 1, 2, 3]
//===================================================================

//===============================================================
//arrow function
//1)odd number
// var odd = (arr)=>{
//   var result =[];
//       for(var i=0;i<arr.length;i++){
//           if(arr[i]%2!=0){
//              result.push(arr[i]);
//           }
//       }
//       return result;
// }
// console.log(odd([12,13,14,15,17,19,21]))
//====================================================

//2)string arry
// var arr=(str)=>
//  {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// }

// console.log(arr("kumaresan for guvi"]));
//====================================================================
//3)Sum of all numbers in an array
// var str=(arr)=>
//  {
//   let sum = 0;
//   for (const item of arr) {
//     sum += item;
//   }
//   return sum;
// }
// console.log(str([1, 2,3,4,5,6,7]));
//=========================================================================
//4) prime numbers in an array
// var num= (a)=>{
//   a =a.filter((ele)=>{
//     for (var i=2;i<=Math.sqrt(ele);i++)
//     {
//       if(ele%i===0)return false;
//     } 
//     return true;
//   })
//   return a;
//  }
//  console.log(num([2,3,4,5,6,7,8,9]));


//================================================================================

//5)palindromes in an array
// var palindrome=(words)=>{
// var arr = [];
// var str = words.slice(0);
// var pal = str.toString().split("").reverse().join("").split(",");
// for (let i = 0; i < words.length; i++) {
//   for (let k = 0; k < pal.length; k++) {
//     if (words[i] == pal[k]) {
//       arr.push(words[i])
//     }
//   }
// }
// return arr;
// }

// console.log(( palindrome)(['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip']));