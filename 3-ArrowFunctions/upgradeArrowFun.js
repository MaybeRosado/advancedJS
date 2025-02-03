// 'use strict';

//  Function 1
// const fn1 = function ( a, b ) {
//   b++;
//   a++;
//   return a + b;
// };

//  Function 2
// const fn2 = function ( a, b ) {
//   return a * b;
// };

//  Function 3
// const fn3 = function ( a ) {
//   a = a * a;
//   return a + a;
// };

//  Function 4
// const fn4 = function () {
//   let a = 10;
//   a = a * a;
//   return a + a;
// };

//  Function 5
// const fn5 = function ( a ) {
//   return { prop1: a };
// };


//Arrow functions

let fn1 = (a, b) => { return a+ b};

let fn2 = (a, b) => a * b;

let fn3 = a => {
    a = a * a;
   return a + a;
 };

const fn4 = () => {
  let a = 10;
  a = a * a;
  return a + a;
};

const fn5 = ( a ) => ({ prop1: a });

console.log( fn1( 7, 10 ) );
console.log( fn2( 5, 10 ) );
console.log( fn3( 5 ) );
console.log( fn4() );
console.log( fn5( 5 ) );

