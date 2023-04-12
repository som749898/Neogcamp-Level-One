// Question - https://swetaagarwalla.notion.site/swetaagarwalla/Questions-from-MAs-session-e39d57b352cf42ac9b33546d44be545e

// 1. function sum(a,b) {
// 	console.log(a, b)
// }
// sum(1,2,3,4)

// Ans- 1 2

// 2. function sum(a,...b, c) {
// 	console.log(a, b, c)
// }
// sum(1,2,3,4)

// Ans- 1 , [2,3,4], error

// 3. function sum(a,...b) {
// 	console.log(a, b)
// }
// sum(1,2,3,4)

// Ans- 1 , [2,3,4]

// 4. function sum(arr) {
// 	const [a,,,b] = arr;
// 	console.log(a,b)
// }
// sum([1,2,3,4])

// Ans- 1  4

// 5. function sum(arr) {
// 	const arr1 = [...arr];
// 	arr[4] = 5;
// 	console.log(arr, arr1)
// }
// sum([1,2,3,4])

// Ans- [1,2,3,4,5] , [1,2,3,4]

// 6. console.log(a);
// console.log(b);
// var a = 10;
// let b = 20;

// Ans- undefined, error - can not access before initialization

// 7. console.log(a);
// console.log(b);
// {
// 	console.log(b);
// 	var a=10;
// 	let b=15;
// }

// Ans- undefined, error- not defined, error- initialization
// var checks in the whole function scope

// As in line 47, variable b is not present in the current scope, also in the inner scope a new variable b is declared which can be accessed in that scope only. So it will output Reff error - not defined.


// 8. console.log(a);
// function sum() {
// 	var a = 10;
// }
// sum();

// Ans- error - not defined
// sum function is not consoled so no output.


// 9. var num = 8;
// var num = 10;
// console.log(num);

// Ans- 10


// 10. var a = 10;
// var b = a;
// b = 20;
// console.log(a);
// console.log(b);

// Ans- 10, 20


// 11. var x = 10;
// if (x === 10) {
// 	var x = 20;
// 	console.log(x);
// }
// console.log(x);

// Ans- 20, 20
// because var is functioned scope, its variable can be accessed beyond the block scope.


// 12. console.log(a);
// let b = 30;
// function sum() {
// 	var a=10;
// 	console.log(b);
// 	function sub() {
// 		console.log(c);
// 		console.log(d);
// 		console.log(e);
// 		var c = 10;
// 		let d = 30;
// 	}
// 	var e = 40;
// 	sub();
// };
// sum();

// Ans- error - not defined, 30, undefined, error- initialization, 40.

// Varaible of upper scope can be accessed in the lower scope untill same variable is declared in that scope.


// 13. let x = 10;
// function foo() {
// 	console.log(x);
// }
// function bar() {
// 	let x = 20;
// 	foo();
// }
// bar();

// Ans- 20 search for global variable


// 14. let x = 10;
// let y = 20;
// function foo() {
// 	let x = y = 30;
// }
// foo();
// console.log(x, y);

// Ans- 10 , 30


// 15. const [x = 2, y = 4, z = 6] = [10];
// console.log(x);
// console.log(y);
// console.log(z);

// Ans- 10, 4, 6


// 16. const obj = {
// 	name: "Ram",
// 	age: 21,
// }
// const {name: myName} = obj;
// console.log(myName);

// Ans- Ram


// 17. const obj = {
// 	country: "India",
// 	playerDetails: {
// 		name: "Virat",
// 		age: 33
// 	},
// }
// const {playerDetails: {age: myAge=30, position: myPosition=3}}= obj;
// console.log(myAge, myPosition);

// Ans- 33, 3


// 18. const obj = { 'firstName': 'Elon', 'lastName': 'Musk' };
// const country = 'USA';
// const newObj = { ...obj, country, companies: ['Paypal', 'Tesla', 'SpaceX'] };
// console.log(newObj);

// Ans- { 'firstName': 'Elon', 'lastName': 'Musk', country : 'USA', companies: ['Paypal', 'Tesla', 'SpaceX'] }