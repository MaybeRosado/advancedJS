class Car {
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;

    }

    setColor(color){
        this.color = color;
    }
}

let Subaru = new Car('Subaru', 'Outback', 2005, 'Grey');
console.log(Subaru);
Subaru.setColor('Red');
console.log('New Color: ' + Subaru.color);