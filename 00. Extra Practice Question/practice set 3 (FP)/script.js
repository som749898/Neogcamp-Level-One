// 1. Given an array of strings, return a single string that contains all the elements of the array concatenated together with a space between each element.

// const words = ["Hello", "world", "how", "are", "you"];
// const sentence = words => words.reduce(((accumulator,currentValue) => `${accumulator} ${currentValue}`),"");
// console.log(sentence(words));
// expected output: "Hello world how are you"


// 2. Given an array of objects representing products, return the total cost of all the products. Each product object has a price property and a quantity property.

// const products = [
//     { name: "apple", price: 0.5, quantity: 2 },
//     { name: "banana", price: 0.3, quantity: 5 },
//     { name: "orange", price: 0.8, quantity: 3 },
// ];
// const totalPrice = arr => arr.reduce(((accumulator,{price,quantity}) => accumulator + price * quantity),0);
// console.log(totalPrice(products));
// expected output: 4.9


// 3. Given an array of arrays, return a single array that contains all the elements of the nested arrays.

// const array = [[1, 2], [3, 4], [5, 6]];
// const combinedArray = arr => arr.reduce(((accumulator,currentValue) => [...accumulator, ...currentValue]),[]);
// console.log(combinedArray(array));
// expected output: [1, 2, 3, 4, 5, 6]


// 4. Given an array of objects representing books, return the total number of pages in all the books. Each book object has a title property and a pages property.

// const books = [
//     { title: "Harry Potter", pages: 600 },
//     { title: "Lord of the Rings", pages: 1000 },
//     { title: "The Hobbit", pages: 300 },
// ];
// const totalPages = arr => arr.reduce(((accumulator,{pages}) => accumulator + pages),0);
// console.log(totalPages(books));
// expected output: 1900


// 5. Given an array of strings, return an object that shows how many times each string appears in the array. The keys of the object should be the unique strings in the array, and the values should be the number of times each string appears.

// const wordArr = ["apple", "banana", "apple", "orange", "banana", "pear"];
// const result = arr => arr.reduce(((accumulator,currentValue) => ({...accumulator,[currentValue] : (accumulator[currentValue] ?? 0) +1 })),{});
// console.log(result(wordArr));
// expected output: { apple: 2, banana: 2, orange: 1, pear: 1 }


// 6. Given an array of numbers, return an object that shows the frequency of each number in the array. The keys of the object should be the unique numbers in the array, and the values should be the number of times each number appears.

// const numberArray = [1, 2, 3, 1, 2, 1, 3, 3, 3, 2];
// const result = arr => arr.reduce(((accumulator,currentValue) => ({...accumulator,[currentValue] : (accumulator[currentValue] ?? 0) +1})),{});
// console.log(result(numberArray));
// expected output: { 1: 3, 2: 3, 3: 4 }


// 7. Write a function to create a new array of objects that include the name and length of each string in the input array.

// const arayOfStr = ["apple", "banana", "pear"];
// const result = arr => arr.reduce(((accumulator,currentValue) => [...accumulator, {name: currentValue, length: currentValue.length}]),[]);
// console.log(result(arayOfStr));
// Expected output: [{ name: "apple", length: 5 }, { name: "banana", length: 6 }, { name: "pear", length: 4 }]


// 8. Write a function to return an array of all the strings in the input array that contain the letter "a".

// const arrayStr = ["apple", "banana", "pear", "orange", "kiwi"];
// const result = arr => arr.filter(str => {
//   for(let i=0; i< str.length; i++) {
//     if(str[i] === "a"){
//       return true;
//     }
//   }
//   return false;
// })
// console.log(result(arrayStr));
// Expected output: ["apple", "banana", "orange"]


// 9. Write a function to return an array of all the user objects in the input array that have an email property.

// const users = [
//     { id: 1, name: "Alice", email: "alice@example.com" },
//     { id: 2, name: "Bob" },
//     { id: 3, name: "Charlie", email: "charlie@example.com" },
// ];
// const result = arr => arr.filter(({email}) => email !== undefined ? true : false);
// console.log(result(users));
// Expected output: [{ id: 1, name: "Alice", email: "alice@example.com" }, { id: 3, name: "Charlie", email: "charlie@example.com" }]


// 10. Write a function to return an array of all the words in the input array that end with the letter "e".

// const arry = ["apple", "banana", "pear", "orange", "kiwi"];
// const result = arr => arr.filter(str => str[str.length-1] === "e");
// console.log(result(arry));
// Expected output: ["apple", "orange"]

// 11. Given an array of numbers, write a function that returns the sum of the cubes of all odd numbers in the array.

// const numbers = [1, 2, 3, 4, 5];
// const result = arr => arr.reduce(((accumulator,currentValue) => currentValue%2 !== 0 ? accumulator + Math.pow(currentValue,3) : accumulator),0);
// console.log(result(numbers));
// Expected output: 153