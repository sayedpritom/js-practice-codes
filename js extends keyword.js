// Class inheritance 

class Car {
    constructor(brand) {
        this.carBrand = brand
    }
    pop() {
        return 'I have a ' + this.carBrand
    }
}

class Auto extends Car {
    constructor(brand, model) {
        super(brand)
        this.carModel = model
    }
    show() {
        return 'I love ' + this.carModel + '&' + this.pop()
    }
}

const x = new Car("corolla").pop()
const y = new Auto("hyundai", "sonata " ).show()

console.log(y);