var mysql = require('./mysqlbase');
class comicmodel extends mysql {
  constructor() {
    super()
    this.tbname = "comic";
  }
  GetComic(cb) {
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
module.exports = comicmodel;
//首页的漫画 