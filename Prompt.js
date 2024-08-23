const inquirer = require("inquirer");

const prompt = inquirer.createPromptModule();

const fs = require("fs").promises;

// const Read = require("./Read");

class Prompt {
  static async getQuiz() {
    try {
      const name = [
        { type: "input", name: "username", message: "Введи имя:" },
        {
          type: "confirm",
          name: "exit",
          message: "Вы хочете выйти?",
        },
      ];

      const topic = [
        {
          type: "list",
          name: "topics",
          message: "Какую тему хочете?",
          choices: [{ name: "Мемесы" }, { name: "Океан" }],
        },
      ];
      const quizMemes = JSON.parse(
        await fs.readFile("./topics/memes.json", "utf-8")
      );
      const quizOcean = JSON.parse(
        await fs.readFile("./topics/oceanTopic.json", "utf-8")
      );
      prompt(name).then((answers) => {
        if (answers.exit) {
          process.exit();
        } else {
          prompt(topic).then((check) => {
            if (check.topics === "Мемесы") {
              prompt(quizMemes).then((data) => console.log(Object.values(data).reduce((acc, sum) => acc + sum, 0)));
            } else if (check.topics === "Океан") {
              prompt(quizOcean);
            }
          });
        }
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

Prompt.getQuiz();
