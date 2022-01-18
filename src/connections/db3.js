const mongoose = require("mongoose");

const callback=(err, result)=> {
    // console.log('result:', result)
    if (err) {
      throw err
    }
  }

  const conn =  mongoose.createConnection('mongodb://localhost:27017/newbie', {
         useNewUrlParser: true}, callback);

  
  module.exports = conn; 