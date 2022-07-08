const readline = require ('readline')
const { stdin : input, stdout: output } = require ('process');
const rl = readline.createInterface ({input, output});



class View {
  constructor() {

  }
  quest(question) {
  return new Promise((resolve, reject) => {
      rl.question(question ,(answer) => {
      return resolve (answer);
      })
    })
  }
  }
  const view = new View

  view.quest ('Выбери тему: ' )
    .then((answer) => {
      console.log('Твой ответ: ', answer);
      return question ('Вопрос 1: ');
    })
    .then ((data) => {
      console.log('\n', data)
      return question('Вопрос 2: ');
    })
    .then ((data) => {
      console.log('\n', data);
    })
    .then(() => rl.close())
 
module.exports = View





