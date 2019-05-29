/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding or AKA Window Binding - When in the global scope, the value of "this" will be the window/console Object. This will give an "undefined" on the console.
* 2. Implicit Binding - Whenever a function is called by a preceding dot, the object to the left if the dot gets 'this'
* 3. New Binding - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicite Binding - Whenever JavaScript's call or apply or bind method is used, 'this' is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const me = {
    welcome: 'Hi',
    saysHello: function(name){
        console.log(`${this.welcome} my name is ${name}`)
    }
};

me.saysHello('Thatcher');


// Principle 3

// code example for New Binding

let Shoes = function(size, color, type){
    this.size = size;
    this.color = color;
    this.type = type;
}; 

const vans = new Shoes(7, 'white', 'slip-on');
console.log(vans);

// Principle 4

// code example for Explicit Binding

let askQuestion = function() {
    console.log(`Do you have ${this.shoes} in size ${this.size} in store?`)
};

let wantedShoes = {
    shoes: 'yeezy 700 mauve', 
    size: 6,
};

askQuestion.call(wantedShoes); 