///////////////////////////////////////
// Activating Strict Mode
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
*/

///////////////////////////////////////
// Functions
/*
function logger() {
    console.log('My name is Jonas');
  }
  
  // calling / running / invoking function
  logger();
  logger();
  logger();
  
  function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  }
  
  const appleJuice = fruitProcessor(5, 0);
  console.log(appleJuice);
  
  const appleOrangeJuice = fruitProcessor(2, 4);
  console.log(appleOrangeJuice);
  
  const num = Number('23');
  */

  ///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
/*
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }
  const age1 = calcAge1(1991);
  
  // Function expression
  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const age2 = calcAge2(1991);
  
  console.log(age1, age2);
   
*/
///////////////////////////////////////
// Arrow functions
/*
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));

*/

///////////////////////////////////////
// Introduction to Arrays
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/


///////////////////////////////////////
// Basic Array Operations (Methods)
/*
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

///////////////////////////////////////
// Introduction to Objects
/*
const friends = ['Michael', 'Steven', 'Peter'];
console.log(typeof friends);
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
  ];
  
   console.log(typeof jonasArray);

  const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };
  console.log(jonas.friends);
  ///////////////////////////////////////
// Dot vs. Bracket Notation

  console.log(jonas);
  
  console.log(jonas.lastName);
  console.log(jonas['lastName']);
  
  const nameKey = 'Name';
  console.log(jonas['first' + nameKey]);
  console.log(jonas['last' + nameKey]);
  
  // console.log(jonas.'last' + nameKey)
  
  const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
  
  if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
  } else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
  }
  
  jonas.location = 'Portugal';
  jonas['twitter'] = '@jonasschmedtman';
  console.log(jonas);
  */
///////////////////////////////////////
// Object Methods
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
  
    // calcAge: function (birthYeah) {
    //   return 2037 - birthYeah;
    // }
  
    // calcAge: function () {
    //   // console.log(this);
    //   return 2037 - this.birthYeah;
    // }
  
    calcAge: function () {
      this.age = 2037 - this.birthYeah;
      return this.age;
    },
  
      getSummary () {
      return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
  };
  console.log(jonas);

  console.log(jonas.calcAge());
console.log(jonas.getSummary());
  console.log(jonas.age);
  console.log(jonas.age);
  console.log(jonas.age);
  */

//   const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//     }
//   };
  
//   const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//       this.bmi = this.mass / this.height ** 2;
//       return this.bmi;
//     }
//   };
  
//   mark.calcBMI();
//   john.calcBMI();
  
//   console.log(mark.bmi, john.bmi);
  
//   // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
  
//   if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
//   } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
//   }
  
///////////////////////////////////////
// Iteration: The for Loop

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
  }

  ///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];
  const types = [];
  
  // console.log(jonas[0])
  // console.log(jonas[1])
  // ...
  // console.log(jonas[4])
  // jonas[5] does NOT exist
  
  for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);
  
    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
  }
  
  console.log(types);
  
  const years = [1991, 2007, 1969, 2020];
  const ages = [];
  
  for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
  }
  console.log(ages);
  
  // continue and break
  console.log('--- ONLY STRINGS ---')
  for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;
  
    console.log(jonas[i], typeof jonas[i]);
  }
  
  console.log('--- BREAK WITH NUMBER ---')
  for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;
  
    console.log(jonas[i], typeof jonas[i]);
  }
*/
  ///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];
  
  // 0, 1, ..., 4
  // 4, 3, ..., 0
  
  for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
  }
  
  for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);
  
    for (let rep = 1; rep < 6; rep++) {
      console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
  }
  