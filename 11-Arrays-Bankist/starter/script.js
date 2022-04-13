'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value"> ${mov}</div>
  </div>`;

    //now we need to add there html structure to some existing html container
    //for that we will use insertAdjacentHTML
    containerMovements.insertAdjacentHTML('afterbegin', html); //just inside the element ,before its child
  });
};
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//slice method: it does'n not mutate original array instead returns a new array
console.log(movements.slice(2)); //here only one parameter ,which tells from where you want to start extracting elem
console.log(movements.slice(2, 4)); //it will give all elements bw index 4-2=2,3 wala.
console.log(movements.slice(-2)); //it will ectract all elements starting from second last element. (only two)\
console.log();
movements.slice(1, -2); //gives all elements starting from 1 except last 2
console.log(movements.slice());
console.log([...movements]);

//we can also use slice method to shallow copy a array
const arr = movements.slice();
console.log(arr);

//SPLICE METHOD: it works same  as slice method ,but the only difference is that it mutates original array
//means extracted will elements will be gone from original arrray

const names = ['Rohit', 'Jya', 'JIyo', 'hksdk', 'hfsiuh'];
console.log(names.splice(2));
names.splice(-1); //it will remove last element of the array.
console.log(names); //it will print only two names.
const names_1 = ['Rohit', 'Jya', 'JIyo', 'hksdk', 'hfsiuh'];

console.log(names_1.splice(1, 2)); //it will remove elements from index 1 and 2 rest will remain
console.log(names_1);

// REVERSE
const arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //it will reverse the array permanently.
console.log(arr2);

//Concat Method
const letters = arr1.concat(arr2); //it will concat two arrays and it will not mutate any of this arrays
console.log(letters);
//we can also do the same thing using spread operator
const letters_spread = [...arr1, ...arr2];
console.log(letters_spread);

//JOIN method

console.log(letters_spread.join('')); //these method is very useful to join array elements and it will not mutate original elem
console.log(letters_spread);
console.log(typeof letters_spread.join('')); //it will print string as they have become string

console.log(typeof letters_spread.join('-')); //will join them with a - bw them. type will be string

///////////////////////////////////////
// The new at Method
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0)); //just replacing traditional []method with at method.
//the importance of at method comes when we want to find last method and second last
console.log(arr3[arr3.length - 1]); //traditional way
console.log(arr3.at(-1)); //using at method ,it also counts like slice method means -1 measn counting from right size
console.log(arr3.at(-2)); //print second last element

///////////////////////////////////////
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
//using for each method
console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  //movenetnts array ke har ek liye is kam ko krna hai
  if (mov > 0) {
    //the parameter is the entire array over which we are looping over
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

///////////////////////////////////////
// forEach With Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  //here also there are three parameters for foreach method
  console.log(`${key}: ${value}`); //one is actual values ,secodn one is respective keys and thirs is complete map on which we are working out.
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); //sets contain only uniques  values
currenciesUnique.forEach(function (value, _, map) {
  //here second argument is _ beacuse sets has neither keys and indexes.
  console.log(`${value}: ${value}`);
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/
