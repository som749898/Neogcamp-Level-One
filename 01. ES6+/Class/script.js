// Challenge: Suppose you have an object that contains user data with properties name, age, and email. Write a function getUserData that takes the object as an argument and returns the user's name, age, and email with default values of unknown, 0, and no email provided if any of the properties are null or undefined.

const userData = {
  name : "Manish",
  // age: 22,
  email: "manish@iserveu"
};

// Method -1
const getUserData = ({name, age, email}) => {
  return `${name??"unknown"} , ${age} , ${email}`;
}

// Method -2
const getUserData = (obj) => {
  return  `${obj?.name??"unknown"}, ${obj?.age??0}, ${obj?.email??"no email found"}`;
}

console.log(getUserData(userData));