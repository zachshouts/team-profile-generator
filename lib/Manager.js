const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

const questions = [
    {
        type: 'input',
        message: "Enter the manager's name",
        name: 'name'
    },
    {
        type: 'number',
        message: 'Enter employee ID number',
        name: 'id'
    },
    {
        type: 'email',
        message: "Enter the manager's email",
        name: 'email'
    },
    {
        type: 'number',
        message: "Enter the manager's office number",
        name: 'office'
    }
];

function createEmployee(data) {
    const manager = new Manager(data.name, data.id, data.email, data.office);
    return manager;
}

module.exports = {
    Manager,
    createEmployee,
    questions
};