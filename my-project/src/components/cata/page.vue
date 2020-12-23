<template>
  <div class="bigbox">
    <div class="block" v-if="this.$store.state.middata.length">
      <el-pagination
        :page-size="pageSize"
        background
        layout="prev, pager, next "
        :total="this.$store.state.totall"
        @current-change="handleCurrentChange"
        class="classfy"
        ref="eldom1"
      ></el-pagination>
      <div class="content">
        <my-card v-for="item in  this.$store.state.divdata" :mydata="item"></my-card>
      </div>
      <el-pagination
        :page-size="pageSize"
        background
        layout="prev, pager, next "
        :total="this.$store.state.totall"
        @current-change="handleCurrentChange"
        class="classfy"
        ref="eldom2"
      ></el-pagination>
    </div>
    <div v-else class="nothing">
      <p>
        没有找到任何记录，请点击[
        <i @click="reclear">清除全部条件</i>]]或重新选择条件!
      </p>
    </div>
  </div>
</template>
<script>
import card from "./card";
export default {
  data() {
    return {
      total: undefined,
      pageSize: 20
    };
  },
  components: {
    "my-card": card
  },
  methods: {
    reclear() {
      this.$eventBus.$emit("mymethod", {
        num: this.num,
        deg: this.deg
      });
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.handmiidle(val);
      this.$store.dispatch("handsetCount", val);
      if (val == 1) {
        this.$refs.eldom1.$children[0].$el.classList.add("dis");
        this.$refs.eldom2.$children[0].$el.classList.add("dis");
        this.$refs.eldom1.$children[2].$el.classList.remove("dis");
        this.$refs.eldom2.$children[2].$el.classList.remove("dis");
      } else if (val == 5) {
        this.$refs.eldom1.$children[2].$el.classList.add("dis");
        this.$refs.eldom2.$children[2].$el.classList.add("dis");
        this.$refs.eldom1.$children[0].$el.classList.remove("dis");
        this.$refs.eldom2.$children[0].$el.classList.remove("dis");
      } else {
        this.$refs.eldom1.$children[2].$el.classList.remove("dis");
        this.$refs.eldom2.$children[2].$el.classList.remove("dis");
        this.$refs.eldom1.$children[0].$el.classList.remove("dis");
        this.$refs.eldom2.$children[0].$el.classList.remove("dis");
      }
      this.divpagehttp(val, this.pageSize, this.$store.state.middata);
    },
    handmiidle(val) {
      for (
        let i = 0;
        i < this.$refs.eldom1.$children[1].$el.children.length;
        i++
      ) {
        this.$refs.eldom1.$children[1].$el.children[i].classList.remove(
          "active"
        );
        this.$refs.eldom2.$children[1].$el.children[i].classList.remove(
          "active"
        );
      }
      this.$refs.eldom1.$children[1].$el.children[val - 1].classList.add(
        "active"
      );
      this.$refs.eldom2.$children[1].$el.children[val - 1].classList.add(
        "active"
      );
    },

    divpagehttp(page, size, alldata) {
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
      this.$store.dispatch("handsetdivdata", newarr[page - 1]);
    }
    //分页
  },

  mounted() {
    console.log(22);
    let that = this;
    this.$axios
      .post("http://localhost:8081/cate/getalldata", {
        firstName: "Fred",
        lastName: "Flintstone"
      })
      .then(function(response) {
        that.$store.dispatch("handsetalldata", response.data);
        that.$store.dispatch("handsetmiddata", response.data);
        that.$store.dispatch("handsetTotall", response.data.length);
        that.divpagehttp(1, that.pageSize, that.$store.state.alldata);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      let that = this;
      this.$axios
        .post("http://localhost:8081/cate/getalldata", {
          firstName: "Fred",
          lastName: "Flintstone"
        })
        .then(function(response) {
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


<style lang="" scoped>
.bigbox {
  width: 100%;
  border: none;
}

.block {
  width: 100%;
}

.classfy {
  margin: 30px auto;
  text-align: center;
}

.classfy >>> .el-pager li {
  background-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  color: #555;
  font-weight: 400;
  margin: 0 10px;
}

.classfy >>> .btn-prev {
  background-color: #F7BA00;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
.classfy >>> .btn-next {
  background-color: #F7BA00;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}

.classfy >>> .el-icon-arrow-left,
.classfy >>> .el-icon-arrow-right {
  font-size: 30px !important;
  font-weight: 500;
}
.classfy >>> .el-icon-arrow-left,
.classfy >>> .el-icon-arrow-right {
  font-size: 30px !important;
  font-weight: 500;
}

.classfy >>> button:disabled {
  background-color: #ddd;
}

.classfy >>> button:disabled i {
  color: #fff;
}

.classfy >>> .el-pager li:not(.disabled).active {
  background-color: #fd7a3a;
  color: #fff;
  cursor: not-allowed;
}

.classfy >>> .dis {
  cursor: not-allowed;
  background-color: #ddd;
  color: #fff;
}

.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.nothing {
  width: 100%;
}

.nothing p {
  width: 100%;
  text-align: center;
  color: #999;
  font-size: 12px;
  margin: 30px 0;
}

.nothing p i {
  color: #5ccf5a;
  text-decoration: none;
  font-style: normal;
}

.nothing p i:hover {
  cursor: pointer;
  color: #fd7a3a;
}
</style>

