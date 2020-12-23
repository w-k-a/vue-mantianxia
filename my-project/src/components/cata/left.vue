<template>
  <div class="leftbox">
    <div class="index">分类索引</div>
    <div class="choose">
      <div class="choose-top">
        <span>你已选择</span>
        <span @click="clear">清空筛选</span>
      </div>
      <div class="choose-content">
        <div v-if="choosearr.length">
          <span v-for="(item,index) in choosearr " class="listitem">
            {{item}}
            <i @click="deletelist(index)">&times</i>
          </span>
        </div>
        <div v-else class="blank">您还没有作任何筛选，当前默认为全选</div>
      </div>
      <div ref="mychild">
        <my-classfy :data="themearr" :title="titlearr[0]" @getprops="addprops" @getprops2="clear"></my-classfy>
        <my-classfy
          :data="progressarr"
          :title="titlearr[1]"
          @getprops="addprops"
          @getprops2="clear"
        ></my-classfy>
        <my-classfy
          :data="audiencearr"
          :title="titlearr[2]"
          @getprops="addprops"
          @getprops2="clear"
        ></my-classfy>
        <my-classfy :data="mediaarr" :title="titlearr[3]" @getprops="addprops" @getprops2="clear"></my-classfy>
      </div>
    <my-search></my-search>
    <my-order></my-order>
    </div>
  </div>
</template>
<script>
import classfy from "./classfy";
import search from "./search";
import order from "./order";
export default {
  name: "left",
  data() {
    return {
      choosearr: [],
      choosearrdata: [],
      themearr: [
        "热血",
        "搞笑",
        "玄幻",
        "生活",
        "恋爱",
        "动作",
        "科幻",
        "战争",
        "悬疑",
        "恐怖",
        "校园",
        "历史",
        "穿越",
        "后宫",
        "体育",
        "都市",
        "萝莉",
        "漫改",
        "修真",
        "霸总",
        "古风",
        "游戏",
        "真人",
        "武侠",
      ],
      progressarr: [
        "连载",
        "完结",
        "短篇",
        "搞笑",
      ],
      audiencearr: [
        "少男",
        "少女",
        "青年",
      ],
      mediaarr: ["知音漫客","神漫","飒漫画","漫客栈","飒漫乐园","其他",],
      titlearr: ["题材", "进度", "受众", "媒体"],
    };
  },
 
watch: {
      "choosearr": function(){ //加引号监听对象里的属性
        if(this.choosearr.length==0){
          //修改 全部的样式
           for(let i=0;i<this.$refs.mychild.children.length;i++){
          for(let j=0;j<this.$refs.mychild.children[i].lastElementChild.children.length;j++){
              if(j==0){
                this.$refs.mychild.children[i].lastElementChild.children[j].classList.remove('list');
                this.$refs.mychild.children[i].lastElementChild.children[j].classList.add('list2');
              }
              else{
                this.$refs.mychild.children[i].lastElementChild.children[j].classList.remove('list2');
                this.$refs.mychild.children[i].lastElementChild.children[j].classList.add('list');
              }
          }
      }

          this.choosearrdata=this.themearr.concat(this.progressarr).concat(this.audiencearr).concat(this.mediaarr).concat(this.titlearr);
        }
        else{
          this.choosearrdata=this.choosearr;
        }
        let arr=Array.from(this.choosearrdata);
        let arr1=this.$store.state.alldata.filter((el)=>{
          let  elarr=el.describe.split('，')
          for(let i in arr){
              if(elarr.includes(arr[i])){
                return true
              }
            }
        });
        this.$store.dispatch("handsetmiddata", arr1);
        this.$store.dispatch("handsetTotall", arr1.length);
        this.divpagehttp(1,20,arr1);
      }
 },
 
//方法
  methods: {
    deletelist(index) {
   myfor:  for(let i=0;i<this.$refs.mychild.children.length;i++){
        for(let j=0;j<this.$refs.mychild.children[i].lastElementChild.children.length;j++){
          if(this.$refs.mychild.children[i].lastElementChild.children[j].innerHTML==this.choosearr[index]){
            this.$refs.mychild.children[i].lastElementChild.children[j].classList.remove('list2');
            this.$refs.mychild.children[i].lastElementChild.children[j].classList.add('list');
            break  myfor;
          }
        }
      }
       this.choosearr.splice(index, 1);
    },

    addprops(value) {
      let arr= Array.from(this.choosearr);
      let index=arr.findIndex((el)=>{
        if(el==value){
          return true
        }
      })
     if(index==-1){
       this.choosearr.push(value);
     }
     else{
       this.choosearr.splice(index, 1);
     }
    },

    clear() {
      this.choosearr = [];
      for(let i=0;i<this.$refs.mychild.children.length;i++){
          for(let j=0;j<this.$refs.mychild.children[i].lastElementChild.children.length;j++){
              if(j==0){
                this.$refs.mychild.children[i].lastElementChild.children[j].classList.remove('list');
                this.$refs.mychild.children[i].lastElementChild.children[j].classList.add('list2');
              }
              else{
                this.$refs.mychild.children[i].lastElementChild.children[j].classList.remove('list2');
                this.$refs.mychild.children[i].lastElementChild.children[j].classList.add('list');
              }
          }
      }
    },

    divpagehttp(page, size, alldata) {
      let oldsize=size;
      let newarr = [];
      for (let i = 0; i < alldata.length / oldsize; i++) {
        if((alldata.length-i*size)<oldsize){
          size=alldata.length-i*size;
        }
         var arr = [];
        for (let j = 0; j < size; j++) {
          arr.push(alldata[i * size + j]);
        }
        newarr.push(arr);
      }
      this.$store.dispatch("handsetdivdata", newarr[page - 1]);
    }
  },

  created() {
     this.$eventBus.$on("mymethod",()=>{
       this.clear();
     })
            
  },

//组件
  components: {
    "my-classfy": classfy,
    "my-search": search,
    "my-order": order,
  }
};
</script>

<style lang="" scoped>
.leftbox {
  float: left;
  width: 310px;
  border: 1px solid #ddd;
  text-align: start;
  margin: 0;
}

.index {
  width: 100%;
  height: 48px;
  background-color: #f5f5f5;
  line-height: 48px;
  font-size: 20px;
  color: black;
  padding-left: 20px;
  box-sizing: border-box;
}
.index:hover {
  cursor: pointer;
}
.choose {
  width: 100%;
}
.choose-top {
  margin: 10px 0 0 0;
}
.choose-top > span:nth-of-type(1) {
  color: #999;
  font-size: 15px;
  margin-left: 10px;
}
.choose-top > span:nth-of-type(2) {
  color: #1c9ef6;
  font-size: 12px;
  margin-left: 170px;
}
.choose-top > span:nth-of-type(2):hover {
  cursor: pointer;
}
.blank {
  font-size: 12px;
  color: #999;
  text-align: center;
  margin: 15px 0 0 0;
}
.listitem {
  background-color: #F7BA00;
  display: inline-block;
  margin: 2px 5px;
  border-radius: 4px;
  color: #fff;
  padding: 4px 10px;
  font-size: 12px;
}
.listitem:hover {
  cursor: pointer;
}
.choose-content {
  overflow: auto;
  height: 80px;
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

div::-webkit-scrollbar{
  width:10px;
  height:5px;
  /**/
}
div::-webkit-scrollbar-track{
  background: rgba(221, 221, 221,0.4);
  border-radius:2px;
}
div::-webkit-scrollbar-thumb{
  background:  rgba(221, 221, 221,0.4);
  border-radius:10px;
}
div::-webkit-scrollbar-thumb:hover{
  background: #ddd;
}
div::-webkit-scrollbar-corner{
  background: #179a16;
}
</style>