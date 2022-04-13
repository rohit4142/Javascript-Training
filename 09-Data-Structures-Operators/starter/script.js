'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  //here we are receiving an object and destructring it immediately
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  order:function(starterIndex,mainIndex){
      return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//calling orderDelivery fun by passing an object
restaurant.orderDelivery({
  time:'22.30',
  address:'Varanasi',
  mainIndex:2,
  starterIndex:2
})

//Destructring 
//Breaking complex data structure into simple variables.

const arr=[1,2,3,4];
const [x,y,z,a]=arr; //here we are taking each element of array into a single variable
console.log(x);
console.log(y);
console.log(z);

//even after destructring original araay will not be affected

//suppose you want to extract only first and third element of the array we can do as below

const [w, ,b]=arr;
console.log(w); //1
console.log(b);//3 

const [first, ,third]=restaurant.categories;
console.log(first,third); //Italian Vegetarian
//If You want to switch values of two variables then in traditional way you need
//to take a third variable like this

let [main, ,secondary]=arr;
 console.log(main,secondary);
// let temp=main;
// main=secondary;
// secondary=temp;
// console.log(main,secondary);

//But with the help of DESTRUCTURING YOU can do this in very simple way
//you just need to create an array with inverted index of variables
[main,secondary]=[secondary,main]
console.log(main,secondary);

//suppose you want to immediately made many variables from a fun call
//which returns an array as result.here destructuring becomes handy

const [starter,maincourse]=restaurant.order(2,0);
console.log(starter,maincourse);

//destructring on nested arrays

const nestarr=[1,1,[4,4,5]];

const [k, ,nest]=nestarr;
console.log(k,nest); //1 (3) [4, 4, 5]

//extracting elem from nested array
const [i, ,[j]]=nestarr;
console.log(i,j); //1 4 (4 is first element of nested array)

//we can set default values while destructring

const [aa=1,bb=1,cc=1]=[1,4];
console.log(aa,bb,cc);//1 4 1

//DESTRUCTRING OBJECTS

//To destruct objects we use Curley braces {}
//and all we have to do is provide the variable names 
//that exactly match the property names that we want to retrieve from the object.

/*
Since in object order of elements doesn't matter we dont need
to manually skip the unwanted elements.
*/

const {name,openingHours,categories}=restaurant;

console.log(name);
console.log(openingHours);
console.log(categories);

//But what if we want to have different variable names than property name

const {
  name:restaurantName,
  openingHours:hours,
  categories:tags}=restaurant;
//here still we are using property name just for refernce.

console.log(restaurantName,hours,tags);

//setting default values in object destructuring

const {menu=[],starterMenu:starters=[]}=restaurant;
console.log(menu,starters);

//mutating variables while destructuring objects.

let m=15;
let n=16;

const obj={m:31,n:425,c:54};

//{a,b}=obj;//this will throw error

({m,n}=obj); //we have to wrap destructring assingment in parenthesis
console.log(m,n); //31,425

//destructring nested objects.
//in the above restarant object we have a propety  opening hours which istelf is a object

// const {fri}=openingHours;
// console.log(fri); //{open: 11, close: 23}

const {fri:{open:o,close:c}}=openingHours;
console.log(o,c);


//SPREAD operators
/*
The spread operator (...)allow us to quickly copy all or part of an existing array or object into an another array or object.
*/


 const arr1 = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

const newArr = [1, 2, ...arr1]; //here we copying elements of arr1 into new array

console.log(newArr);//(5) [1, 2, 7, 8, 9]

//suppose you want individual elements of array not whole array then we can use spread operator

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

//now we are adding some extra things in menu array of restaurant's mainmenu
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);//(4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']
console.log(restaurant.mainMenu);//(3) ['Pizza', 'Pasta', 'Risotto']

//THE DIFF BW  SPREAD OPERATOR AND DESTRUCTRING IS THAT
/*
  IT TAKES ALL ELEMENTS OF THE ARRAY AND ALSO DOESN'T CREATE NEW VARIABLES.
*/

// Copy array (shallow copy)
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// Join 2 arrays
const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
//spread works on all iterables
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str); //individual letters

//spread operator is only useful when you want to create a new array
//or pass individual values as parameters to a function
// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3'),
  "italian","chinese","idnia"
  
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients); //it becomes very easy to pass individual values of arra

// Spread operators on Objects 

//creating a new object by copying all propeties of  old object and adding some new
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
 
//shallow copy of object using spread operaot
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);//Ristorante Roma

console.log(restaurant.name);//Classico Italiano


///////////////////////////////////////
// Rest Pattern and Parameters
// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr2 = [1, 2, ...[3, 4]];
console.log(arr2);
// REST, because on LEFT side of =
const [a1, b1, ...others] = [1, 2, 3, 4, 5];
console.log(a1, b1, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; 
//here rest syntax will collect all the array elements after last variable of destructuring and it will not contain any skiped elements
console.log(pizza, risotto, otherFood);

// Rest operator on objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); //it will print all remaining objects

// 2) Rest operators with  Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
//here are collecting all passes arguments as single array
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

//here we are doing spread and function will use rest and make individual elemenst and array again
const x2 = [23, 5, 7];
add(...x2);


////orderPizza(mainIngredient, ...otherIngredients){}
//here we need to pass atleast one arguments and rest will get collected as array
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');


///////////////////////////////////////
// Short Circuiting (&& and ||)
//short circuiting with or operator means if the first value is truthy value it will immediately return the first value.
//javascript will not take a look at the second value.
console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas'); //print 3
console.log('' || 'Jonas');//jonas
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //hello

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //10

const guests2 = restaurant.numGuests || 10; //10
console.log(guests2);

console.log('---- AND ----');
//it get short circuit when the firsty value is falsy and immediately return the first value


console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

///////////////////////////////////////
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or '')
//means it will consider 0 and '' as truly values.
const guestCorrect = restaurant.numGuests ?? 10; //value after ?? will only get assigned if first value is nullish measn null or undefined.
console.log(guestCorrect);

///////////////////////////////////////
// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
 numGuests: 20,
  //numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';//undefined
// rest2.owner = rest2.owner && '<ANONYMOUS>';//<ANONYMOUS> because && operator works such that if first value is truthy it will return second.
rest1.owner &&= '<ANONYMOUS>'; //here it will not add this property into object because a && logical assigment operator assigns only if the value is truthy.@
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
