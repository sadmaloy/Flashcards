const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();

const fs = require('fs');

const quizMemes = JSON.parse(fs.readFileSync('./topics/memes.json', 'utf-8'));

// console.log(Object.values(quizMemes[0]));

prompt([...quizMemes]).then((answers) => console.log(answers));
