const DateBase = require('./mysqlbase');
class rankmodel extends DateBase {
    ran(info,tablename,callback){
        let sql = `select * from ${tablename} where ${info} order by ${info} desc`;
        this.connection.query(sql,(err,result)=>{
            if(err){
                callback({code: 1001,err: err})
                return 
            }
            callback({code: 1000,result})
        })
    }
}
module.exports = rankmodel