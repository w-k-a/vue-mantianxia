<template>
  <!--底部组件  -->
  <div>
    <div class="footer">
      <div class="row">
        <div class="ft-nav">
          <dl class="w1">
            <dt>关于我们</dt>
            <dd v-for="item in list1">
              <router-link class="a" to="/">{{item.name}}</router-link>
            </dd>
          </dl>
          <dl class="w2">
            <dt>商务合作</dt>
            <dd v-for="item in list2">
              <router-link class="a" to="/">{{item.name}}</router-link>
            </dd>
          </dl>
          <dl class="w3">
            <dt>联系我们</dt>
            <dd v-for="item in list3">
              <router-link class="a" to="/">{{item.name}}</router-link>
            </dd>
            <dd>
              <a class="a3" href>在线反馈</a>
              <i class="iconfont icon-62 fankuai"></i>
            </dd>
          </dl>
          <dl class="w4">
            <dt>关注我们</dt>
            <dd style="overflow: inherit;">
              <div class="ft-threepart">
                <a class="item" href="#">
                  <i class="iconfont icon-weixin1"></i>
                  <div class="bd">
                    <div class="thumbnail">
                      <img src="https://www.zymk.cn/static/images/default/weixin.png" alt />
                      <p class="info">扫一扫，关注我们</p>
                    </div>
                  </div>
                </a>
                <a class="item" href="#">
                  <i class="iconfont icon-weibo"></i>
                  <div class="bd">
                    <div class="thumbnail">
                      <img src="https://www.zymk.cn/static/images/default/weixin.png" alt />
                      <p class="info">扫一扫，关注我们</p>
                    </div>
                  </div>
                </a>
                <a class="item" href="#">
                  <i class="iconfont icon-tengxunweibo1"></i>
                  <div class="bd">
                    <div class="thumbnail">
                      <img src="https://www.zymk.cn/static/images/default/weixin.png" alt />
                      <p class="info">扫一扫，关注我们</p>
                    </div>
                  </div>
                </a>
              </div>
            </dd>
          </dl>
        </div>
        <ul class="ft-rqCode">
          <li class="item">
            <div class="thumbnail">
              <img
                class="img1"
                src="../assets/app.png"
                alt="扫描下载APP"
              />
              <p class="info">扫描下载APP</p>
            </div>
          </li>
          <li class="item">
            <img src="https://www.zymk.cn/static/images/default/pc_slogo.png" alt="少年有梦，青春有爱!" />
          </li>
        </ul>
      </div>
      <div class="row-down">
        <p class="copyright tac">
          <router-link to="/">{{msg}}</router-link>
          <span class="dark">|</span>
          鄂网文(2016)6601-161号
          <span class="dark">|</span>
          <router-link to="/">{{msg1}}</router-link>
          <br />Copyright ©2006-2019&nbsp;&nbsp;
          <router-link to="/">{{msg2}}</router-link>小明太极(湖北)国漫文化有限公司 成都二次元动漫有限公司 版权所有&nbsp;&nbsp;
          <router-link class="img1" to="/"></router-link>
          <a href>
            <img src="https://static.anquan.org/static/outer/image/sm_124x47.png" alt />
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  naem: "footer",
  data() {
    return {
      msg: "鄂ICP备16020642号-9",
      msg1: "鄂公网安备42010602000214号",
      msg2: "漫天下客网",
      list1: [
        {
          name: "漫客简介",
          uri: "/"
        },
        {
          name: "法律声明",
          uri: "/"
        },
        {
          name: "帮助中心",
          uri: "/"
        }
      ],
      list2: [
        {
          name: "版权合作",
          uri: "/"
        },
        {
          name: "投稿指南",
          uri: "/"
        }
      ],
      list3: [
        {
          name: "电话: 027-82881816/82882816",
          uri: "/"
        },
        {
          name: "邮箱: service@zymk.cn",
          uri: "/"
        },
        {
          name: "QQ: 276690507  276690507",
          uri: "/"
        },
        {
          name: "投稿: tougao@xiaomingtaiji.com",
          uri: "/"
        }
      ]
    };
  }
};
</script>

<style scoped>
div::after {
  content: " ";
  display: block;
  clear: both;
}

.footer {
  width: 100%;
  padding-bottom: 24px;
  color: #fff;
  background-color: #555;
  background: url(../assets/header_bg.jpg);
}

.row {
  padding: 16px 0;
  border-bottom: 1px solid #484848;
  width: 80%;
  min-width: 960px;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.row .ft-rqCode {
  width: 362px;
  text-align: center;
  font-size: 0;
}

.ft-rqCode .item {
  display: inline-block;
  list-style: none;
  margin: 0 8px;
  vertical-align: middle;
}

.thumbnail {
  width: 114px;
  height: 114px;
  background-color: #999;
}

.thumbnail .img1 {
  width: 114px;
  height: 114px;
}

.thumbnail .info {
  width: 114px;
  font-size: 12px;
  line-height: 24px;
  margin: 0;
}

.item > img {
  width: 192px;
  height: 48px;
}

.ft-nav {
  width: 600px;
  /* margin-right: 360px; */
}

.ft-nav dl {
  display: inline;
  float: left;
  height: 135px;
  /* border-left: 1px solid transparent; */
  border-right: 1px solid #EBEEF5;
  font-size: 12px;
  padding: 0 16px;
  line-height: 21px;
  text-align: left;
}

.ft-nav dl.w1 {
  border-left: none;
}

.ft-nav dl.w4 {
  border-right: none;
}

dl dt {
  color: #fff;
  font-size: 14px;
  margin-bottom: 8px;
  padding-top: 1px;
}

dl dd {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0;
}

.a {
  text-align: left;
  color: #fff;
  text-decoration: none;
}

.a:hover {
  border-bottom: 1px solid #fff;
}

.w3 dd:last-of-type {
  position: relative;
  display: inline-block;
  padding: 0 8px 0 28px;
  height: 20px;
  margin-top: 8px;
  line-height: 18px;
  background-color: #5ccf5a;
  border-radius: 10px;
  color: #fff;
  overflow: inherit;
  //前端兼容
  filter: alpha(opacity=50);
  opacity: 0.5;
  transition: 0.3s;
}

.w3 dd:last-of-type .a3 {
  text-decoration: none;
  color: #fff;
}

.w3 dd:last-of-type:hover {
  text-decoration: none;
  color: #fff;
  opacity: 1;
}

.fankuai {
  position: absolute;
  display: block;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  background-color: #F7BA00;
  left: 0;
  top: -2px;
  color: #fff;
  border-radius: 50%;
  font-size: 16px;
}

.ft-threepart {
  font-size: 0;
  margin-top: 2px;
}

.ft-threepart > .item {
  text-decoration: none;
  font-size: 12px;
  position: relative;
  display: inline-block;
  width: 48px;
  height: 48px;
  margin-left: 8px;
  text-align: center;
  cursor: pointer;
}

.ft-threepart > .item > i {
  display: block;
  width: 48px;
  height: 48px;
  line-height: 48px;
  color: #fff;
  font-size: 32px;
  border-radius: 50%;
  filter: alpha(opacity=30);
  opacity: 0.3;
  transition: 0.3s ease-in;
}

.item > i.icon-weixin1 {
  background-color: #5ccf5a;
}

.item > i:hover {
  border-radius: 0;
  opacity: 1;
}

.item > i.icon-weibo {
  background-color: yellow;
}

.item > i.icon-tengxunweibo1 {
  background-color: #1c9ef6;
}

.bd {
  visibility: hidden;
  position: absolute;
  width: 114px;
  height: 138px;
  bottom: 48px;
  right: 0;
  background-color: #ddd;
  overflow: hidden;
  color: #999;
}

.bd > .thumbnail {
  background-color: transparent;
}

.bd > .thumbnail > img {
  width: 114px;
  height: 114px;
}

.bd > .thumbnail > .info {
  width: 114px;
  height: 24px;
  line-height: 14px;
}

.item:hover .bd {
  visibility: inherit;
}

.row-down {
  min-width: 960px;
  max-width: 80%;
  width: 80%;
  border-top: 1px solid #EBEEF5;
  margin: 0 auto;
}

.row-down > .copyright {
  padding-top: 8px;

  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  margin: 0 230px;
  padding-right: 71px;
}

.copyright a {
  text-decoration: none;
  color: #fff;
}

.dark {
  color: #ccc;
}
</style>
