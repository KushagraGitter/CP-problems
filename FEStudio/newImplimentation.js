function createInstance(constructor, ...args) {
    let obj = {};
    //obj.__proto__ = constructor.prototype
    //obj.prototype =
    Object.setPrototypeOf(obj, constructor.prototype)
    constructor.apply(obj, args);
    return obj;
}

//driver
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function getName() {
    return this.name
}

let personObj = createInstance(Person, "Kushagra", 26)
console.log(personObj.getName())