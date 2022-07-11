//variables
// const, var, int

//functions
// function myName(name) {
//   greet = `hi ${name}`;

//   console.log(greet);
// }

// myName("johnny");
// const sum = (a, b) => a + b;

// function calculateFoodTotal(food, tip) {
//   tipPercentage = tip / 100;
//   tipAmount = food * tipPercentage;
//   total = sum(food, tipAmount);
//   return total;
// }

// console.log(calculateFoodTotal(100, 30));

//arrays
// const groceries = ["bananas", "oranges", "apples"];

//push
// groceries.push("mangoes");
// groceries.push("pineapples");

//slice
// console.log(groceries);
// console.log(groceries.slice(0, 3));

//objects{}
// const person = {
//   name: "John",
//   shirt: "blue",
//   trouser: "grey",
// };
//dot notation
// console.log(person.name);
//bracket notation
// console.log(person["name"]);

//object, arrow function
// const introduction = (name, shirt, trouser) => {
//   const person = {
//     name: name,
//     shirt: shirt,
//     trouser: trouser,
//   };

//   const intro = `Hi, my name is ${person["name"]} and the color of my shirt is ${person.shirt} and my trouser is ${person.trouser}.`;
//   return intro;
// };

// console.log(introduction("John", "blue", "grey"));

// const introduction = (name, shirt, trouser) => {
//   const person = {
//     name: name,
//     shirt: shirt,
//     trouser: trouser,
//     assets: 10000,
//     liabilities: 7500,
//     netWorth: function () {
//       return this.assets - this.liabilities;
//     },
//   };

//   const intro = `Hi, my name is ${
//     person["name"]
//   } and the color of my shirt is ${person.shirt} and my trouser is ${
//     person.trouser
//   }. My net worth is ${person.netWorth()}.`;
//   return intro;
// };

// console.log(introduction("John", "blue", "grey"));

// const fruits = ["bananas", "oranges", "apples"];
// fruits.push("mangoes");
// fruits.push("pineapples");

//loops
// for (i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// const double = (numbers) => {
//   let result = [];
//   for (const number of numbers) {
//     result.push(number * 2);
//   }
//   return result;
// };

// console.log(
//   double([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7,
//     8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5,
//     6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3,
//     4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1,
//     2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8,
//     9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6,
//     7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4,
//     5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2,
//     3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9,
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7,
//     8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5,
//     6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3,
//     4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1,
//     2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8,
//     9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6,
//     7, 8, 9,
//   ])
// );
