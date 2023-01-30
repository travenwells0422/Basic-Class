class Employee {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    details() {
        return `His name is ${this.name} 
        ${this.age} years old, working as a fulltime ${this.position}`;
    }
}

const employee = new Employee("Bob", "28", "Manager");

console.log(employee.details());
