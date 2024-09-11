console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword) {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;
if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// Part 3: Hotdogs
const numberOfHotdogs = 50;

if (numberOfHotdogs < 5) {
  console.log("Less than 5: ", numberOfHotdogs * 2);
}

if (numberOfHotdogs >= 5 < 100) {
  console.log("Between 5 and 99: ", numberOfHotdogs * 1.5);
}

if (numberOfHotdogs >= 100 < 1000000) {
  console.log("Between 100 and 999999: ", numberOfHotdogs * 1);
}

if (numberOfHotdogs >= 1000000) {
  console.log("More than 1000000:", numberOfHotdogs * 0.1);
}

// Part 4: Daytime
const currentHour = 12;
const statement = currentHour < 17 ? "Still need to learn..." : "Party Time";
console.log(statement);

// Part 5: Greeting
const userName = "Esraa";

const greeting = "Hello " + (userName === "Esraa" ? "Coach" : userName) + "!";

console.log(greeting);
