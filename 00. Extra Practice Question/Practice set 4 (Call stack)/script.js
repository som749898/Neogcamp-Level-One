// 1. function a() {
//   console.log('a');
//   b();
// }

// function b() {
//   console.log('b');
//   c();
// }

// function c() {
//   console.log('c');
//   console.log('c again');
// }

// a();

// Ans
// a
// b
// c
// c again


// 2. function a() {
//   console.log('a');
//   b();
// }

// function b() {
//   console.log('b');
//   c();
// }

// function c() {
//   console.log('c');
//   a();
// }

// a();

// a
// b
// c
// a
// b
// ... continue


// 3. function a() {
//   console.log('a');
//   b();
//   console.log('a again');
// }

// function b() {
//   console.log('b');
//   c();
//   console.log('b again');
// }

// function c() {
//   console.log('c');
// }

// a();

// a
// b
// c
// b again
// a again


// 4. function a() {
//   console.log('a');
//   b();
// }

// function b() {
//   console.log('b');
//   c();
// }

// function c() {
//   console.log('c');
//   b();
// }

// a();

// a
// b
// c
// b
// c
// ...continue


// 5. function a() {
//   console.log('a');
//   b();
// }

// function b() {
//   console.log('b');
//   c();
// }

// function c() {
//   console.log('c');
// }

// a();
// console.log('done');


// a
// b
// c
// done


// 6. function a() {
//   console.log('a');
//   setTimeout(function() {
//     console.log('a again');
//   }, 0);
// }

// function b() {
//   console.log('b');
// }

// a();
// b();

// a
// b
// a again


// 7. function a() {
//   console.log('a');
//   setTimeout(function() {
//     console.log('a again');
//   }, 1000);
// }

// function b() {
//   console.log('b');
// }

// a();
// b();

// a
// b
// a again


// 8. function a() {
//   console.log('a');
//   setTimeout(function() {
//     console.log('a again');
//   }, 0);
//   b();
// }

// function b() {
//   console.log('b');
// }

// a();

// a
// b
// a again


// 9. function a() {
//   console.log('a');
//   setTimeout(function() {
//     console.log('a again');
//   }, 0);
//   b();
// }

// function b() {
//   console.log('b');
//   setTimeout(function() {
//     console.log('b again');
//   }, 0);
//   c();
// }

// function c() {
//   console.log('c');
// }

// a();

// a
// b
// c
// a again
// b again


// 10. function a() {
//   console.log('a');
//   setTimeout(function() {
//     console.log('a again');
//   }, 1000);
// }

// function b() {
//   console.log('b');
//   setTimeout(function() {
//     console.log('b again');
//   }, 500);
// }

// a();
// b();

// a
// b
// b again
// a again


// 11. setTimeout(function a() {console.log('a')}, 1000);
// setTimeout(function b() {console.log('b')}, 500);
// setTimeout(function c() {console.log('c')}, 0);
// function d() {console.log('d')}
// d();

// d
// c
// b
// a