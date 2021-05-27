require('../src/db/mongoose')
const Task = require('../src/models/task')

//Task.findByIdAndDelete('60a69d3008bc031ac47b7b6b').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
//}).then((result)=>{
//    console.log(result)
//}).catch((e)=>{
//   console.log(e)
//})

const deleteTaskAndCount = async (id)=>{
   const task = await Task.findByIdAndDelete(id)
   const count = await Task.countDocuments({completed:false})
   return count
}

deleteTaskAndCount('60a24156d2157c351cd0cc84').then((count)=>{
    console.log(count)
}).catch((e)=>{
   console.log(e)
})
