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

// DOM Manipulation
const title = document.createElement("h1");
document.body.appendChild(title);
title.innerHTML = "Parent and Child Class";

const employeesClass = document.createElement("p");
document.body.appendChild(employeesClass);
employeesClass.innerText = employee.details();

const employeeClass = document.createElement("h2");
document.body.appendChild(employeeClass);
employeeClass.innerText = employee.description();

const header = document.createElement("header");
document.body.appendChild(header);

//inline - Styling
const body = document.querySelector("body");
body.style.backgroundColor = "gray";

title.style.background = "orange";
title.style.height = "60px";
title.style.paddingTop = "25px";
title.style.textAlign = "center";
title.style.borderStyle = "solid";
title.style.borderRadius = "5rem";
title.style.borderWidth = "10px";
