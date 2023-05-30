// Example- 1

// const strLength = (name,callbackfn) => callbackfn(name.length);

// console.log(strLength("Manish", (nameGiven) => `OMG! my name is ${nameGiven.length} char long`));


// Example- 2

// const willThanosKillMe = (name, iDie, iLive) => name.length % 2 === 0 ? iLive() : iDie();

// const iDie = () => console.log("Yay! I am alive!");
// const iLive = () => console.log("Give my bose speakers and apple headphones to my sister");

// console.log(willThanosKillMe("Manish", iDie, iLive));

// Example- 3
// const printName = name => console.log(name);
// setTimeout(printName("Som"),5000);

// Above code is not correct because the printName function is executed immediately, and the setTimeout function has nothing to execute after the delay.

// const printName = name => console.log(name);
// const id = setTimeout(() => printName("Som"),5000);
// clearTimeout(id);

// Example- 4
// function fakeFetch(msg, shouldReject) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldReject) {
//         reject(`error from server: ${msg}`);
//       }
//       resolve(`from server: ${msg}`);
//     }, 3000);
//   });
// }

// const myPromise = fakeFetch("I am Awesome");
// console.log(myPromise);

// Example- 5
// fakeFetch("I am Manish",true)
// .then(data => console.log(`Total length of my data is ${data.length}`))
// .catch(error => console.error(error))

// Example- 6
// const getServerResponseLength = msg => fakeFetch(msg).then(data => data.length).then(data => console.log(data));


// console.log(getServerResponseLength("Yoo"))

// Example- 7
// const getServerResponseLength = async msg => {
//   try {
//     const data = await fetch(msg);
//     const data2 = await data.json();
//     console.log(data2);
//   } catch(err) {
//     console.error(err)
//   }
// }

// getServerResponseLength("https://jsonplaceholder.typicode.com/todos");