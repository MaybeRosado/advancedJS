class Vehicle {
    constructor(wheels, topSpeed){
        this.wheels = wheels;
        this.topSpeed = topSpeed;
    }
}

const trycicle = new Vehicle(3, 20);
console.log(trycicle);

class Car extends Vehicle{
    constructor(wheels, topSpeed, brand){
        super(wheels, topSpeed );
        this.brand = brand;
    }
}
let car = new Car(3, 12, 'Ford');
console.log(car)