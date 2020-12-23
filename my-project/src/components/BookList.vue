<template>
  <!-- 书单 -->
  <div class="box">
    <div class="row">
      <div class="cookize">
        <div class="postion">当前位置&nbsp;:&nbsp;&nbsp;</div>
        <div class="cookbox">
          <el-breadcrumb separator-class="el-icon-arrow-right ">
            <el-breadcrumb-item :to="{ path: '/' }">漫天下网</el-breadcrumb-item>
            <el-breadcrumb-item>书单广场</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <div class="hot-box">
      <router-link class="addbook" to="./">{{msg}}</router-link>
      <div class="editorRecommend">
        <div class="themeHd">
          <h3>{{hotmsg}}</h3>
          <a class="jump" href="#" title="更多">
            <i class="iconfont icon-gengduo"></i>
          </a>
        </div>
        <ul class="booklist-box">
          <li class="booklist" v-for="(el,index) in booklists" v-if="index<10">
            <a href="#" title="后宫那些事儿书单">
              <div class="img">
                <img :src="el.img_url" />
              </div>
              <div class="bookInfo">
                <h4>{{el.title}}</h4>
                <i class="iconfont icon-huaban- heart">{{el.num}}</i>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="bookListing">
        <div class="tabHd">
          <ul class="tabList">
            <li class="hotupdata" v-for="(el,i) in nav" ref="nav_ul" @click="my_li(i)">
              <router-link style="text-decoration: none; color: #000;" to="/Hot">{{el.name}}</router-link>
              <router-link style="text-decoration: none; color: #000;" to="/BookUpdata">{{el.name1}}</router-link>
            </li>
            <i class="modify hide" style="left: 8px; width:40px; display: inline;" ref="nav_i"></i>
          </ul>
          <a class="jump" href="javascript:" title="更多">
            <i class="iconfont icon-gengduo"></i>
          </a>
        </div>
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookList",

  data() {
    return {
      msg: "我来创书单",
      hotmsg: "编辑热推",
      booklists: [],
      nav: [
        {
          name: "热门"
        },
        {
          name1: "更新",
          uri: "/"
        }
      ]
    };
  },
  methods: {
    updata: function() {
      this.$router.push("/bookList/BookUpdata");
    },
    hot: function() {
      this.$router.push("/bookList/Hot");
    },
    my_li: function(i) {
      this.$store.commit("new_li", i);
    }
  },
  //挂载
  mounted() {
    console.log(this.$refs.nav_ul);
    this.$refs.nav_ul.forEach((el, i) => {
      el.addEventListener("mouseenter", e => {
        this.$refs.nav_i.style.transform = `translateX(${84 * i}px)`;
      });
      el.addEventListener("mouseleave", e => {
        this.$refs.nav_i.style.transform = `translateX(${84 *
          this.$store.state.new_li}px)`;
      });
    });
    console.log(this.$store.state.new_li);
    //加载数据库
    var that = this;
    this.$axios
      .get("http://localhost:8081/booklist/booklist")
      .then(function(response) {
        console.log(response.data);
        response.data.Msg.forEach(el => {
          that.booklists.push(el);
          console.log(that.booklists);
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

div::after {
  content: " ";
  display: block;
  clear: both;
}

.box {
  width: 100%;
}

.row {
  width: 80%;
  min-width: 960px;
  max-width: 80%;
  /* background: wheat; */
  margin: 0 auto;
}

.cookize {
  height: 48px;
  line-height: 48px;
  display: flex;
  justify-content: flex-start;
}

.cookbox {
  line-height: 48px;
}

.postion {
  color: #999;
  font-family: Microsoft Yahei, SimSun, Tahoma, arial, SimHei, sans-serif;
  font-size: 14px;
  font-weight: 400;
}

.el-breadcrumb {
  line-height: 48px;
}

.cookbox >>> .is-link {
  font-weight: 400;
  color: #555;
  font-family: Microsoft Yahei, SimSun, Tahoma, arial, SimHei, sans-serif;
  font-size: 14px;
}

.cookbox >>> .is-link:hover {
  color: #F7BA00;
}

.cookbox >>> .el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #F7BA00;
}

.addbook {
  text-decoration: none;
  display: block;
  width: 16px;
  height: 108px;
  padding: 12px;
  background-color: #F7BA00;
  color: #fff;
  border-radius: 4px;
  position: fixed;
  top: 120px;
  right: 100px;
  bottom: unset;
  cursor: pointer;
  z-index: 20;
}

.editorRecommend {
  margin-bottom: 16px;
  width: 80%px;
}

.themeHd {
  width: 80%;
  position: relative;
  padding: 14px 0;
  height: 26px;
  font-size: 0;
  margin: 0 auto;
  border-bottom: 1px solid #ededed;
}

.themeHd::before {
  content: "";
  float: left;
  width: 6px;
  height: 26px;
  background-color: #F7BA00;
  border-radius: 5px;
}

.themeHd h3 {
  height: 26px;
  line-height: 26px;
  font-size: 26px;
  font-weight: 400;
  color: #000;
  text-align: left;
  margin-left: 9px;
}

.jump {
  width: 8px;
  height: 4px;
  display: inline-block;
  position: absolute;
  bottom: 33px;
  right: 15px;
  color: #ffc2ad;
}

.jump i {
  font-style: normal;
  font-size: 24px;
}

.booklist-box {
  list-style: none;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;

}

/* .ul2 {
    width: 100%;
  } */

.booklist {
  width: 208px;
  height: 204px;
  margin-top: 24px;
  font-size: 14px;
  color: #333;
  border-radius: 6px;
  overflow: hidden;
  background: #f5f5f5;
}

.booklist a {
  text-decoration: none;
  color: #555;
}

.img {
  position: relative;
  height: 0;
  padding-bottom: 75%;
}

img {
  width: 208px;
  height: 156px;
}

.bookInfo {
  height: 28px;
  line-height: 28px;
  background-color: #f5f5f5;
  padding: 10px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
}

.bookInfo h4 {
  display: inline-block;
  font-weight: 400;
  width: 70%;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
  white-space: nowrap;
}

.bookInfo i {
  font-size: 12px;
  color: #F7BA00;
}

.bookInfo i::before {
  margin-right: 6px;
}

.iconfont {
  font-size: 18px;
}

.bookInfo h4:hover {
  color: #F7BA00;
}

.bookListing {
  user-select: none;
  width: 80%;
  margin: 0 auto;
}

.tabHd {
  position: relative;
  padding: 21px 0;
  height: 29px;
  font-size: 0;
  border-bottom: 1px solid #ededed;
}

.tabList {
  list-style: none;
  font-size: 26px;
  color: #000;
  width: 100%;
  height: 29px;
  display: flex;
  justify-content: flex-start;
}

.hotupdata {
  margin-right: 34px;
  cursor: pointer;
}

.active {
  border-bottom: 2px solid red;
}

.modify {
  content: "";
  position: absolute;
  left: 10px;
  bottom: 0;
  height: 4px;
  background-color: #F7BA00;
  transition: 0.2s ease-in;
}

.fade-enter-active,
.fade-leave-active {
  position: relative;
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
