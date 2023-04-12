// 1. Write a function that uses reduce to calculate the total amount of money earned by the restaurant from all the orders. Assume that each item costs $10.


// const orders = [
//   { tableNumber: 1, items: ['burger', 'fries', 'soda'] },
//   { tableNumber: 2, items: ['pizza', 'salad', 'water'] },
//   { tableNumber: 3, items: ['sandwich', 'soup', 'coffee'] },
// ];

// const revenue = arr => arr.reduce(((accumulator,{items}) => accumulator + items.length * 10),0);
// console.log(revenue(orders))
// output - 90


// 2. Write a function that uses reduce to find the user who has the most number of friends.
// const users123 = [
//     { id: 1, name: 'Alice', friends: ["Bob", "Charlie", "David"] },
//     { id: 2, name: 'Bob', friends: ["Alice", "Charlie", "Eve"] },
//     { id: 3, name: 'Charlie', friends: ["Alice", "Bob", "David", "Eve"] },
//     { id: 4, name: 'David', friends: ["Alice", "Charlie"] },
//     { id: 5, name: 'Eve', friends: ["Bob", "Charlie"] },
// ]

// const mostFriends = arr => {
//   const obj = arr.reduce(((accumulator, currentValue) => {
//   if (currentValue.friends.length > accumulator.friends.length) {
//     return currentValue;
//   }
//   return accumulator;
// }));
// return obj.name;
// }
// console.log(mostFriends(users123));


// 3. Write a function that uses reduce to calculate the total revenue generated by the store from all the orders. Assume that the revenue from each order is the sum of the prices of all the items in the order.

// const orders1 = [
//     { id: 1, items: [{ name: 'book', price: 10 }, { name: 'pen', price: 2 }] },
//     { id: 2, items: [{ name: 'shirt', price: 20 }, { name: 'pants', price: 30 }] },
//     { id: 3, items: [{ name: 'hat', price: 15 }, { name: 'socks', price: 5 }] },
// ];

// const innerArray = arr => arr.reduce(((accumulator,{price}) => accumulator + price),0);

// const result = arr => arr.reduce(((accumulator,{items}) => innerArray(items) + accumulator),0);

// console.log(result(orders1));


// 4. Write a function that uses reduce to calculate the total revenue generated by the company from all the sales. Assume that the revenue from each sale is the product of the amount and price.
// const sales = [
//   { product: 'apple', amount: 100, price: 1 },
//   { product: 'banana', amount: 200, price: 0.5 },
//   { product: 'orange', amount: 300, price: 0.75 },
//   { product: 'grape', amount: 400, price: 0.4 },
// ];
// const revenue = arr => arr.reduce(((accumulator,{amount,price}) => accumulator + amount * price),0);
// console.log(revenue(sales));


// 5. Write a function that uses reduce to calculate the total amount of money earned by the restaurant from all the orders.
// const foodPrices = {
//     burger: 50, 
//     fries: 30,
//     soda: 8, 
//     pizza: 60, 
//     salad: 10, 
//     water: 2,
//     sandwich: 30, 
//     soup: 10, 
//     coffee: 100
// }
// const orderss = [
//     { tableNumber: 1, items: ['burger', 'fries', 'soda'] },
//     { tableNumber: 2, items: ['pizza', 'salad', 'water'] },
//     { tableNumber: 3, items: ['sandwich', 'soup', 'coffee'] },
// ];

// const revenue = (order,foodprice) => order.reduce(((accumulator,{items}) => accumulator + items.reduce(((accumulator,currentValue) => accumulator + foodprice[currentValue]),0)),0);
// console.log(revenue(orderss,foodPrices));


// 6. Given an array of objects representing books, where each object has a title property, an author property, and a price property, write a function that returns the total price of all the books written by a given author.

// const books = [
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 9.99 },
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 7.99 },
//   { title: '1984', author: 'George Orwell', price: 10.99 },
//   { title: 'Animal Farm', author: 'George Orwell', price: 8.99 },
// ];

// const totalPrice = (arr,givenAuthor) => arr.reduce(((accumulator, {author,price}) => givenAuthor === author ? accumulator + price : accumulator ),0);
// console.log(totalPrice(books,'George Orwell'));


// 7. Given an array of strings, write a function that returns an object representing the frequency of each character in the array. The keys of the object should be the characters themselves, and the values should be the number of times the character appears in the array.

// const strings = ['apple', 'banana', 'cherry'];

// const innerLoop = str => str?.split("").reduce(((accumulator,currentValue) => ({...accumulator, [currentValue] : (accumulator[currentValue] ?? 0) +1})),{});

// const outerLoop = arr => arr.reduce(((accumulator,currentValue) => {
//   const obj = innerLoop(currentValue);
//   for(let key in obj) {
//   accumulator[key] = obj[key] + (accumulator[key] ?? 0);
//   }
//   return accumulator;
// }),{})

// console.log(outerLoop(strings));


// 8. Given an array of objects representing employees, where each object has a name property, a department property, and a salary property, write a function that returns an object representing the total salary of each department. The keys of the object should be the department names, and the values should be the total salaries of all employees in that department.

// const employees = [
//   { name: 'Alice', department: 'Sales', salary: 50000 },
//   { name: 'Bob', department: 'Sales', salary: 60000 },
//   { name: 'Charlie', department: 'Marketing', salary: 55000 },
//   { name: 'David', department: 'Sales', salary: 70000 },
//   { name: 'Eve', department: 'Marketing', salary: 65000 },
// ];

// const totalSalary = arr => arr.reduce(((accumulator,{department,salary}) => {
//   return {...accumulator, [department] : (accumulator[department] ?? 0) + salary}
// }),{})

// console.log(totalSalary(employees));


// 9. Given an array of objects representing people, where each object has a name property and an age property, write a function that returns the name of the oldest person.

// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 20 },
//   { name: 'David', age: 35 },
// ];

// const oldestPerson = arr => {
//   const oldest = arr.reduce(((accumulator,currentValue) => {
//     accumulator = accumulator.age < currentValue.age ? currentValue : accumulator;
//     console.log(accumulator,currentValue)
//     return accumulator;
//   }));
//   return oldest.name;
// }
// console.log(oldestPerson(people));


// 10. Given an array of strings, write a function that returns the total number of characters in all the strings that start with the letter "A". 

// const strings = ['Apple', 'Aardvark', 'Banana', 'Cat'];

// const result = arr => {
//   const stringWithA = arr.filter(str => str[0] === "A");
//   const length = stringWithA.reduce(((accumulator,currentValue) => accumulator + currentValue.length),0);
//   return length;
// }
// console.log(result(strings));


// 11. Given an array of natural numbers, write a function that returns the second-largest number without using sort.

// const numbers = [10, 2, 7, 14, 5];

// const largest = arr => arr.reduce(((accumulator,currentValue) => accumulator < currentValue ? currentValue : accumulator),0);

// const result = arr => {
//   const largestElement = largest(arr);
//   const index = arr.indexOf(largestElement);
//   arr.splice(index,1);
//   const secondLargest = largest(arr);
//   return secondLargest;
// }

// console.log(result(numbers));


// 12. Given an array of numbers, write a function that returns the difference between the largest and smallest numbers.

// const numbers = [10, 2, 7, 14, 5];

// const largest = arr => arr.reduce(((accumulator,currentValue) => currentValue > accumulator ? currentValue : accumulator));

// const smallest = arr => arr.reduce(((accumulator,currentValue) => currentValue < accumulator ? currentValue : accumulator));

// const result = arr => {
//   const largestNumber = largest(arr);
//   const smallestNumber = smallest(arr);
//   return largestNumber - smallestNumber;
// }
// console.log(result(numbers));


// 13. Given an array of objects representing students, where each object has a name property and a grades property (an array of numbers), write a function that returns an array of objects representing the students who have an average grade of at least 90. 

// const students = [
//   { name: 'Alice', grades: [90, 95, 92] },
//   { name: 'Bob', grades: [80, 85, 87] },
//   { name: 'Charlie', grades: [92, 88, 94] },
//   { name: 'David', grades: [75, 80, 82] },
// ]

// const averageAbove90 = arr => {
//   const result = arr.reduce(((accumulator,currentValue) => {
//     const sum = currentValue.grades.reduce(((accumulator1,currentValue1) => accumulator1 + currentValue1),0);
//     accumulator = sum/currentValue.grades.length > 90 ? [...accumulator,currentValue] : accumulator;
//     return accumulator;
//   }),[])
//   return result;
// }

// console.log(averageAbove90(students));


// 14. Given an array of strings, write a function that returns an array of objects representing each unique string and its frequency in the original array.

// const strings = ['apple', 'banana', 'apple', 'cherry'];

// const result = arr => arr.reduce(((accumulator,currentValue) => ({...accumulator, [currentValue] : (accumulator[currentValue] ?? 0) +1})),{});
// console.log(result(strings));


//15. Given an array of objects representing books, where each object has a title property and a year property, write a function that returns the titles of all books published before the year 2000, sorted alphabetically.

// const books = [
//   { title: 'The Great Gatsby', year: 1925 },
//   { title: 'To Kill a Mockingbird', year: 1960 },
//   { title: 'One Hundred Years of Solitude', year: 1967 },
//   { title: 'The Catcher in the Rye', year: 1951 },
//   { title: 'Beloved', year: 1987 },
//   { title: 'Brave New World', year: 1932 },
// ];

// const result = arr => {
//   const result1 = arr.reduce(((accumulator, {title,year}) => year < 2000 ? [...accumulator,title] : accumulator),[]);
//   return result1.sort();
// }

// console.log(result(books));


// 16. Write a program to find out the maximum and minimum number in an array by using only one reduce method

// const numbers = [3,5,6,1,14];

// const result = arr => {
//   return arr.reduce(((accumulator,currentValue) => {
//     accumulator.min =  accumulator.min > currentValue ? currentValue : (accumulator.min ?? currentValue);
//     accumulator.max = accumulator.max < currentValue ? currentValue : (accumulator.max ?? currentValue);
//     return accumulator;
//   }),{min: null, max:null});
// }
// console.log(result(numbers));