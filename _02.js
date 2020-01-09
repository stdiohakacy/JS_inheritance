function Animal(name) {
  this.type = "Animal";
  this.name = name;
  this.sayType = function() {
    console.log("type: " + this.type);
  }
}
Animal.prototype.sayName = function() {
  console.log("name: " + this.name);
}

function Dog(name) {
  this.super_ = Animal;
  this.super_.call(this, name);
  this.type  = "Dog";
  this.shout = function() {
    console.log("shout: " + "Go Go Go !!!");
  }
}

inherits(Dog, Animal);

function inherits(child, parent) {
  child.prototype = Object.create(parent.prototype, {
    constructor: {
      value: child,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

let myDog = new Dog("Rex");
myDog.shout();   // => shout: Go Go Go !!!
myDog.sayType(); // => type: Dog
myDog.sayName(); // => name: Rex