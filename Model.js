const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')

class Model {
  constructor() {

  }
  readTopics(){
    
    fs.readFile('./topics/nighthawk_flashcard_data.txt', 'utf-8', (err, file) => {
      const newArr = file.split('\n')
      const a = newArr.filter((el) => el !== '')
      let arr = [];
      for(let i = 0; i< a.length; i += 2){
        arr.push ({quest : a[i], answer : a[i + 1]})
      }
      console.log(arr);
      })
      
  }
}
    


const model = new Model()
console.log(model.readTopics());
// readTopics = (path) => {
//   return new Promise((resolve, rejects) =>{
//     fs.readdir(path, (err, nameFile) =>{
//       if(err) {
//         rejects(err)
//       } resolve(nameFile)
//     })
//   })
// }

// reName = (oldName, newName) => {
//   return new Promise((resolve, rejects) => {
//    fs.rename(oldName, newName, (err) => {
//     if(err) {
//       rejects(err)
//     } resolve()
//    })
//   })
// }

// readTopics(path)
//   .then(arr => {
//     arr.forEach(name => {
//       reName(`./topics/${name}`)
//       .then(files => console.log(files))
//     });
//   })

module.exports = Model