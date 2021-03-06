var mysql = require('./mysqlbase');
class PaiHangModel extends mysql {
  constructor() {
    super()
    this.tbname = "cartoonist";
  }
  GetPH(cb) {
    let sql = `select * from ${this.tbname}`;
    this.connection.query(sql, (err, results) => {
      if (err) {
        cb({
          code: -100,
          err: err
        });
        return;
      }
      cb({
        code: 100,
        results
      });
    });
  }
}
module.exports = PaiHangModel;