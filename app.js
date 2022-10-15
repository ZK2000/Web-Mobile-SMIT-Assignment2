// Task # 01

class PersonAccount{
    constructor(firstName, lastName, incomeproperty, expenseproperty){
        this.firstName= firstName;
        this.lastName= lastName;
        this.incomeproperty= incomeproperty;
        this.expenseproperty= expenseproperty;
    }

    accountBalance = () => console.log(`Account Balance: ${total}, 
    ${this.incomeproperty}: ${incomes[0]} (income), 
    ${this.expenseproperty}: ${expenses[2]} (expense)
    Additional Income: ${addInc(2000)}
    Additional Expense: ${addExp(500)}`);
}

addInc = (addInc) => {return addInc}

addExp = (addExp) => {return addExp}

let incomes= [3000, 4500, 2000, 6000, 7200];

let expenses= [3500, 1500, 1100, 5400, 6000];

let total= (incomes[0] - expenses[2]);

p1 = new PersonAccount("Zain", "Khan", "Bonus Receiveable", "Rent Payable");









// Task # 02

class Automobile {
    constructor(name, model, color, type){
        this.name= name;
        this.model= model;
        this.color= color;
        this.type= type;
    }

    start = () => console.log(`${this.name} is ready for drive`);

    openDoor = () => console.log("Door is open");
}

class Car extends Automobile {
    constructor(name, model, color, type, doors, maxspeed){
        super(name, model, color, type);
        this.doors= doors;
        this.maxspeed= maxspeed;
    }
}

class Truck extends Automobile {
    constructor(name, model, color, type, doors, maxspeed){
        super(name, model, color, type);
        this.doors= doors;
        this.maxspeed= maxspeed;
    }
}

class Bus extends Automobile {
    constructor(name, model, color, type,doors, maxspeed){
        super(name, model, color, type);
        this.doors= doors;
        this.maxspeed= maxspeed;
    }
}

auto1 = new Car("Car", "Civic-Oriel RS", "Black", "Automatic", 4, "220 km/hr");
auto2 = new Truck("Truck", "Cyber Truck", "Grey", "Automatic", 2, "210 km/hr");
auto3 = new Bus("Bus", "Sprinter Vip Bus", "Golden", "Manual", 5, "202 km/hr");
