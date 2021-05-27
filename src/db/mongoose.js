const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
   useNewUrlParser:true,
   useCreateIndex:true,//allowing us to quickly access the data
   useFindAndModify:false //for no deprications and warnings.
 })


