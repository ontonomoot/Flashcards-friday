const readline = require ('readline')
const { stdin : input, stdout: output } = require ('process');
const rl = readline.createInterface ({input, output});
const Model = require("./Model");
const model = new Model

class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }

  run() {

    console.log(model.this);

    // Просим экземпляр класса модели прочитать папку со всеми темами и составить меню.
    // Попутно передаем метод контроллера this.printTopicsController,
    // так как нам нужно отправить сформинованное меню на вывод в экземпляр класса view
    // после того, как завершится асинхронная операция чтения папки
    // Здесь this.printTopicsController — является callback'ом  
    // this.model.readTopics(this.printTopicsController)
  }

  printTopicsController() {
    // console.log(this.model);
  }
    
    // Тут нужно попросить экземпляр класса view вывести меню пользователю, 
    // а также дождаться ответа последнего
  }

  
// }
// const question = (question) =>
//   new Promise((resolve, reject) => 
//     rl.question(question ,(answer) => {
//       resolve (answer);
//     })
//   );

//   question ('Выбери тему: ' )
//     .then((data) => {
//       console.log('Твой ответ: ', data);
//       return question('Вопрос 1: ');
//     })
//     .then ((data) => {
//       console.log('\n', data)
//       return question('Вопрос 2: ');
//     })
//     .then ((data) => {
//       console.log('\n', data);
//     })
//     .then(() => rl.close())


module.exports = Controller