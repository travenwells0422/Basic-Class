// Parent/Super Class
class Employees {
    constructor(position) {
        this.position = position;
    }

    details() {
        return `Working as a fulltime ${this.position}`;
    }
}

// Child Class
class Employee extends Employees {
    constructor(name, age, position) {
        super(position);
        this.name = name;
        this.age = age;
    }

    description() {
        return `${this.name}, a ${this.age} year old is working as a fulltime ${this.position}`;
    }
}

const employees = new Employees("Bob", "28", "Manager");
const employee = new Employee("Traven", "29", "Software Developer");

console.log(employee.details());
console.warn(employee.description());
