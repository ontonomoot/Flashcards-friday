const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')

class Model {
  constructor(question) {
      this.question = question;
      }

  readTopics1() {
    return new Promise ((resolve, rejects) => {
      fs.readFile('./topics/ястребы.txt', 'utf-8', (err, file) => {
        const newArr = file.split('\n')
        const a = newArr.filter((el) => el !== '')
        let arr = [];
        for(let i = 0; i< a.length; i += 2){
            arr.push ({quest : a[i], answer : a[i + 1]})
        }
        return resolve(arr);
      })
    })
  }
      
  readTopics2() {
    return new Promise ((resolve, rejects) => {
    fs.readFile('./topics/еноты.txt', 'utf-8', (err, file) => {
      const newArr = file.split('\n')
      const a = newArr.filter((el) => el !== '')
      let arr = [];
      for(let i = 0; i< a.length; i += 2){
        arr.push ({quest : a[i], answer : a[i + 1]})
      }
      return resolve(arr);
      })
    })
  }
  readTopics3() {
    return new Promise ((resolve, rejects) => {
    fs.readFile('./topics/выдры.txt', 'utf-8', (err, file) => {
      const newArr = file.split('\n')
      const a = newArr.filter((el) => el !== '')
      let arr = [];
      for(let i = 0; i< a.length; i += 2){
        arr.push ({quest : a[i], answer : a[i + 1]})
      }
      return resolve(arr);
    })
    })  
  }
}
const model = new Model()
// model.readTopics()
// model.readTopics2()
// model.readTopics3()

model.readTopics1()
  .then(file => console.log(file))


module.exports = Model