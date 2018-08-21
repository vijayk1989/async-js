function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foox: foo // foo is a reference to the function foo()
}

const obj2 = {
    a: 5,
    flee: foo
}

obj.foox();
obj2.flee();
// This is a constructur definition of an object
// var obj = new Object();
// obj = new Object();
// obj.name = "Vijay";
// obj.foo = foo;
class User {
    constructor(name) {
        this.myName = name;
    }
}

const u = new User('Vijaykumar');
console.log(u.myName);
