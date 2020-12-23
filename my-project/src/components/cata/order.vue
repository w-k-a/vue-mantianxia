<template>
  <div class="bigbox">
    <div class="head" ref="rankDom">
      <div>全部漫画</div>
      <div class="time firsttime" @mouseenter="movein(1)">日</div>
      <div class="time" @mouseenter="movein(2)">月</div>
      <div class="time" @mouseenter="movein(3)">年</div>
    </div>
    <div class="content">
      <my-rank :rankdata="rankdatarr1" v-if="flag===1"></my-rank>
      <my-rank :rankdata="rankdatarr2" v-else-if="flag===2"></my-rank>
      <my-rank :rankdata="rankdatarr3" v-else></my-rank>
    </div>
  </div>
</template>
<script>
import rank from "./rank";
export default {
  name: "Head",
  data() {
    return {
      flag: 1,
      rankdatarr1: [],
      rankdatarr2: [],
      rankdatarr3: []
    };
  },
  methods: {
    movein(value) {
      this.flag = value;
      for (let i = 1; i < this.$refs.rankDom.children.length; i++) {
        this.$refs.rankDom.children[i].style.color = "#999";
        this.$refs.rankDom.children[i].style.backgroundColor = "#f5f5f5";
        this.$refs.rankDom.children[i].style.borderBottom = "1px solid #ddd";
      }
      this.$refs.rankDom.children[value].style.color = "#F7BA00";
      this.$refs.rankDom.children[value].style.backgroundColor = "#fff";
      this.$refs.rankDom.children[value].style.borderBottom = "1px solid #fff";
    }
  },
  components: {
    "my-rank": rank
  },
  mounted() {
    let that = this;
    this.$axios
      .post("http://localhost:8081/cate/getrank", {
        time: 1
      })
      .then(function(response) {
        Array.from(response.data).forEach(el => {
          if (el.time == "日") {
            that.rankdatarr1.push(el);
          } else if (el.time == "月") {
            that.rankdatarr2.push(el);
          } else {
            that.rankdatarr3.push(el);
          }
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>


<style lang="" scoped>
.bigbox {
  margin-top: 20px;
}

.head {
  width: 100%;
  height: 48px;
  background-color: rgba(245, 245, 245, 1);
  display: flex;
  border-top: 1px solid #ddd;
  line-height: 48px;
  text-align: center;
}

.head > div:nth-of-type(1) {
  flex-grow: 1;
  height: 100%;
  text-align: start;
  padding-left: 20px;
  box-sizing: border-box;
  font-size: 18px;
  color: #555;
  border-bottom: 1px solid #ddd;
}
.head > div.time {
  width: 47px;
  height: 100%;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  color: #999;
  font-size: 14px;
}

.head > div.time.firsttime {
  border-bottom: 1px solid #fff;
  background-color: #fff;
  color: #F7BA00;
}
.head > div.time:hover {
  cursor: pointer;
  border-bottom: 1px solid #fff;
}
</style>
