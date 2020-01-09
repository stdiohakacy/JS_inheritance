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

let dog = new Dog("Kiki");
dog.shout();	//work
dog.sayType();	//work
dog.sayName();	// not work => Dog not inherited prototype from superclass 