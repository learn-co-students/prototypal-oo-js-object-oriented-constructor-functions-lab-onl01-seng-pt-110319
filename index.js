class Scooter {
    constructor(year, color, model){
        Object.assign(this,{year, color, model});
    }
}

class Driver {
    constructor(name, age, experience){
        Object.assign(this, {name, age, experience});
    }
}

class PickupLocation {
    constructor(address, city){
        Object.assign(this, {address, city});
    }
}