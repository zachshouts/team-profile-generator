const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];
let finished = false;

async function init() {
    const data = await inquirer.prompt(Manager.questions)
    employees.push(Manager.createEmployee(data));
    generalQuestions();
}

async function generalQuestions() {
    if (!finished) {
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
        generalQuestions();
    } else {
        renderHtml();
    }
}

function renderHtml() {
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
    </head>
    <body>
        <header class="container-fluid text-center text-light bg-danger py-5">
            <h1>My Team</h1>
        </header>

        <main class="container-fluid pt-5 d-flex justify-content-center">
        `;

    employees.forEach(obj => {
        html += `<div class="card col-2 mx-2">
        <div class="card-header bg-primary text-light">
            <h4 class="card-title">${obj.getName()}</h4>
            <h4 class="card-text">${obj.getRole()}</h4>
        </div>
        <div class="card-body my-3">
            <ul class="list-group">
                <li class="list-group-item">ID: ${obj.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${obj.getEmail()}">${obj.getEmail()}</a></li>
                <li class="list-group-item">`;
        
        switch (obj.getRole()) {
            case 'Manager':
                html += `Office Number: ${obj.officeNumber}</li>`;
                break;
            case 'Engineer':
                html += `Github: <a href="https://github.com/${obj.github}" target="_blank">${obj.github}</a></li>`;
                break;
            case 'Intern':
                html += `School: ${obj.school}</li>`;
                break;
        };
        html += `
                </ul>
            </div>
        </div>`;
    });

    html += `
        </main>
    </body>
    </html>`;

    fs.writeFile('./dist/index.html', html, err => err ? console.log(err) : console.log('Success'));
}

init();