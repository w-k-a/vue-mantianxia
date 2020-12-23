<template>
  <!-- 排行的左部分 -->
  <div>
    <div class="rank_right_top">
      <i class="iconfont icon-paihang"></i>
      {{this.$store.state.text}}{{lab}}
    </div>
    <div class="rank_right_info clearfix">
      <div class="col" v-for="(el,index1) in info" :key="index1">
        <ul class="clearfix" v-if="index1 == 0?true:index1 == 1?true:index1 ==2">
          <li v-for="(item_el,index) in el" :key="index">
            <span class="no_box">
              <span class="no">{{index1*20+1+index}}</span>
            </span>
            <span class="name">{{item_el.bookname}}</span>
            <span class="num">
              <i
                v-show="text=='漫画'"
              >{{lab=='人气榜'?item_el.readnum:lab=='打赏榜'?item_el.reward:lab=='月票榜'?item_el.yuepiao:lab=='收藏榜'?item_el.shouchang:lab=='推荐榜'?item_el.tuijian:item_el.pingfen}}</i>
              <i
                v-show="text=='作者'"
              >{{lab=='人气王'?item_el.author_renqi:lab=='大富豪'?item_el.author_money:item_el.author_yuepiao}}</i>
              <i
                v-show="text=='读者'"
              >{{lab=='富豪榜'?item_el.money:lab=='活跃度'?item_el.activ:item_el.dashang}}</i>
              <span v-show="lab == '打赏榜'" class="cla iconfont icon-qiandai"></span>
              <span v-show="lab == '人气榜'" class="cla iconfont icon-fire-o"></span>
              <span v-show="lab == '月票榜'" class="cla iconfont icon-chaopiao"></span>
              <span v-show="lab == '收藏榜'" class="cla iconfont icon-shoucang"></span>
              <span v-show="lab == '推荐榜'" class="cla iconfont icon-zan"></span>
              <span v-show="lab == '评分榜'" class="cla iconfont icon-star"></span>
              <span v-show="lab == '人气王'" class="cla iconfont icon-zhongren"></span>
              <span v-show="lab == '大富豪'" class="cla iconfont icon-qiandai"></span>
              <span v-show="lab == '月票王'" class="cla iconfont icon-chaopiao"></span>
              <span v-show="lab == '富豪榜'" class="cla iconfont icon-yuanbao"></span>
              <span v-show="lab == '活跃度'" class="cla iconfont icon-huoyue"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ranking",
  computed: {
    lab: function() {
      return this.$store.state.lab1;
    },
    info: function() {
      var info_arr = [];
      info_arr.push(this.$store.state.info.slice(0, 20));
      info_arr.push(this.$store.state.info.slice(20, 40));
      info_arr.push(this.$store.state.info.slice(40, 60));
      console.log(info_arr);
      return info_arr;
    },
    text: function() {
      return this.$store.state.text;
    }
  }
};
</script>

<style scoped>
.rank_right_top {
  padding: 10px 5px;
  font-size: 18px;
}
.rank_right_top i {
  color: #F7BA00;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.col {
  float: left;
  width: 33.33333333333%;
  box-sizing: border-box;
  border-left: 1px solid #f5f5f5;
  font-size: 12px;
}
.col ul {
  padding: 5px 20px;
}
.col li {
  padding: 5px 0;
  list-style: none;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f5f5;
}
.no_box {
  display: inline-block;
  width: 30px;
}
.no {
  display: inline-block;
  height: 18px;
  padding: 0 5px;
  border-radius: 10px;
  background: rgb(243, 243, 243);
  border: 1px solid #999;
  line-height: 18px;
  color: rgb(129, 129, 129);
}
.cla,
.num {
  float: right;
}
.num {
  color: #F7BA00;
  font-weight: bold;
}
.cla {
  margin-right: 10px;
  margin-left: 10px;
  font-weight: 100;
  color: #d6d6d6;
}
.name:hover {
  color: #F7BA00;
  cursor: pointer;
}
</style>
