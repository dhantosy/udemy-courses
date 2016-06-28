// EXAMPLE //
//var n : any = 1;
var n : number = 1;

n = 123;
//n = 'Robb'; 
//it will return an error when compiled into js. we can change Number into any to take any form of argument but it is not advisable and defeat the purpose of typescript


// TYPES //
var isWinter : boolean = false;
var count : number = 5;
var name : string = "got";

var namesString : string[] = ["Jon", "Rickon", "Arya"];
var namesAny : any[] = ["Jon", "Rickon", "Arya", 5];

// Store variables
enum Starks {Jon, Bran, Eddard, Catlyn};
var cat : Starks = Starks.Catlyn;

function getName() : string {
	return "Starks";
}

function getNameVoid() : void {
	console.log("Winter is coming!");
}


// INTERFACES //
// required parameters. place ? for it to be optional
interface Lanister {
	name: string;
	age?: number;
}

function printName(lanister : Lanister) {
	console.log(lanister.name);
}

printName({name: "Geoffry"});
printName({name: "Joe"});


// CLASSES //
class Ranger {
	name: string = "Brandon";
	static castle: string = "Winterfell"
	saying: string;

	constructor() {
		this.saying = Ranger.castle;
	}

	hello(person: string) {
		console.log("Hello, " + person);
	}
}

var ned = new Ranger();
ned.saying = "Winter is Coming";
ned.hello("Robert");


// CLASSES + INHERITANCE //
class Person {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	dance() {
		console.log(this.name + " is dancing");
	}
}

var bob = new Person("Bob");
bob.dance();

class AwesomePerson extends Person {
	dance() {
		console.log("so awesome");
		super.dance();
	}
}

var billy = new AwesomePerson("Billy");
billy.dance();


// MODULE //
module Utility {

	export class Useful {
		timesTwo(n: number) {
			return n * 2;
		}
	}

}


