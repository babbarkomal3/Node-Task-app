const mongoose = require('mongoose')


const Task = mongoose.model('Task',{
description:{
  type:String,
  required:true, //description is always provided
  trim:true //cut leftover spaces
 },
  completed:{
  type:Boolean,
  default:false
  }
   })

module.exports = Task