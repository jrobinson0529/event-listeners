console.log('CONNECTED!');

const firstObj = {};

// const user = {
//   username: 'biz.markie',
//   password: 'abc123',
//   lovesJavascript: true,
//   favoriteNumber: 42,
// };

// DOT NOTATION
// Get values out of an object
// console.log(user.lovesJavascript);
// console.log(user.username);

// BRACKET NOTATION
const password = 'password';
// console.log(user[password]);
// console.log(user['username']);
// console.log(user.favoriteNumber);

// ASSIGNING VALUES

const newUser = {
  isNew: true,
};
// newUser.password = '12345';
// newUser['username'] = 'fresh.prince';
// newUser[1] = true;
// console.log(newUser);


// Methods (FUNCTIONS AS VALUES)
const newObject = {
  username: 'Teresa',
  sayHello: function () {
    console.log(`${this.username} says Hello!`);
  },
};

// newObject.username = 'Aja';
// newObject.sayHello();

// ITERATE OVER AN OBJECT

const userTwo = {
  username: 'jrobinson',
  password: 'xyz0978',
  lovesJavascript: true,
  favoriteNumber: 12,
};

for (let key in userTwo) {
  console.log(key);
  console.log(userTwo[key]);
}
