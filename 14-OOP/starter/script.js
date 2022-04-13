'use strict';

/*
The four pillar of OOP are:

1.Abstraction
2.Encapsulation
3.Inheritance 
4.Polymorphism
*/
/*
 HOW CAN WE CREATE PROTOTYPES IN JS;
 1. Constructor function
    -Technique used to create from a function
    -This is how built in objects like Arrays,Maps or set are actually implemented

 2. ES6 classes
    - Modern alternative to constructor function syntax
    -Behind the scene it work same like constructor function
    -ES6 classes do not behave same like classical "OOP CLASSES"
 
 3. Object.create()
     - The easiest and most straightforward way of linking an object to a prototype object.
 
*/
//In a regular fun call this keyword is set to undefined

///////////////////////////////////////
// Constructor Functions and the new Operator

const Person=function(firstName,birthYear)
{
   this.firstName=firstName;
   this.birthYear=birthYear;

   // Never create methods inside constructor fun as it will create duplicate copies for each object
    // this.calcAge = function () {
    // console.log(2037 - this.birthYear);
    // };
}

const jonas=new Person('Jonas',6658);
console.log(jonas);
// 1. New {object} is created
// 2. function is called, this == {object}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda,jack);

//here jonas matila jack are instances of objects
//we can verify this by below way
console.log(jonas instanceof Person);

console.log(Person.prototype);
//Each and every Function in javascript has automatically a property known as
//PROTOTYPE.

Person.prototype.calcAge=function(){
    console.log(8864-this.birthYear);
}

//remeber all objects which will be creating using this constructor fun 
//will have this property calcAge.

jonas.calcAge(); //even though these two objects don't have calcAge method but
matilda.calcAge();//it is accessible to them because both of these are have automatic access to prototype

console.log(jonas.__proto__); // here jonas object is linked with person.prototype using __proto__ property
console.log(jonas.__proto__ === Person.prototype);

//note:Person.prototype is not prototype of Person constructor fun actully it is prototype of objects creating using this constructor fun

console.log(Person.prototype.isPrototypeOf(jonas));//true
console.log(Person.prototype.isPrototypeOf(matilda));//true
console.log(Person.prototype.isPrototypeOf(Person));//false

// .prototyeOfLinkedObjects

//we can also set properties on prototypes not only methods.
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

//to check whether a property belongs to a object or not

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));


//PROTOTYPE CHAINING
/*
Person.prototype is itself an OBJECT.and remember every object in 
javascript in has a prototype.
Therefore "Person.prototype" must have a prototype, and that is 
OBJECT.prototype ,and why is that? It's because Person.prototype
is an object and it is created using default/built-in constructor fun known as "Object".
This Object is called whenevr we write a object literal means use new keyword. like {}==new Object(...);
Now __proto__ of Object.prototype is null. because it is at top in chain,
which marks end of prototype chain.

Its more line scope chain :(mtlp is scope me ni mila to outer scope me dekho)
Similarly when we can't find a property in a prototype of cureent const fun ,we look 
up in prototype chain.

like jonas.hasproperty we can't find this property in Person.prototype
in this case javascript will look in Object.prototype.
*/




///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__); //will print because already reached at top

const arr = [3, 6, 6, 5, 6, 9, 9];  // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);//true

//creating a method whixh will be inherited by all arrays.
Array.prototype.unique = function () {
    return [...new Set(this)];
  };
  
  console.log(arr.unique());


  //as we know function in intself is an object and so it has a prototype.
  console.dir(x => x + 1);


  //////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
  };
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  const bmw = new Car('BMW', 120);
  const mercedes = new Car('Mercedes', 95);
  
  bmw.accelerate();
  bmw.accelerate();
  bmw.brake();
  bmw.accelerate();


  ///////////////////////////////////////
// ES6 Classes

//class expressiion
/*
   const personCl=class{}
 */

  //class declaration
  class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }

  //adding methiods in class
  //Note whatever methods we are going to write outside constructor will on the prototype of objects and not on that particulat object
    // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
// Set a property that already exists
  set fullName(name){
    if(name.includes(' '))
    {
      this._fullName=name;
    }
    else alert(`${name} is not a full name!`);
  }

  get fullName(){
    return this._fullName;
  }
  greet = function () {
    console.log(`Hey ${this.fullName}`);
  }

 // Static method
 static hey() {
  console.log('Hey there 👋');
  console.log(this);
}

}

  const jessica = new PersonCl('Jessica Davis', 1996); //creating new instance of class i.e object
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);//it will print true

console.log(jessica.fullName)

//Adding a method manually to the prototype.
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}`);
// };
jessica.greet();
//so this proves that class just works as constructor fun and follows prototypal inheritance.

//some important points
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens 
// 3. Classes are executed in strict mode



///////////////////////////////////////
// Setters and Getters

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


///////////////////////////////////////
// Object.create

/*

it is quite different from constructor fun and es6 classes,though it follows prtotypal inheritance
Here we use Object.create to manually set a prototype of a object.


we are creating object prototype which can be prototype for all person object
 */
const PersonProto={
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}
}
const steven =Object.create(PersonProto);//it will return object whose prototype will be PersonProto
//here steven will be an emmpty object,whoso __proto__ will point towards PersonProto

console.log(steven)
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const PersonParent = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

PersonParent.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName=firstName;
  // this.birthYear=birthYear;
//we can call these values from PersonParent constructor fun
  PersonParent.call(this,firstName,birthYear);

  this.course = course;
};

//linkind prototypes
Student.prototype=Object.create(PersonParent.prototype); //as we know Object.create will return an empty object with prototype PersonParent


//adding method in this constructor fun
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
//creating object of this constructor fun using new keyword
const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge(); //it is implemented after inheritance propotypal inheritance

console.log(mike.__proto__); //it should print student rather than person so remove it set Student.prototype.constructor=student.
console.log(Student.prototype)
console.log(mike.__proto__.__proto__)

console.log(mike instanceof Student); //all will print true.
console.log(mike instanceof PersonParent);
console.log(mike instanceof Object);
Student.prototype.constructor=Student;
console.dir(Student.prototype.constructor);
/*
INHERITANCE:Prototype Chain
Since we want to make student as child class and PersonParent as Parent ,
as we know mike object has its prototype pointing towards Student.prototype i.e __proto__:Student.prototype
 If we set Student.prototype=PersonParent.prototype ,so that child class can access all the methods
 and variables of parent class.
 means for student class ,
 its 
 __proto__: PersonParent.prototype
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Cars =function(make,speed){
  this.make=make;
  this.speed=speed;
};

Cars.prototype.accelerate=function(){
  this.speed+=10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}
Cars.prototype.brake=function(){
  this.speed-=5;
  console.log(`${this.make} is going at ${this.speed} km/h`);

}

const EV=function(make,speed,charge)
{
  Cars.call(this,make,speed);
  this.charge=charge;
};

//link the prototypes

EV.prototype=Object.create(Cars.prototype);

EV.prototype.chargeBattery=function(chargeTo){
 this.charge=chargeTo;
}

EV.prototype.accelerate=function(){
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};


const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }

}

class StudentCl extends PersonClass {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    //super is constructor fun of parent class
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
martha.greet(); //calling a method of parent class
StudentCl.hey() //we are calling this method  using class name not object because it is static method.


///////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto1 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);//will return empty object with prototype as PersonProto1

const StudentProto = Object.create(PersonProto);//Point 2
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto); //Point 1
jay.init('Jay', 2010, 'Computer Science');

/*
Now understand prototypal inhritance-
Point1: Here we are setting __proto__ property of object jay
       to Student.prototype so that it can access all the methods and variables of student prototype

Point2: Here student inherits properties from Person.


*/
jay.introduce();
jay.calcAge();