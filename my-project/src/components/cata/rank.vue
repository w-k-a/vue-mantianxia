<template>
  <div class="bigbox">
    <ul>
      <li v-for="(item,index) in this.rankdata">
        <!-- 详细的内容 -->
        <div class="detail" v-if="flagarr[index]">
          <img :src="item.imgurl" alt />
          <div class="icon">NO{{item.ranknum}}</div>
          <h3>
            <router-link to="/">{{item.name}}</router-link>
          </h3>
          <p>{{item.decoration}}</p>
          <p>{{item.hot}}</p>
        </div>
        <!-- 简写的内容 -->
        <div class="portion" v-else @mouseenter="movein(item.ranknum-1)">
            <div>{{item.ranknum}}</div>
            <span>{{item.name}}</span>
            <span>{{item.hot}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "rank",
  data() {
    return {
      msg: this.rankdata,
      flagarr: []
    };
  },
  methods: {
    movein(index) {
      //把显示标志位全部改为false，再把移动进去的下标减一传进去
      this.flagarr = this.flagarr.map(el => {
        return false;
      });
      this.flagarr[index] = true;
    }
  },
  props: {
    rankdata: Array
  },
  created() {
    this.flagarr = this.msg.map((el, index) => {
      if (index == 0) {
        return true;
      } else {
        return false;
      }
    });
  }
};
</script>


<style lang="" scoped>
*{
    padding:0;
    margin: 0;
}

ul,
li {
  list-style: none;
}
a{
    text-decoration: none;
}
.bigbox {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}

.bigbox li{
    border-bottom: 1px solid #ddd;
}

.bigbox li > .portion {
  height: 30px;
  background-color:#fff;
  line-height: 30px;
  padding: 5px 0;
}

.bigbox li > .portion>div{
    width: 20px;
    height: 20px;
    display: inline-block;
    line-height: 20px;
    text-align: center;
    background-color: #ddd;
    color:#fff;
    border-radius: 50%;
    font-size: 12px;
}

.bigbox li:nth-of-type(1)>.portion>div{
    background-color: #F7BA00;
}
.bigbox li:nth-of-type(2)>.portion>div{
    background-color: #ff9450;
}
.bigbox li:nth-of-type(3)>.portion>div{
    background-color: #ffbc4e;
}






.bigbox li > .portion>span:nth-of-type(1){
    font-size: 14px;
    color:#555;
}
.bigbox li > .portion>span:nth-of-type(2){
    font-size: 12px;
    color: #ffc2ad;
    float:right;
}


/* 详情 */
.bigbox li > .detail {
  height: 100px;
  background-color: #fff;
  position: relative;
  padding-bottom: 7px;
}
.bigbox li > .detail > img {
  position: absolute;
  width: 75px;
  height: 100px;
  left: 0;
  top: 0;
}
.bigbox li > .detail > h3 {
  width: 100%;
  text-align: center;
}
.bigbox li > .detail > h3>a{
    color: #555;
    font-size: 18px;
    font-weight: 400;
}
.bigbox li > .detail > h3>a:hover{
    color:#F7BA00;
}
.bigbox li > .detail > p {
  width: 100%;
  text-align: center;
}
.bigbox li > .detail > p:nth-of-type(1){
    color:#999;
    font-size: 12px;
    margin-top: 10px;

}
.bigbox li > .detail > p:nth-of-type(2){
    color:#F7BA00;
    font-size: 12px;
    margin-top: 18px;
    font-weight: 700;
}
.icon{
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #F7BA00;
    position: absolute;
    color: #fff;
    font-size: 18px;
    font-style: italic;
    right:0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    line-height: 64px;

}


</style>