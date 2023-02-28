// Class inheritance 

class Car {
    constructor(brand) {
        this.carBrand = brand
    }
    show() {
        return `I love ${this.carBrand}`
    }
}

class Model extends Car {
    constructor(model, brand) {
        super(brand)
        this.carModel = model
    }
    print() {
        return this.show() + ' I own a ' + this.carModel
    }
}

const a = new Model('Camry', 'Toyota').print()

// console.log(x);


// js constructor function
function Person(name, nationality, language, age, profession) {
    this.name = name;
    this.nationality = nationality;
    this.language = language;
    this.age = age;
    this.profession = profession
}

const b = new Person('Sayed', 'Bangladeshi', 'Bangli', 24, 'programmer')
