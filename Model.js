const { rejects } = require('assert')
const fs = require('fs')
const { resolve } = require('path')

class Model {
  constructor() {

  }
  readTopics(){
    fs.readdir('./topics', (err, nameFile) => {
      if(err) {
        return 'ошибка!'
      } 
      return nameFile
    })
  }
}


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