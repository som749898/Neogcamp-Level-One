// 1. Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

// const delayedGreeting = (msg) => {
//   setTimeout(() => console.log(msg),2000);
// }

// delayedGreeting("Wlcome to Neog");


// 2. Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times after a delay of 1 second each, using a for-loop and setTimeout. You can practice this question in any JS editor or your browser console.

// const delayedLoop = (num) => {
//   for(let i = 1; i<= num; i++) {
//     setTimeout(() => console.log("Hello " + i),1000 * i)
//   }
// }

// delayedLoop(10);

// 3. Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout. You can practice this question in any JS editor or your browser console.

// const delayAlert = (msg,time) => {
//   setTimeout(() => alert(msg),time);
// }

// delayAlert("Hello World",2000);


// 4. Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server. A fake fetch has been provided. You can practice this question in any JS editor or your browser console.

// const fakeFetch = (msg,shouldAccept) => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       if(shouldAccept) {
//         resolve(`message from server: ${msg}`);
//       } else {
//         reject(`Error from server: ${msg}`);
//       }
//     },3000)
//   })
// }

// const result = fakeFetch("Hii").then(data => console.log(data));


// 5. Use this URL - https://example.com/api/data to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

// const fakeFetch = url => {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       if(url === "https://example.com/api/data"){
//         reject({
//           status: 500,
//           message: "Internal Server Error"
//         })
//       } else {
//         resolve({
//           status: 200,
//           data: {
//             message: "Success"
//           }
//         })
//       }
//     },3000)
//   })
// }

// const outputDiv = document.querySelector("#output-div");

// const asyncResult = async url => {
//   console.log(fakeFetch(url));
//   try{
//     const result = await fakeFetch(url);
//     outputDiv.innerText = result.data.message;
//   } catch(err) {
//     if(err.status === 500) {
//       outputDiv.innerText = err.message + "! The server crashed. Please try again in some time.";
//     } else {
//       outputDiv.innerText = "No results found";
//     }
//   }
// }

// asyncResult("https://example.com/api/data");