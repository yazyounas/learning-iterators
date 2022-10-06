const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits 
fruits.forEach(fruite => {
console.log(`I want to eat a ${fruite}.`)
});

// iterate using .map method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0];

});

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(smallNumber => {
  return smallNumber / 100;
});
console.log(smallNumbers);