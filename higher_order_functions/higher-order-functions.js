// functions as arguments
var doubleSum = function(a, b) {
  return 2 * (a + b);
}

var doubleSubstraction = function(a, b) {
  return 2 * (a - b);
}

var sum = function(a, b) {
  return a + b;
}

var subtraction = function(a, b) {
  return a - b;
}

var doubleOperator = function(f, a, b) {
  return 2 * f(a, b);
}

doubleOperator(sum, 2, 2); // 8
doubleOperator(subtraction, 4, 2); // 4


const hi = (name) => `Hi ${name}`;

const greeting = (name) => hi(name);

greeting('TK');


var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers); // (6) [0, 2, 4, 6, 8, 10]


// map people
var people = [
  { name: "TK", age: 26 },
  { name: "Kaio", age: 10 },
  { name: "Kazumi", age: 30 }
];

var peopleSentences = [];

for (var i = 0; i < people.length; i++) {
  var sentence = people[i].name + " has " + people[i].age + " years old";
  peopleSentences.push(sentence);
}

console.log(peopleSentences); // ['TK has 26 years old', 'Kaio has 10 years old', 'Kazumi has 30 years old']


var values = [1, 2, 3, -4, 5];

for (var i = 0; i < values.length; i++) {
  values[i] = Math.abs(values[i]);
}

console.log(values); // [1, 2, 3, 4, 5]

// reduce
var orders = [
  { productTitle: "Product 1", amount: 10 },
  { productTitle: "Product 2", amount: 30 },
  { productTitle: "Product 3", amount: 20 },
  { productTitle: "Product 4", amount: 60 }
];

var totalAmount = 0;

for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}

console.log(totalAmount); // 120
