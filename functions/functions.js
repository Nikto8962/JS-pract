//functions
function myName(name) {
  greet = `hi ${name}`;

  console.log(greet);
}

myName("johnny");
const sum = (a, b) => a + b;

function calculateFoodTotal(food, tip) {
  tipPercentage = tip / 100;
  tipAmount = food * tipPercentage;
  total = sum(food, tipAmount);
  return total;
}

console.log(calculateFoodTotal(100, 30));
