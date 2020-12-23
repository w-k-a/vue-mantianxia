<template>
  <!-- 书单的热门 -->
  <div class="box">
    <ul class="booklist-box ul2">
      <li class="booklist" v-for="(el,index) in booklists" v-if="(index>10)&& (index<31)">
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
</template>

<script>
export default {
  name: "Hot",
  data() {
    return {
      booklists: []
    };
  },
  mounted() {
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

<style>
div::after {
  content: " ";
  display: block;
  clear: both;
}

.box {
  margin: 0 auto;
}

.booklist-box {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
  /* margin-left: -40px; */
}

.ul2 {
  width: 100%;
}

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
  margin: 0;
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
</style>
