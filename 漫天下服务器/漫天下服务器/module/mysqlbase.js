const mysql =require('mysql');

class mysqlbase{
    constructor(){
        this.connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "bosom",
            multipleStatements:true,
          });
          this.connection.connect();
    }
	
    end(){
        this.connection.end();
    }
}
module.exports=mysqlbase;