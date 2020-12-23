<template>
  <div class="bigbox">
    <h3>关键字</h3>
    <div class="search">
      <input type="text" placeholder="关键字" v-model="msg" />
      <button @click="searchdata">确定</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      pageSize: 20,
      msg: ""
    };
  },
  methods: {
    searchdata() {
      console.log(this.msg);
      let that = this;
      this.$axios
        .post("http://localhost:8081/cate/getsearch", {
          message: this.msg
        })
        .then(function(response) {
          console.log(response.data);
          if (response.data.code == -1) {
            alert(`您搜索的 ${that.msg} 没有找到,非常抱歉`);
          }
          that.$store.dispatch("handsetmiddata", response.data);
          that.$store.dispatch("handsetTotall", response.data.length);
          that.divpagehttp(1, that.pageSize, that.$store.state.middata);
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    divpagehttp(page, size, alldata) {
      /* 分页的函数 */
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
  }
};
</script>


<style lang="" scoped>
.bigbox {
  width: 100%;
  padding: 0 10px;
  margin: 10px 0;
  border: 1px solid #f5f5f5;
}
.bigbox h3 {
  color: #999;
  font-size: 14px;
}

.search {
  margin: 10px 0;
}

.search > input {
  width: 241px;
  height: 32px;
  border: 1px solid #cbc6c6;
  color: #999;
  border-radius: 3px 0 0 3px;
  outline: none;
  vertical-align: top;
  padding-left: 5px;
  box-sizing: border-box;
}
.search > input:focus {
  border: 1px solid #F7BA00;
  outline: none;
}
.search > button {
  width: 48px;
  height: 32px;
  background-color: #F7BA00;
  border: none;
  margin-left: -7px;
  color: #fff;
  font-size: 14px;
}
.search > button:hover {
  cursor: pointer;
}
</style>
