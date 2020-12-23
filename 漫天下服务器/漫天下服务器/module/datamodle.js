const  base =require('./mysqlbase');
class datamod extends base{
    getalldata(obj,cb){
        let sql = `select * from  message   order by rand() desc`;
        this.connection.query(sql, function(error, results) {
            if(error){
                cb({
                    code:-2,
                    msg:'系统故障',
                    error:error,
                });
                return 
            }
            else if(!results.length){
                cb({
                    code:-1,
                    msg:'没有找到漫画',
                })
                return 
            }
            else{
                cb({
                    code:2,
                    re:results,
                })
            }
        });
    }



    //搜索数据的模型

    getsearchdata(obj,cb){
        let sql = `select * from  message   where title like '%${obj.message}%'  `;
        this.connection.query(sql, function(error, results) {
            if(error){
                cb({
                    code:-2,
                    msg:'系统故障',
                    error:error,
                });
                return 
            }
            else if(!results.length){
                cb({
                    code:-1,
                    msg:[],
                    alert:'没有找到相关漫画',
                })
                return 
            }
            else{
                cb({
                    code:2,
                    re:results,
                })
            }
        });
    }

    //排名的数据模型


    getrankdata(obj,cb){
        let sql = `select * from  rank    `;
        this.connection.query(sql, function(error, results) {
            if(error){
                cb({
                    code:-2,
                    msg:'系统故障',
                    error:error,
                });
                return 
            }
            else if(!results.length){
                cb({
                    code:-1,
                    msg:[],
                    alert:'没有找到相关漫画',
                })
                return 
            }
            else{
                cb({
                    code:2,
                    re:results,
                })
            }
        });
    }





}






    // 分页里的数据模型
  
module.exports=datamod;