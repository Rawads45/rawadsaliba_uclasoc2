var animal = ['zebra', 'line', 'tiger', 'elephant', 'monkey'];
var largestAnimalName= animals.filter (animal=>animal.length ==5)
var professions = ['doctor', 'lawyer', 'programmer', 'ballerina'];
var capitalize = professions.map (profession=>profession.toUpperCase())
var students = ['Emma', 'Yang', 'PepeJ', 'PepeV', 'Ethan', 'Alison', 'Nico', 'Brian', 'Uli', 'Caleb', 'Rawad', 'Hassan', 'Yueyang', 'Lyla']
var awesome = students.map(student=>student +" is awesome")
var numbers = [12, 457, 52, 16];
var total = numbers.reduce((memo,CurrentValue)=>memo * CurrentValue,1)
var app = students.forEach (function(student){
`${student} is making an app`
});

array1.forEach(function(element) {
  console.log(element);
});

var app = students.forEach(function(student) {
  var x = [];
  x.push(`${student} is making an app`);
  return x;
});
