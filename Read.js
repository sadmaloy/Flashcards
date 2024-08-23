const fs = require('fs')
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
// const path = require('path')

class Read {
     static  parseFile(){
        const files =  fs.readdirSync('./topics', 'utf-8')
        const topics = {}
        topics.memes = JSON.parse( fs.readFileSync(`./topics/${files[0]}` , 'utf-8'))
        topics.ocean = JSON.parse( fs.readFileSync(`./topics/${files[1]}` , 'utf-8'))
        return topics
    }

    static async showQuiz(topic){
         await prompt(topic).then((answers) => console.log(Object.values(answers).reduce((acc, curr) => acc + curr, 0)))
    }

}


module.exports = Read




 


