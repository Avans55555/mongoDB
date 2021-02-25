let mongoose=require('mongoose');

//1.连接数据库
mongoose.connect('mongodb://localhost:27017/test',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

//2.绑定数据库监听
mongoose.connection.on('open',function(error){
  if(error){
    console.log("数据库连接失败",error)
  }else{
    console.log('数据库连接成功')
  }
  //3操作数据库
  console.log("1")
})