let mongoose=require('mongoose');

let Schema=mongoose.Schema;
let studentsRule=new Schema({
  stu_id:{
    type:String,
    required:true,
    unique:true
  },
  name:{
    type:String,
    required:true,
  },
  age:{
    type:Number,
    required:true,
  },
  sex:{
    type:String,
    required:true,
  },
  info:Schema.Types.Mixed,
  date:{
    type:Date,
    default:Date.now()
  },
  enable_flag:{
    type:String,
    default:'Y'
  }

})
module.exports = mongoose.model('students',studentsRule)
