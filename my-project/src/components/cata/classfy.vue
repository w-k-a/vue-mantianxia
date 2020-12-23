<template>
  <div class="bigbox">
    <h3>{{title}}</h3>
    <div>
      <span class="list2" @click="all" ref="allDom">全部</span>
      <span :class="className" v-for="(item,index) in dataarr" @click="add(index)" ref="singleDom">{{item}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "classfy",
    props: {
      data: Array,
      title: String
    },
    data() {
      return {
        dataarr: this.data,
        // title:'',
        className: "list",
        styleobj: {
          backgoundcolor: "#F7BA00",
        }
      };
    },
    methods: {
      add(index) {
        this.$emit("getprops", this.dataarr[index]);
        if (this.$refs.singleDom[index].classList[0] == 'list') {
          this.$refs.singleDom[index].classList.remove('list');
          this.$refs.singleDom[index].classList.add('list2');
        } else {
          this.$refs.singleDom[index].classList.remove('list2');
          this.$refs.singleDom[index].classList.add('list')
        }
        let arr = Array.prototype.slice.call(this.$refs.singleDom);
        let arr1 = arr.map((el) => {
          return el.className
        })
        if (!arr1.includes('list2')) {
          this.$refs.allDom.classList.remove('list');
          this.$refs.allDom.classList.add('list2');
        } else {
          this.$refs.allDom.classList.remove('list2');
          this.$refs.allDom.classList.add('list');
        }
      },
      all() {
        this.$emit("getprops2");
      },
      colorHex(obj) {
        //十六进制颜色值的正则表达式
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        // 如果是rgb颜色表示
        if (/^(rgb|RGB)/.test(obj)) {
          var aColor = obj.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
          var strHex = "#";
          for (var i = 0; i < aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            if (hex.length < 2) {
              hex = "0" + hex;
            }
            strHex += hex;
          }
          if (strHex.length !== 7) {
            strHex = obj;
          }
          return strHex;
        } else if (reg.test(obj)) {
          var aNum = that.replace(/#/, "").split("");
          if (aNum.length === 6) {
            return obj;
          } else if (aNum.length === 3) {
            var numHex = "#";
            for (var i = 0; i < aNum.length; i += 1) {
              numHex += aNum[i] + aNum[i];
            }
            return numHex;
          }
        }
        return obj;
      }
    }
  };
</script>


<style lang="" scoped>
  .bigbox {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    border-bottom: 2px solid #ddd;
    margin: 20px 0;
    padding-bottom: 20px;
  }

  .bigbox h3 {
    font-size: 14px;
    color: #999;
  }

  .list {
    display: inline-block;
    padding: 2px 6px;
    color: #555;
    margin: 0 4px;
    padding: 4px 10px;
    font-size: 12px;
    border-radius: 4px;
  }

  .list2 {
    display: inline-block;
    padding: 2px 6px;
    background-color: #F7BA00;
    color: #fff;
    margin: 0 4px;
    padding: 4px 10px;
    font-size: 12px;
    border-radius: 4px;
  }

  .list2:hover {
    cursor: pointer;
  }

  .list:hover,
  .list:visited,
  .list:active {
    background-color: #F7BA00;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
  }
</style>
