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
        this.carBrand = brand
        this.carModel = model
    }
    print() {
        return 'I love ' + this.carBrand + ' I own a ' + this.carModel
    }
}

const x = new Model('Camry', 'Toyota').print()
// Create an object with new keyword
const y = new Object()
y.name = 'BMW'
y.year = 2023;

console.log(y);
console.log(x);