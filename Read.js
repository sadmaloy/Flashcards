const fs = require("fs");
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule();
// const path = require('path')

class Read {
  static parseFile() {
    const files = fs.readdirSync("./topics", "utf-8");
    const topics = {};
    topics.memes = JSON.parse(fs.readFileSync(`./topics/${files[0]}`, "utf-8"));
    topics.ocean = JSON.parse(fs.readFileSync(`./topics/${files[1]}`, "utf-8"));
    return topics;
  }

  static async showQuiz(topic, user) {
    await prompt(topic).then((answers) => {
      const points = Object.values(answers).reduce(
        (acc, curr) => acc + curr,
        0
      );
      if (points > 40) {
        console.log(`${user}, красаучик! Ты заработал ${points} из 80 баллов`);
      } else {
        if (points < 0) {
          console.log(
            `${user}, ёкарный бабай, не дожал!\nТы заработал ВСЕГО ЛИШЬ ${points} из 80 баллов...\nЯ разочарован в тебе...\nНе пиши мне больше...\nУдали мой номер...\nЗабудь моё имя...\nМиша, пока...`
          );
        } else
          console.log(
            `${user}, не такой уж ты и красаучик...\nНадо было за себя и за Сашку, а по итогу заработал ${points} из 80 баллов.\nЭто печально...`
          );
      }
    });
  }
}

module.exports = Read;
