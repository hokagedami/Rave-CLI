#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

const action = require('./cli-cmds/logic');


const questions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Enter First Name....'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Enter Last Name....'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Enter Phone Number....'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address....'
    },
    {
        type: 'input',
        name: 'cardno',
        message: 'Enter card number....'
    },
    {
        type: 'input',
        name: 'expirymonth',
        message: 'Enter card expiry month....'
    },
    {
        type: 'input',
        name: 'expiryyear',
        message: 'Enter card expiry year....'
    },
    {
        type: 'input',
        name: 'cvv',
        message: 'Enter card cvv....'
    }
];

program
    .version('1.0.0')
    .description('Card Charge CLI Application');

program
    .command('charge')
    .alias('c')
    .description('Charge a card')
    .action(() => {
        prompt(questions)
            .then(answers => action(answers));
    });

if (!process.argv.slice(2).length || !/[arud]/.test(process.argv.slice(2))) {
    program.outputHelp();
    process.exit();
}

program.parse(process.argv);
