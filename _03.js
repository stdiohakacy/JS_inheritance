function Person(name, password){
	this.name = name;
	this.password = password;
}

Person.prototype.level = "admin";

Person.prototype.getName = function(){
	return this.name;
}

Person.prototype.getPassword = function(){
	return this.password;
}

Person.prototype.getLevel = function(){
	return this.level;
}

let person01 = new Person("person01", "password01");

function User(name){
	this.name = name;
}

User.prototype = new Person();

let person = new Person("person02", "passoword02");
let user = new User("user01", "passoword01");

console.log(person);
console.log(user);
console.log(user.getPassword()); //undefined