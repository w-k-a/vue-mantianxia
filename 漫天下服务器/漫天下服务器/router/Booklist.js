const express=require("express");
const selectsql = require('../module/BooklistModel');
const router=express.Router();
router.get("/update",(req,res)=>{
    var getmysql=new selectsql();
    getmysql.getbooklist((abc)=>{
        if(abc.code==-100){
            res.send({code:-1,Msg:"后端错误！"});
            return ;
        }
        if(abc.code==200){    
            res.send({code:2,Msg:abc.res});
        }
    })
})// 更新模块


router.get("/booklist",(req,res)=>{
    var getmysql=new selectsql();
    getmysql.getclassfy((abc)=>{
        if(abc.code==-100){
            res.send({code:-1,Msg:"后端错误！"});
            return ;
        }
        if(abc.code==200){    
            res.send({code:2,Msg:abc.res});
        }
    })
})// 更新模块
router.get("/login",(req,res)=>{
	var getmysql=new selectsql();
	getmysql.Urseloginbyursename((abc)=>{
		if(abc.code==-100){
			res.send({code:-1,Msg:"后端错误！"});
			return;
		}
		if(abc.code==200){
			res.send({code:2,Msg:abc.res})
		}
	})
})

router.get("/register",(req,res)=>{
	var getmysql=new selectsql();
	getmysql.urseRegister((abc)=>{
		if(abc.code==-100){
			res.send({code:-1,Msg:"后端错误！"});
			return;
		}
		if(abc.code==200){
			res.send({code:2,Msg:abc.res})
		}
	})
})



module.exports=router;