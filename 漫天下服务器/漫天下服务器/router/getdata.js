const express = require("express");
var formidable = require("formidable");
let router = express.Router();
let datamode=require('../module/datamodle');

// 下面是业务代码

// 获取服务器里面所有的数据
router.post("/getalldata", (req, res) => {
  let  form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, function(err, fields, files) {
    if(err){
        console.log(err);
        return
    }
    console.log(fields);
    let connection=new datamode();
    connection.getalldata(fields,(obj)=>{
        if(obj.code==-2){
            console.log(obj.error);
            res.json('系统故障');
            return  
        }
        else if(obj.code==-1){
            res.json(obj.msg);
            return 
        }
        else{
            res.json(obj.re);
        }
        connection.end();
    })
  });
});






/*         通过输入框搜索数据         */
router.post("/getsearch", (req, res) => {
    let  form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, function(err, fields, files) {
      if(err){
          console.log(err);
          return
      }
      console.log(fields);
      let connection=new datamode();
      connection.getsearchdata(fields,(obj)=>{
          if(obj.code==-2){
              console.log(obj.error);
              res.json('系统故障');
              return  
          }
          else if(obj.code==-1){
              res.json(obj);
              return 
          }
          else{
              res.json(obj.re);
          }
          connection.end();
      })
    });
  });





// 获取排行榜数据

router.post("/getrank", (req, res) => {
    let  form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, function(err, fields, files) {
      if(err){
          console.log(err);
          return
      }
      console.log(fields);
      let connection=new datamode();
      connection.getrankdata(fields,(obj)=>{
          if(obj.code==-2){
              console.log(obj.error);
              res.json('系统故障');
              return  
          }
          else if(obj.code==-1){
              res.json(obj);
              return 
          }
          else{
              res.json(obj.re);
          }
          connection.end();
      })
    });
  });



module.exports = router;
