let mongoose=require('mongoose');
mongoose.set('useCreateIndex',true);
//1.连接数据库

const IP='localhost:';
const PORT="27017";
const DB_NAME = 'test'

//2.绑定数据库监听

function db(callback){

  mongoose.connect(`mongodb://${IP}${PORT}/${DB_NAME}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })

  mongoose.connection.on('open',function(error){
    if(error){
      console.log("数据库连接失败",error)
      callback('connect failed')
    }else{
      console.log('数据库连接成功')
      callback();
    }
  })
}

module.exports=db;

