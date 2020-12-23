const mysql=require("mysql");
// 导入自己写的数据库模块
const sql=require("./mysqlbase");
class selectsql extends sql{
    constructor(){
        // 负责连接到数据库
        super();
    }
    getbooklist(callback){
        this.name="mantianxia"
        let sql =`select * from ${this.name}`
        this.connection.query(sql,(err,res)=>{
            if(err){
                callback({
                    code:-100,err
                })
                return ;
            }
            callback({
                code:200,res
            })
        })
    }  // 更新 模块代码


    getclassfy(callback){
        this.name="booklists";
        let sql =`select * from ${this.name}`
        this.connection.query(sql,(err,res)=>{
            if(err){
                callback({
                    code:-100,err
                })
                return ;
            }
            callback({
                code:200,res
            })
        })
    }  //   书单模块 模块代码
	 
	    //用户注册
	    urseRegister(){
	        
	    let sql=`INSERT  INTO urse(ursename,passed) VALUE(1,2)`;
	    this.mydb.query(sql,[userData.ursename],(err,results)=>{
	        
	    
	});
	    }
}
module.exports=selectsql;