//Take a look at the following code and describe in details (as much as you can) what the code is doing.
//Answer the questions listed below.

const users = [
  {name: "Jake Smith", age: 20, city: "New York"},
  {name: "Anne Annson", age: 24, city: "London"},
  {name: "Pete Peterson", age: 31, city: "New York"},
  {name: "Martha Marty", age: 38, city: "New York"},
  {name: "Renato Romolo", age: 36, city: "Rome"},
  {name: "Philip Flip", age: 36, city: "London"},
];

const groupedByCity = users.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue.city]){
    accumulator[currentValue.city] = [];
  }
  accumulator[currentValue.city].push(currentValue);
  return accumulator;
}, {})

console.log(groupedByCity);

// A - why do we need this line of code?   if (!accumulator[currentValue.city]) {

// We need this line of code to check if the accumulator object has a property with the name of the city of the current user. 
//If it doesn't, we create a new property with the name of the city and assign an empty array to it. This way, we can group users by their cities.

// B - What if I replace "if (!accumulator[currentValue.city]) { " with  "if (!acc.hasOwnProperty(city))"?

// If you replace "if (!accumulator[currentValue.city]) { " with "if (!acc.hasOwnProperty(city))", the code will not work as expected.
// C - Which of the above is the safest approach? 

// The safest approach is to use "if (!accumulator[currentValue.city]) { " because it checks if the property exists in the object.

// D - What is the value of the accumulator during the second iteration?  "accumulator[currentValue.city].push(currentValue)"

// The value of the accumulator during the second iteration is an object with the city name as a property and an array of users who live in that city as the value.

// E - What is happening here and why do we need that?  }, {})

// The reduce method is used to group users by their cities. We need to pass an empty object as the initial value of the accumulator to store the grouped users.