class View {
  constructor() {

  }
  const question = (question) => {
    new Promise((resolve, reject) => 
      rl.question(question ,(answer) => {
        resolve (answer);
      })
    );
    }
    question ('Выбери тему: ' )
      .then((data) => {
        console.log('Твой ответ: ', data);
        return question('Вопрос 1: ');
      })
      .then ((data) => {
        console.log('\n', data)
        return question('Вопрос 2: ');
      })
      .then ((data) => {
        console.log('\n', data);
      })
      .then(() => rl.close())

}

module.exports = View





