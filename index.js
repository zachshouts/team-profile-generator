const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];
const finished = false;

async function init() {
    const data = await inquirer.prompt(Manager.questions)
    employees.push(Manager.createEmployee(data));
    while (!finished) {
        generalQuestions();
    }
    console.log(employees);
}

async function generalQuestions() {
    const response = await inquirer.prompt([
        {
            type: 'list',
            message: 'Add an engineer, intern, or finish your team',
            choices: ['Engineer', 'Intern', 'Finish'],
            name: 'advance'
        }
    ])
    switch(response.advance) {
        case 'Engineer':
            const engineerData = await inquirer.prompt(Engineer.questions)
            employees.push(Engineer.createEmployee(engineerData));
            break;
        case 'Intern':
            const internData = await inquirer.prompt(Intern.questions)
            employees.push(Intern.createEmployee(internData));
            break;
        case 'Finish':
            console.log('Finished');
            finished = true;
    }
}

init();