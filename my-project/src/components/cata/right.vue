<template>
    <div class="bigbox">
        <div class="head">
           <ul >
               <li  v-for="(item,index) in  mydata"     :class="item.myclass"  @click="changeclass(index)">
                   <router-link :to='item.path'>{{item.value}}</router-link>
               </li>
           </ul>
           <span>共找到<i> {{this.$store.state.totall}} </i>部漫画</span>
        </div>
        <router-view></router-view>
    </div>
</template>


<script>
import page from './page';
export default {
    name:'right',
    components:{
        'my-page':page,
    },
    data() {
        return {
            mydata:[
                {path:'/',value:'新更',myclass:'first'},
                {path:'/hot',value:'人气',myclass:'first'},
                {path:'/money',value:'打赏',myclass:'first'},
                {path:'/score',value:'评分',myclass:'first'},
                {path:'/month',value:'月票',myclass:'first'},
            ],
        }
    },
    methods: {
        changeclass(index){
            this.mydata.forEach((el)=>{
                el.myclass='first';
            });
            this.mydata[index].myclass='two';
        }
    },
}
</script>
<style lang="" scoped>

*{
    padding: 0;
    margin: 0;
}
li,ul{
    list-style: none;
}

.bigbox{
    float: right;
    width: 757px;
    display: flex;
    border: 1px solid #ddd;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
}

.head{
    height: 48px;
    line-height: 48px;
    width: 100%;
    background-color: #f5f5f5;
    display: flex;
    justify-content: space-between;
}

.head ul{
    display: flex;
}

.first{
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    flex-grow: 0;
}

.two{
    background-color: #fff;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #fff;
}

.head ul  a{
    padding: 0 16px;
    color: #999;
    font-size: 14px;
    text-decoration: none;
}
.head ul  a:hover{
    color:#F7BA00;
}

.head span{
    font-size: 12px;
    color: #999;
}

.head span i{
    color: #F7BA00;
    font-weight: 700;
}

</style>
