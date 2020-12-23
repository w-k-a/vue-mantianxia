const express = require("express");
const app = express();
// const bodyParser=require('body-parser')
//跨域处理
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', `*`);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/comic', require('./router/comic.js')); //主页子路由
app.use("/cate", require("./router/getdata.js")); //分类子路由
app.use('/bookrank',require('./router/Rank.js')); //排行子路由
app.use("/booklist",require("./router/Booklist.js")); //书列表模块
app.use("/user",require("./router/user.js"));//用户

app.listen(8081, () => {
  console.log(`Server started on port 8081`);
});
