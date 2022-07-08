const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')

class Model {
  constructor(question) {
  }
  readTopics(path){
    
    fs.readFile(`./topics/${path}.txt`, 'utf-8', (err, file) => {
      const newArr = file.split('\n')
      const a = newArr.filter((el) => el !== '')
      let arr = [];
      for(let i = 0; i< a.length; i += 2){
        arr.push ({quest : a[i], answer : a[i + 1]})
      }
      return arr;
      })
      
  }
  readTopics2(){
    
    fs.readFile('./topics/otter_flashcard_data.txt', 'utf-8', (err, file) => {
      const newArr = file.split('\n')
      const a = newArr.filter((el) => el !== '')
      let arr = [];
      for(let i = 0; i< a.length; i += 2){
        arr.push ({quest : a[i], answer : a[i + 1]})
      }
      return arr;
      })
      
  }
  readTopics3(){
    
    fs.readFile('./topics/raccoon_flashcard_data.txt', 'utf-8', (err, file) => {
      const newArr = file.split('\n')
      const a = newArr.filter((el) => el !== '')
      let arr = [];
      for(let i = 0; i< a.length; i += 2){
        arr.push ({quest : a[i], answer : a[i + 1]})
      }
      return arr;
      })
      
  }

}

const model = new Model()
model.readTopics()
model.readTopics2()
model.readTopics3()

module.exports = Model