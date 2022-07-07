'use strict';


let data1 = prompt('enter operand 1 data');
let data2 = prompt('enter operand 2 data');

let num = Number(data1);
let num2 = Number(data2);

console.log(typeof (num));
console.log(typeof (num2));



function sum (){
  alert(`Результат ${num} + ${num2}=` + (num + num2));
}
sum();


function calc(){
  alert(`Результат ${data1} - ${data2}=` + (data1 - data2));
}
calc();


function get (){
  alert(`Результат ${data1} * ${data2}=` + (data1 * data2));
}
get();

function get2 (){
  alert(`Результат ${data1} / ${data2}=` + (data1/data2));
}
get2();








