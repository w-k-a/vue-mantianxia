
const MysqlBase = require('./mysqlbase');

class UserMoudel extends MysqlBase {
   constructor(){
       super();
       this.table='users';
   }
    userLoginByusername(username, callback) {
        let sql = `SELECT * FROM users WHERE username=?`;
        this.connection.query(sql, [username], (err, results) => {
            console.log(results);
            if (err) {
                callback({
                    code: -1,
                    err: err
                });
                return;
            }
            callback({
                code: 100,
                results: results
            })
        });
    }


    nuerregiestByusername(data,callback){
        let sql1 = `SELECT * FROM users WHERE username='${data.username}'`;
        this.connection.query(sql1,(err, results) => {
            console.log(results)
            if (err) {
                callback(err);
            }else {
                if (results.length > 0) {
                    callback({code:-2,Msg:'用户名已存在！'});
                }else {
                    let sql2 = `INSERT INTO users(username,passwd) VALUE ('${data.username}','${data.passwd}') `;
                    this.connection.query(sql2,(err, results) => {
                        if (err) {
                            callback(err);                            
                        }else{
                            callback(results);
                        }
                    })
                }
                
            }

          
            });
        };
    }


module.exports=UserMoudel;