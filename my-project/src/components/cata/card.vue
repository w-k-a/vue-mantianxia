<template>
  <div class="bigbox">
    <router-link to="/">
      <div>
        <img :src="mydata.cover" alt />
      </div>
      <span>{{mydata.score}}</span>
      <span>{{mydata.round}}</span>
      <h3>{{mydata.title}}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    mydata: Object
  },
  mounted() {}
};
</script>


<style lang="" scoped>
.bigbox {
  width: 122.69px;
  position: relative;
  margin: 0 0 15px 0;
}
.bigbox > a {
  display: block;
  width: 100%;
  text-decoration: none;
}
.bigbox > a img {
  height: 163.58px;
  width: 100%;
  transition: all 0.2s linear;
}
.bigbox > a div:nth-of-type(1) {
  overflow: hidden;
}
.bigbox > a img:hover {
  transform: scale(1.3);
}

.bigbox > a span:nth-of-type(1) {
  color: #fff;
  font-size: 11px;
  position: absolute;
  right: 5px;
  top: 3px;
  display: block;
  border-radius: 20%;
  background-color: #F7BA00;
  padding: 1px 2px;
  font-weight: 100;
}
.bigbox > a span:nth-of-type(2) {
  color: #fff;
  font-size: 12px;
  position: absolute;
  right: 5px;
  top: 133px;
  display: block;
  padding: 2px 3px;
  background-color: rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  width: 100px;
}

.bigbox > a h3 {
  color: #555;
  font-size: 14px;
  margin: 2px 0 0 0;
  font-weight: 500;
}
</style>
