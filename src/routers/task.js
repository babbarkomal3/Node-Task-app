const express = require('express')
const Task = require('../models/task')
const router = new express.Router()



router.post('/tasks',async(req,res)=>{
   const task = new Task(req.body)
  try{
  await task.save()
  res.status(201).send(task)
 }catch(e){
     res.status(400).send(e) //req.send and req.status in one line.
   }
   
})

router.get('/tasks',async(req,res)=>{
      try{
     const tasks = await Task.find({})
       res.send(tasks)
    }catch(e){
       res.status(500).send() 
   }
  })

router.get('/tasks/:id',async(req,res)=>{
  const _id = req.params.id
   try{
    const task = await Task.findById(_id)
    if(!task){
    return res.status(404).send()
}
     res.send(task)
 }catch(e){
     res.status(500).send()
  }
})

router.patch('/tasks/:id', async(req,res)=>{
   const updates = Object.keys(req.body) //whats being updates i ll create updates array for that and using object.keys ill convert req.body from an obj to an array of properties.
   const allowedUpdates = ['description','completed'] //which properties we want to update
   const isValidOperation = updates.every((update)=> allowedUpdates.includes(update)) //and we ll check if individual updates are listed inside or not.

   if(!isValidOperation){
    return res.status(400).send({error: 'Invalid updates!'})
   }
    try{
     const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})  //req.params.id come from /tasks/:id
      if(!task){

      return res.status(404).send()
    }
     res.send(task)
    }catch(e){
res.status(400).send(e)
     }
})

router.delete('/tasks/:id',async(req,res)=>{
    try{
      const task = await Task.findByIdAndDelete(req.params.id)
      if(!task){
      res.status(404).send()
    }   
      res.send(task)
   }
     catch(e){
      res.status(500).send(e)
    }
})


module.exports = router