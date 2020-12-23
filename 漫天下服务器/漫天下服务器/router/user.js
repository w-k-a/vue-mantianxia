const express = require('express');
const UserMoudel = require('../module/UserMoudel');
const router = express.Router();

router.get('/login', (req, res) => {
    let userData = req.query;
    // 对数据的正确性进行验证
    let usermodel = new UserMoudel();
    usermodel.userLoginByusername(userData.username, (ads) => {

        if (ads.code == -1) {
            console.log(ads.err);
            res.json({
                code: -2,
                Msg: '系统性错误'
            });
            return;
        }
        // 验证账号是否存在
        if (ads.code == 100) {
            if (ads.results.length == 0) {
                res.json({
                    code: -1,
                    Msg: '账号不存在'
                });
                return;
            }
        }
        // 密码验证
        if (userData.passwd != ads.results[0].passwd) {
            res.json({
                code: 0,
                Msg: '密码错误'
            });
            return;
        }
        res.json({
            code: 1,
            Msg: '成功'
        });
    });
});


router.get('/register', (req, res) => {
    let usermodel = new UserMoudel();
    usermodel.nuerregiestByusername(req.query, (results) => {
        console.log(results)
        if (results.insertId) {
            res.json({
                code: 2,
                Msg: '注册成功'
            });
        } else if (results.code == -2) {
            res.json(results);
        } else {
            res.json({
                code: -1,
                Msg: '注册失败'
            });
        }

    });
});

module.exports = router;