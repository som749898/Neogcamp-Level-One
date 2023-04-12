// 1. Given an array of strings, write a function that returns the total number of characters in all the strings that start with the letter "A"

// const strings = ['Apple', 'Aardvark', 'Banana', 'Cat'];
// Your ES6 code here
// const stringLength = (arr) => arr.reduce(((accumulator,currentValue) => currentValue.charAt(0) === "A" ? accumulator + currentValue.length : accumulator),0);

// console.log(stringLength(strings));
// Output: 13

// 2. Given an array of objects representing people, where each object has a name property and an age property, write a function that returns the name of the oldest person.

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 20 },
//   { name: 'David', age: 35 },
// ];

// const callbackFunc = (accumulator, currentValue) => currentValue.age > accumulator.age ? currentValue : accumulator;
// // Your ES6 code here
// const oldestPerson = arr => {
//   const result = arr.reduce(callbackFunc);
//   return result.name;
// }
// console.log(oldestPerson(people));
// Output: David


// 3. Given an array of numbers, write a function that returns the sum of all the even numbers.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// // Your ES6 code here
// const sum = arr => arr.reduce(((accumulator,currentValue) => currentValue % 2 === 0 ? accumulator + currentValue : accumulator),0);
// console.log(sum(numbers));
// Output: 20

// 4. Given an array of objects representing people, use the reduce function to find the average age of all the people.

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 },
//   { name: 'Dave', age: 40 }
// ];
// const avaerage = arr => {
//   const sum = arr.reduce(((accumulator,currentValue) => accumulator + currentValue.age),0);
//   return sum/arr.length;
// }
// console.log(avaerage(people));
// Output: 32.5


// 5. Given an array of voters, objects count how many people voted using reduce.
// var voters = [
//     {name:'Bob', age: 30, voted: true},
//     {name:'Jake', age: 32, voted: true},
//     {name:'Kate', age: 25, voted: false},
//     {name:'Sam', age: 20, voted: false},
//     {name:'Phil', age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami', age: 54, voted: true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

// const countVoters = arr => arr.reduce(((accumulator,currentValue) => currentValue.voted ? accumulator+1 : accumulator),0);
// console.log(countVoters(voters));
// // Output: 7


// 6. Given an array of numbers, write a function that returns the difference between the largest and smallest numbers.
// const numbers = [10, 2, 7, 14, 5];
// const difference = arr => {
//   const largest = arr.reduce(((accumulator,currentValue) => accumulator < currentValue ? currentValue : accumulator));
//   const smallest =  arr.reduce(((accumulator,currentValue) => accumulator > currentValue ? currentValue : accumulator));
//   return largest - smallest;
// }
// console.log(difference(numbers));
// Output: 12


// 1. function first() {
//   console.log('First function called');
// }
// function second() {
//   first();
//   console.log('Second function called');
// }
// second();

// Output: 
// First function called
// Second function called


// 2. function outer() {
//   console.log('Outer function called');
//   inner();
// }
// function inner() {
//   console.log('Inner function called');
// }
// outer();

// Output: 
// Outer function called
// Inner function called


// 3. function first() {
//   console.log('First function called');
// }
// function second() {
//   first();
//   console.log('Second function called');
//   third();
// }
// function third() {
//   console.log('Third function called');
// }

// second();

// Output:
// First function called
// Second function called
// Third function called


// 4. function first() {
//   console.log('First function called');
//   second();
// }
// function second() {
//   console.log('Second function called');
//   third();
// }
// function third() {
//   console.log('Third function called');
// }
// first();

// Output:
// First function called
// Second function called
// Third function called


// 5. function a() {
//   console.log('a');
//   b();
//   console.log('a done');
// }
// function b() {
//   console.log('b');
//   c();
//   console.log('b done');
// }
// function c() {
//   console.log('c');
// }
// a();

// Output:
// a
// b
// c
// b done
// a done


// 6. function add(a, b) {
//   console.log(`adding ${a} and ${b}`);
//   return a + b;
// }
// function multiply(a, b) {
//   console.log(`multiplying ${a} and ${b}`);
//   return a * b;
// }
// function calculate(a, b, c) {
//   console.log('calculating...');
//   return add(multiply(a, b), c);
// }
// const result = calculate(2, 3, 4);
// console.log(result);

// Output:
// calculating...
// multiplying 2 and 3 
// adding 6 and 4
// 10