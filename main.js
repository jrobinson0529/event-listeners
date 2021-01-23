// console.log('CONNECTED!');
// CALLBACK FUNCTIONS
const sentence = (name) => {
  return `What up ${name}`;
};
const func1 = (string) => {
  return `Goodbye ${string}`;
};

const func2 = (name, cb) => {
  return cb(name);
};
console.log(func2('cruel world', func1));
console.log(func2('Jesse', sentence));
