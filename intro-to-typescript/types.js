var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// EXAMPLE //
//var n : any = 1;
var n = 1;
n = 123;
//n = 'Robb'; 
//it will return an error when transpiled into js. we can change Number into any to take any form of argument but it is not advisable and defeat the purpose of typescript
// TYPES //
var isWinter = false;
var count = 5;
var name = "got";
var namesString = ["Jon", "Rickon", "Arya"];
var namesAny = ["Jon", "Rickon", "Arya", 5];
// Store variables
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Catlyn;
function getName() {
    return "Starks";
}
function getNameVoid() {
    console.log("Winter is coming!");
}
function printName(lanister) {
    console.log(lanister.name);
}
printName({ name: "Geoffry" });
printName({ name: "Joe" });
// CLASSES //
var Ranger = (function () {
    function Ranger() {
        this.name = "Brandon";
        this.saying = Ranger.castle;
    }
    Ranger.prototype.hello = function (person) {
        console.log("Hello, " + person);
    };
    Ranger.castle = "Winterfell";
    return Ranger;
}());
var ned = new Ranger();
ned.saying = "Winter is Coming";
ned.hello("Robert");
// CLASSES + INHERITANCE //
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing");
    };
    return Person;
}());
var bob = new Person("Bob");
bob.dance();
var AwesomePerson = (function (_super) {
    __extends(AwesomePerson, _super);
    function AwesomePerson() {
        _super.apply(this, arguments);
    }
    AwesomePerson.prototype.dance = function () {
        console.log("so awesome");
        _super.prototype.dance.call(this);
    };
    return AwesomePerson;
}(Person));
var billy = new AwesomePerson("Billy");
billy.dance();
// MODULE //
var Utility;
(function (Utility) {
    var Useful = (function () {
        function Useful() {
        }
        Useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return Useful;
    }());
    Utility.Useful = Useful;
})(Utility || (Utility = {}));
