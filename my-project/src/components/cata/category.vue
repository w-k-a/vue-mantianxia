<template>
	<!-- 分类的组件 -->
  <div class="bigbox">
    <div class="header">
      <el-breadcrumb  separator-class="el-icon-arrow-right">
        <el-breadcrumb-item class="first">当前位置</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }" class="ho">漫天下网</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }" class="ho">漫画分类</el-breadcrumb-item>
        <el-breadcrumb-item class="page">第{{this.$store.state.count}}页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <my-right></my-right>
    <my-left></my-left>
    

  </div>
</template>


<script>
import left from './left'
import right from './right'
export default {
    name:'category',
    data(){
        return {
            pagenum:1,
        }
    },
    components:{
        'my-left':left,
        'my-right':right,
    }
};
</script>

<style lang="" scoped>

* {
  padding: 0;
  margin: 0;
}
div::after{
  display: block;
  clear: both;
  content: '';
}
.bigbox {
  overflow:hidden;
  width: 1086px;
  margin: 20px auto;
  font-family: Microsoft Yahei, SimSun, Tahoma, arial, SimHei, sans-serif;
}
.header >>> .el-breadcrumb {
  height: 48px;
  line-height: 49px;
  text-align: start;
}

.first >>>  .el-breadcrumb__inner{
    font-size: 15px;
}
.page >>>  .el-breadcrumb__inner {
    color:coral;
    font-size: 15px;
}
.page >>>  .el-breadcrumb__inner:hover {
    color:coral;
    cursor: pointer;
}
.ho >>>  .el-breadcrumb__inner:hover {
    cursor: pointer;
    color:coral;
}
.ho >>>  .el-breadcrumb__inner {
    color:#555;
    font-size: 15px;
}
</style>
