// Parent/Super Class
class Employees {
    constructor(position) {
        this.position = position;
    }

    details() {
        return this.position;
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

console.log(employees.details());
console.warn(employee.description());

const title = document.createElement("h1");
document.body.appendChild(title);
title.innerHTML = "Parent and Child Class";

const employeesClass = document.createElement("p");
document.body.appendChild(employeesClass);
employeesClass.innerText = employee.details();

const employeeClass = document.createElement("h2");
document.body.appendChild(employeeClass);
employeeClass.innerText = employee.description();
