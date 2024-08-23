const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

const Read = require("./Read");

class Prompt {
  static async getQuiz() {
    try {
      const name = [{ type: "input", name: "username", message: "Введи имя:" }];

      const topic = [
        {
          type: "list",
          name: "topics",
          message: "Какую тему хочете?",
          choices: [{ name: "Мемесы" }, { name: "Океан" }],
        },
      ];
      prompt(name).then((answers) => {
        const userName = answers.username;
        if (answers.exit) {
          process.exit();
        } else {
          prompt(topic).then((check) => {
            const { memes, ocean } = Read.parseFile();
            if (check.topics === "Мемесы") {
              Read.showQuiz(memes, userName);
            } else Read.showQuiz(ocean, userName);
          });
        }
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = Prompt;
