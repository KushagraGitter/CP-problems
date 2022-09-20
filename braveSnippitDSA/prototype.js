function foo(name) {
    this.name = name;
}

foo.prototype.getName = function getName() {
    return this.name;
}

function bar(age) {
    this.age = age;
}

bar.prototype = Object.create(foo.prototype);
//bar.constructor = foo.constructor;

let fooObj = new foo('Kushagra')
let booObj = new bar(28);