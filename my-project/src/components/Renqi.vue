<template>
  <!-- 排行页面 -->
  <div>
    <div class="bd clearfix">
      <div class="crumb">
        <em>当前位置</em> :
        <a href="#">漫天下网</a>
        <span v-if="lab1">></span>
        <a href="#" v-if="lab1">{{this.$store.state.text}}{{ lab1 }}</a>
        <span v-if="lab2">></span>
        <a href="#" v-if="lab2">{{ lab2 }}</a>
        <span v-if="lab3">></span>
        <a href="#" v-if="lab3">{{ lab3 }}</a>
      </div>
      <div class="rank_left">
        <div>
          <dl>
            <dt>漫画排行</dt>
            <dd>
              <a href="javascript:;" class="aaa">
                <span class="iconfont icon-fire-o"></span>
                {{rank[0]}}
              </a>
              <a href="javascript:;">
                <span class="iconfont icon-qiandai"></span>
                {{rank[1]}}
              </a>
              <a href="javascript:;">
                <span class="iconfont icon-chaopiao"></span>
                {{rank[2]}}
              </a>
              <a href="javascript:;">
                <span class="iconfont icon-shoucang"></span>
                {{rank[3]}}
              </a>
              <a href="javascript:;">
                <span class="iconfont icon-zan"></span>
                {{rank[4]}}
              </a>
              <a href="javascript:;">
                <span class="iconfont icon-star"></span>
                {{rank[5]}}
              </a>
            </dd>
            <dt>作者排行</dt>
            <dd>
              <a href="javascript:;">
                <span class="iconfont icon-zhongren"></span>
                {{rank[6]}}
              </a>
              <a href="javascript:;">
                <span class="iconfont icon-qiandai"></span>
                {{rank[7]}}
              </a>
              <a href="javascript:;">
                <span class="iconfont icon-chaopiao"></span>
                {{rank[8]}}
              </a>
            </dd>
            <dt>读者排行</dt>
            <dd>
              <a href="javascript:;">
                <span class="iconfont icon-yuanbao"></span>
                {{rank[9]}}
              </a>
              <a href="javascript:;">
                <span class="iconfont icon-huoyue"></span>
                {{rank[10]}}
              </a>
              <a href="javascript:;">
                <span class="iconfont icon-qiandai"></span>
                {{rank[11]}}
              </a>
            </dd>
          </dl>
        </div>
      </div>
      <div class="rank_right">
        <ranking></ranking>
      </div>
    </div>
  </div>
</template>

<script>
import Ranking from "./Ranking";
export default {
  name: "renqi",
  data() {
    return {
      rank: [
        "人气榜",
        "打赏榜",
        "月票榜",
        "收藏榜",
        "推荐榜",
        "评分榜",
        "人气王",
        "大富豪",
        "月票王",
        "富豪榜",
        "活跃度",
        "打赏榜"
      ]
    };
  },
  computed: {
    lab1() {
      return this.$store.state.lab1;
    },
    lab2() {
      return this.$store.state.lab2;
    },
    lab3() {
      return this.$store.state.lab3;
    },
    url() {
      return this.$store.state.url;
    }
  },
  methods: {
    //发起网络请求
    post: function(url, params) {
      this.$axios
        .post(url, params)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.error(err);
        });
      console.log(1111);
    },
    get: function(url) {
      this.$axios
        .get(url)
        .then(res => {
          console.log(res.data);
          this.$store.commit("addinfo", res.data.result);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  mounted: function() {
    var dd = document.querySelectorAll(".rank_left dd");
    var a = document.querySelectorAll("dl a");
    console.log(dd);

    this.get(this.url + "/bookrank/ran?info=readnum&tablename=comic");
    dd.forEach((el, index) => {
      el.addEventListener("click", event => {
        if (event.target.innerText == " 打赏榜" && index == 2) {
          console.log(123456);
        }
        if (index == 0) {
          this.$store.commit("change_text", "漫画");
        } else if (index == 1) {
          this.$store.commit("change_text", "作者");
        } else {
          this.$store.commit("change_text", "读者");
        }
        if (event.target.innerText.length < 10) {
          this.$store.commit("change_lab1", event.target.innerText.trim());
        }
        if (
          event.target.innerText == " 人气榜" ||
          event.target.innerText == " 人气王" ||
          event.target.innerText == " 富豪榜"
        ) {
          if (event.target.innerText == " 人气榜" && index == 0) {
            this.get(this.url + "/bookrank/ran?info=readnum&tablename=comic");
          } else if (event.target.innerText == " 人气王" && index == 1) {
            this.get(
              this.url + "/bookrank/ran?info=author_readnum&tablename=author"
            );
          } else {
            this.get(this.url + "/bookrank/ran?info=money&tablename=user");
          }
          Array.from(a).forEach(element => {
            element.classList.remove("aaa");
          });
          el.children[0].classList.add("aaa");
        } else if (
          event.target.innerText == " 打赏榜" ||
          event.target.innerText == " 大富豪" ||
          event.target.innerText == " 活跃度"
        ) {
          if (event.target.innerText == " 打赏榜" && index == 0) {
            this.get(this.url + "/bookrank/ran?info=reward&tablename=comic");
          } else if (event.target.innerText == " 大富豪") {
            this.get(
              this.url + "/bookrank/ran?info=author_money&tablename=author"
            );
          } else {
            this.get(this.url + "/bookrank/ran?info=activ&tablename=user");
          }
          Array.from(a).forEach(element => {
            element.classList.remove("aaa");
          });
          el.children[1].classList.add("aaa");
        } else if (
          event.target.innerText == " 月票榜" ||
          event.target.innerText == " 月票王" ||
          event.target.innerText == " 打赏榜"
        ) {
          console.log(index);
          if (event.target.innerText == " 月票榜") {
            this.get(this.url + "/bookrank/ran?info=yuepiao&tablename=comic");
          } else if (event.target.innerText == " 打赏榜" && index == 2) {
            this.get(this.url + "/bookrank/ran?info=dashang&tablename=user");
          } else {
            this.get(
              this.url + "/bookrank/ran?info=author_yuepiao&tablename=author"
            );
          }
          Array.from(a).forEach(element => {
            element.classList.remove("aaa");
          });
          el.children[2].classList.add("aaa");
        } else if (event.target.innerText == " 收藏榜") {
          this.get(this.url + "/bookrank/ran?info=shouchang&tablename=comic");
          Array.from(a).forEach(element => {
            element.classList.remove("aaa");
          });
          el.children[3].classList.add("aaa");
        } else if (event.target.innerText == " 推荐榜") {
          this.get(this.url + "/bookrank/ran?info=tuijian&tablename=comic");
          Array.from(a).forEach(element => {
            element.classList.remove("aaa");
          });
          el.children[4].classList.add("aaa");
        } else if (event.target.innerText == " 评分榜") {
          this.get(this.url + "/bookrank/ran?info=pingfen&tablename=comic");
          Array.from(a).forEach(element => {
            element.classList.remove("aaa");
          });
          el.children[5].classList.add("aaa");
        } else {
          return;
        }
      });
    });
  },
  components: {
    ranking: Ranking
  }
};
</script>

<style scoped>
.bd {
  width: 80%;
  margin: 0 auto;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.crumb {
  height: 48px;
  line-height: 48px;
  font-size: 14px;
  font-family: tahoma, arial, Hiragino Sans GB, SimSun, sans-serif;
  color: #999;
}
.crumb em {
  font-style: normal;
}
.crumb a {
  text-decoration: none;
  color: #000;
  font-weight: 400;
}
.crumb > a:last-of-type {
  color: #F7BA00;
}
.crumb span {
  color: #999;
}

.rank_left {
  float: left;
  width: 20%;
}
.rank_right {
  float: right;
  width: 78%;
  outline: 1px solid #999;
}
.rank_left {
  outline: 1px solid #999;
}
.rank_left img {
  display: inline;
}
.rank_left dt {
  height: 40px;
  background: #f5f5f5;
  line-height: 40px;
  padding: 0 0 0 10px;
}

.rank_left dd {
  padding: 5px 10px;
}
.rank_left dd a {
  display: block;
  padding: 5px 8px;
  background: white;
  text-decoration: none;
  color: #000;
  font-size: 12px;
  border-bottom: 1px solid #f5f5f5;
}
.rank_left dd a:hover {
  background: #ffcdbc;
  color: #F7BA00;
}
.aaa {
  color: white !important;
  background: #fdab90 !important;
}
</style>
