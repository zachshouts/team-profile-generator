const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

const questions = [
    {
        type: 'input',
        message: "Enter the intern's name",
        name: 'name'
    },
    {
        type: 'number',
        message: 'Enter employee ID number',
        name: 'id'
    },
    {
        type: 'email',
        message: "Enter the intern's email",
        name: 'email'
    },
    {
        type: 'input',
        message: "Enter the intern's school",
        name: 'school'
    }
];

function createEmployee(data) {
    const intern = new Intern(data.name, data.id, data.email, data.school);
    return intern;
}

module.exports = {
    Intern,
    createEmployee,
    questions
};