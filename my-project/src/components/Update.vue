<template>
  <!-- 更新页面 -->
  <div>
    <!-- 导航 -->
    <update-nav></update-nav>
  </div>
</template>
<script>
import Nav from "./Nav";

export default {
  name: "Update",
  data() {
    return {};
  },
  components: {
    "update-nav": Nav
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
li,
ul {
  list-style: none;
}
i,
em {
  font-style: normal;
}
a {
  text-decoration: none;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
</style>
