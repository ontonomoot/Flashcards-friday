const readline = require ('readline')
const { stdin : input, stdout: output } = require ('process');
const rl = readline.createInterface ({input, output});
const Model = require("./Model");
const model = new Model



class View {
  constructor(model) {
    this.model = model
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
const topicsArr = ['ястребы','еноты','выдры']
  view.quest ('Выбери тему:\n Ястребы \n Еноты \n Выдры \n')

    .then((answer) => {
        
      if (answer === 'Еноты') {
        
          model.readTopics1()
            .then(file => console.log(file))
          
          
          }
      })


      // console.log('Твой ответ: \n', answer);
      // return question ('Вопрос 1: ');
    // .then ((data) => {
    //   console.log('\n', data)
    //   return question('Вопрос 2: ');
    // })
    // .then ((data) => {
    //   console.log('\n', data);
    // })
    // .then(() => rl.close())
 
module.exports = View





