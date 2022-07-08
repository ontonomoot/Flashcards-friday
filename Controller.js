const readline = require ('readline')
const { stdin : input, stdout: output } = require ('process');
const rl = readline.createInterface ({input, output});
const Model = require("./Model");
const model = new Model
const View = require("./View");
const view = new View



class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }

  run() {
    model.readTopics1()
      .then(file => console.log(file))
      .then(() => rl.close())

    

    // console.log(model.this);

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





module.exports = Controller