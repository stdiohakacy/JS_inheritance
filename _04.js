class Animal {
  constructor(name) {
    this.type = "Animal";
    this.name = name;
  }
  sayType() {
    console.log("type: " + this.type);
  }
  sayName() {
    console.log("name: " + this.name);
  }
}

class Dog extends Animal{
  constructor(name) {
    super(name);
    this.type  = "Dog";
  }
  shout() {
    console.log("shout: " + "Go Go Go !!!");
  }
}

let myDog = new Dog("Rex");
myDog.shout();   // => shout: Go Go Go !!!
myDog.sayType(); // => type: Dog
myDog.sayName(); // => name: Rex