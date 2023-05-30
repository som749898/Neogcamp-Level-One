// 1. Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

// const delayedGreeting = () => {
//   setTimeout(() => console.log("Hello, welcome to my portfolio!"),2000);
// }

// delayedGreeting();


// 2. Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

// const delayedAddition = (num1, num2) => {
//   setTimeout(() => console.log(num1+num2),4000);
// }

// delayedAddition(2, 3);


// 3. Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout. You can practice this question in any JS editor or your browser console.

// const delayedAlert = (msg,time) => {
//   setTimeout(() => alert(msg),time);
// }

// delayedAlert('Hello, world!', 2000);


// 4. Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times after a delay of 1 second each, using a for-loop and setTimeout. You can practice this question in any JS editor or your browser console.

// const delayedLoop = num => {
//   for(let i = 0; i< num; i++) {
//     setTimeout(() => console.log("Hello " + (i + 1)),1000 * i);
//   }
// }

// delayedLoop(3);


// 5. Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server. A fake fetch has been provided. You can practice this question in any JS editor or your browser console.

// const fakeFetch = (msg,isTrue) => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       if(isTrue) {
//         reject("Error from server: "+msg)
//       }
//       resolve("Message from server "+msg);
//     },3000)
//   })
// }

// fakeFetch("Hii").then(data => console.log(data))


// 6. Use this URL - https://example.com/api/itemlist to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = url => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       if(url === "https://example.com/api/itemlist") {
//         reject({
//           status: 404,
//           message: "Item in the list not found"
//         })
//       } else{
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//             data: [
//               { itemName: "Bread", price: 30 },
//               { itemName: "Water Bottle", price: 50 },
//               { itemName: "Dairy Milk", price: 20 }
//             ]
//           }
//         })
//       }
//     },3000)
//   })
// }

// const outputDiv = document.querySelector("#output-div");

// const result = fakeFetch("https://example.com/api/itemlist").then(response => {
//   outputDiv.textContent = response.data.message
// }).catch((err) => {
//   if(err.status === 404) {
//    outputDiv.innerText = err.message
//   }
// })

// console.log(result);


// 7. Use this URL - https://example.com/api/chat to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       if(url === "https://example.com/api/chat") {
//         reject({
//           status: 503,
//           message: "Service unavailable"
//         })
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success"
//           }
//         })
//       }
//     }, 2000);
//   })
// }

// const outputDiv = document.querySelector("#output-div");

// const result = fakeFetch("https://example.com/api/cha").then(response => {
//   outputDiv.innerText = response.data.message;
// }).catch(err => {
//   if(err.status === 503) {
//     outputDiv.innerText = err.message;
//   }
// })

// console.log(result);


// 8.Use this URL - https://example.com/api/itemlist to make a fake fetch call and list out all the items as an ordered list on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       if(url === "https://example.com/api/itemlist"){
//         resolve(
//           {
//             status: 200,
//             message: "success",
//             data: [
//               { itemName: "Bread", price: 30, quantity: 10 },
//               { itemName: "Water Bottle", price: 50, quantity: 50 },
//               { itemName: "Dairy Milk", price: 20, quantity: 30 }
//             ]
//           }
//         )
//       } else {
//         reject ({
//           status: 404,
//           message: "Items not found"
//         })
//       }
//     },2000)
//   })
// }

// const outputDiv = document.querySelector("#output-div");

// const result = fakeFetch("https://example.com/api/itemlist").then(response => {
//  if(response.status === 200) {
//   console.log(response.data)
//   let ol = document.createElement("ol");
//   outputDiv.append(ol);
//   response.data.forEach( element => {
//     let li = document.createElement("li");
//     ol.append(li);
//     li.append(`${element.itemName} -- INR ${element.price} -- ${element.quantity}`)
//   })
//  }

// }).catch(err => {
//   if(err.status === 404) {
//     outputDiv.innerText = err.message;
//   }
// })
// console.log(result);


// 9. Use this URL - https://example.com/api/data to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       if(url === "https://example.com/api/data") {
//         reject({
//           status: 500,
//           message: "Internal Server Error!"
//         })
//       } else {
//         resolve({
//           status: 200,
//           data : {
//             message: "Success"
//           }
//         })
//       }
//     },2000)
//   })
// }

// const outputDiv = document.querySelector("#output-div");

// const result = fakeFetch("https://example.com/api/data").then(response => {
//   if(response.status === 200) {
//     outputDiv.innerText = response.data.message;
//   }
// }).catch(err => {
//   if(err.status === 500) {
//     outputDiv.innerText = err.message + " The server crashed. Please try again in some time."
//   }
// })

// console.log(result);


// 10. Use this URL - https://example.com/api/profile to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = url => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       if(url === "https://example.com/api/profile") {
//         reject({
//           status: 401,
//           message: "Unauthorized Access!"
//         })
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "success!"
//           }
//         })
//       }
//     },2000)
//   })
// }

// const outputDiv = document.querySelector("#output-div");

// const result = fakeFetch("https://example.com/api/profil").then(response => {
//   if(response.status === 200) {
//     outputDiv.innerText = response.data.message;
//   }
// }).catch(err => {
//   if(err.status === 401) {
//     outputDiv.innerText = err.message + " Looks like you are not logged in. Please login to see your profile data."
//   }
// })

// console.log(result);


// 11. Use this URL - https://example.com/api/profile/NC002 in which we are passing the id of a user to make a fake fetch call and display a welcome message to the user on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (url === "https://example.com/api/profile/NC002") {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success",
//             data: { id: "NC002", name: "Roshan", institute: "neoG Camp" }
//           }
//         });
//       } else {
//         reject({
//           status: 404,
//           message: "Resource not found"
//         });
//       }
//     }, 2000);
//   });
// };

// const outputDiv = document.querySelector("#output-div");

// const result = fakeFetch("https://example.com/api/profile/NC002").then(response => {
//   if(response.status === 200) {
//     outputDiv.innerText = `Welcome!, ${response.data.data.name} from ${response.data.data.institute}`;
//   }
// }).catch(err => {
//   if(err.status === 404) {
//     outputDiv.innerText = err.message;
//   }
// })

// console.log(result);