<template>
 <!-- 更新首页 -->
  <div class="nav_box">
    <el-container>
      <el-header class="nav" style="height:48px">
        <span class="current_position">当前位置：</span>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">漫天下</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }">更新</el-breadcrumb-item>
          <el-breadcrumb-item class="page">第{{ this.$store.state.count }}页</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main class="content_box">
        <div class="content_row">
          <div class="content_hd">
            <h2 class="content_title">更新</h2>
          </div>
          <div>
            <ul class="content_list">
              <li
                class="content_list_li"
                v-for="(item, index) in this.$store.state.divdata"
                :to="item.chapter_url"
                :style="index % 2 == 0 ? backgroundcolorA : backgroundcolorB"
              >
                <span class="time">{{ item.time }}</span>
                <router-link class="chapter" to="/" :title="item.chapter">
                  {{
                  item.chapter
                  }}
                </router-link>
                <h3 class="title">
                  <router-link to="/" :title="`${item.title}漫画`" class="title_a">{{ item.title }}</router-link>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </el-main>
      <hr class="myhr" />
      <div class="page_box">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="this.$store.state.totall"
          :page-size="pageSize"
          @current-change="handleCurrentChange"
          class="classfy"
        ></el-pagination>
      </div>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      total: undefined,
      pageSize: 80, //    每页的数据
      backgroundcolorA: {
        backgroundColor: "#f9fcff"
      },
      backgroundcolorB: {
        backgroundColor: "#eaf6fe"
      }
    };
  },
  methods: {
    change_margin: function(index) {
      if (index % 3 == 0) {
        return this.three_margin;
      }
    },
    handleCurrentChange: function(val) {
      this.$store.dispatch("handsetCount", val); //修改页数
      this.divpagehttp(val, this.pageSize, this.$store.state.alldata);
    },

    divpagehttp: function(page, size, alldata) {
      let oldsize = size;
      let newarr = [];
      for (let i = 0; i < alldata.length / oldsize; i++) {
        if (alldata.length - i * size < oldsize) {
          size = alldata.length - i * size;
        }
        var arr = [];
        for (let j = 0; j < size; j++) {
          arr.push(alldata[i * size + j]);
        }
        newarr.push(arr);
      }
      console.log(newarr);
      this.$store.dispatch("handsetdivdata", newarr[page - 1]);
    }
  },
  mounted() {
    var that = this;
    this.$axios
      .get("http://localhost:8081/booklist/update")
      .then(function(response) {
        // console.log(response.data);
        console.log(response.data.Msg);
        that.$store.dispatch("handsetalldata", response.data.Msg);
        // that.$store.dispatch("handsetmiddata", response.data);
        that.$store.dispatch("handsettotal", response.data.Msg.length);
        that.divpagehttp(1, that.pageSize, that.$store.state.alldata);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  watch: {
    $router(to, from) {
      let that = this;
      this.$axios
        .get("http://localhost:8081/booklist/update")
        .then(function(response) {
          // console.log(response.data);
          that.$store.dispatch("handsetalldata", response.data);
          that.$store.dispatch("handsetmiddata", response.data);
          that.$store.dispatch("handsetTotall", response.data.length);
          that.divpagehttp(1, that.pageSize, that.$store.state.alldata);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
div::after {
  display: block;
  clear: both;
  content: "";
}
.nav_box .el-footer {
  background-color: #f6f8fc;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.nav_box .el-header {
  padding: 0;
}
.nav_box .nav {
  height: 48px;
  margin-left: 10%;
  margin-top: 10px;
  line-height: 48px;
  display: flex;
}
.nav_box .current_position {
  color: #999;
  font-size: 14px;
}
.nav_box .classfy .el-breadcrumb__inner {
  line-height: 48px !important;
  font-weight: normal !important;
}
.nav_box .el-breadcrumb__inner:hover {
  color: #ff8b47 !important;
  cursor: pointer !important;
}
.nav_box .page .el-breadcrumb__inner {
  color: #ff8b47;
}
.nav_box .content_box {
  margin: 0 auto;
}
.nav_box .el-main {
  padding: 0;
}
.nav_box .content_hd {
  width: 80%;
  height: 48px;
  margin: 8px auto;
}
.nav_box .content_title {
  display: block;
  float: left;
  height: 40px;
  padding-top: 8px;
  line-height: 40px;
  font-weight: 400;
  font-size: 28px;
  font-family: Microsoft Yahei, SimSun, Tahoma, arial, SimHei, sans-serif;
  cursor: pointer;
}
.nav_box .content_list {
  width: 80%;
  display: flex;
  flex-flow: wrap;
  margin: 0 auto;
}
.nav_box .content_list_li {
  height: 41px;
  line-height: 40px;
  width: 30%;
  margin-right: 2.5%;
  border-bottom: 1px solid #fff;
}
.nav_box .time {
  float: left;
  width: 56px;
  font-size: 12px;
  margin-right: 10px;
  text-align: center;
  color: #999;
  background-color: #fff0ea;
}
.nav_box .title {
  width: 60%;
  font-weight: 400;
  font-size: 14px;
}
.nav_box .title_a {
  text-decoration: none;
  color: #555;
}
.nav_box .title_a:hover {
  color: #ff8b47;
}
.nav_box .chapter {
  float: right;
  /* width: 40%; */
  text-align: right;
  padding-right: 10px;
  box-sizing: border-box;
  color: #ffc2ad;
  font-size: 14px;
}
.nav_box .three_margin {
  margin-right: 0px;
}
.nav_box .myhr {
  border: 0;
  border-bottom: 1px dotted #ddd;
  height: 1px;
  margin: 24px 0 9px;
  margin: auto;
}
.nav_box .page_box {
  height: 100px;
  margin: 19px auto;
  text-align: center;
}
.nav_box .el-pagination .btn-prev {
  width: 45px;
  height: 45px;
  font-size: 20px;
  border-radius: 50%;
}
.nav_box .el-pagination .btn-prev .el-icon {
  font-size: 18px;
}
.nav_box .el-pagination .btn-next {
  width: 45px;
  height: 45px;
  font-size: 20px;
  border-radius: 50%;
  background-color: #ff8b47;
}
.nav_box .el-breadcrumb {
  line-height: 48px;
}
.nav_box .el-pagination .btn-next .el-icon-arrow-right {
  color: white;
}
.nav_box .el-pagination.is-background .el-pager li {
  height: 45px;
  min-width: 45px;
  border-radius: 50%;
  padding-top: 9px;
  font-size: 18px;
  background-color: white;
  color: #555;
  font-family: "宋体";
}
.nav_box .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ff8b47;
}
</style>
