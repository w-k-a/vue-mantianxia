const express = require('express');
const RankModel1 = require('../module/RankModel');
const router = express.Router();

router.get('/ran', (req, res) => {
    let info = req.query;
    console.log(info)
    let RankModel =new RankModel1()
    RankModel.ran(info.info,info.tablename,(results)=>{ //修改数据库的表名
        res.json(results);
    })
});
module.exports=router;


//排行接口