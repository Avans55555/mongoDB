let mongoose=require('mongoose');
let stuModel=require('./module/studentModule');
let db=require('./db/db')


db(function(err){
  if(err){
    console.log('连接失败')
  }else {
    //4.增
    stuModel.create({
      stu_id:'010',
      name:'richard',
      age:'29',
      sex:'man',
      info:66
    },function(err,data){
      if(err){console.log('失败')}
      else{console.log(data);}
    })
  }

})



