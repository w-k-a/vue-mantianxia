<template>
  <div>
    <div class="box">
      <div class="reg-box">
        <div class="reg-header">
          <router-link class="imglogo" to="/login"></router-link>
          <p class="reg-text">
            如已注册， 点此
            <router-link class="text" to="/login">{{longin}}</router-link>

          </p>
        </div>
        <div class="reg-input">
          <ul>
            <li>新用户注册</li>
          </ul>
          <div class="input-box">
            <div class="inauto">
              <el-input class="inputbox" v-model="username" placeholder="用户名"></el-input>
              <div class="kongb"></div>
              <el-input class="inputbox" placeholder="密码" v-model="passwd" show-password></el-input>
              <div class="kongb"></div>

              <el-input class="inputbox" placeholder="确认密码" v-model="again" show-password></el-input>
              <div class="kongb"></div>
              <el-checkbox class="check" v-model="checked">我已看过并接受《
                <a href="">用户协议</a> 》
              </el-checkbox>
              <div class="kongb"></div>

              <button class="submit" @click="regist">同意协议并注册</button>
              <div class="kongb"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        username: "",
        message: "",
        passwd: "",
        again: "",
        checked: true,
        longin: "登录",
      }
    },
    methods: {
      regist: function() {
        if(this.username==""){
          alert("用户名不能为空")
        }
        else if(this.passwd==""){
          alert("密码不能为空")
        }
        else if(this.again!=this.passwd){
          alert("输入的密码不一致")
        }
        else {
          this.$http.get(`http://localhost:8081/user/register?username=${this.username}&passwd=${this.passwd}`)

                    .then(response => {
                      console.log(response.data);
                      if(response.data.code==2){
                        this.$router.push('/login')
                      }
                    })
                    .catch(function(err) {
                      console.log(err)
                    })
        }


      }
    }

  }
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
  }

  html body {
    min-height: 600px;
    background: #ccc;
    padding-bottom: 50px;
  }

  .box {
    width: 100%;
    height: 747px;
    background: #ccc;
  }

  .reg-box {
    width: 100%;
    height: 100px;
    background: #F79056;
    box-shadow: 1px 1px 5px rgba(98, 105, 109, 0.5);
  }

  .reg-header {
    width: 980px;
    height: 60px;
    margin: 0 auto;
    padding: 20px 0px;
    color: #333333;
    display: flex;
    justify-content: space-between;
  }

  .imglogo {
    width: 400px;
    height: 60px;
    background:url(../assets/logo.png) no-repeat;
    background-position: 7px -5px;
    background-size: 198px;
  }

  .reg-text {
    width: 157px;
    height: 22px;
    line-height: 20px;
    text-align: right;
    margin-top: 36px;
    font-size: 14px;
    color: #fff;
  }

  .text {
    display: inline;
    width: 43px;
    height: 22px;
    background: #F15F32;
    border-radius: 2px;
    color: #fff;
    text-decoration: none;
    margin-left: 6px;
    line-height: 22px;
    text-align: center;
    float: right;
    font-size: 14px;


  }

  .reg-input {
    width: 980px;
    height: 470px;
    background: #FFFFFF;
    margin: 0 auto;
    border-radius: 2px;
    box-shadow: 1px 1px 5px rgba(98, 105, 109, 0.5);
    margin-top: 50px;

  }

  .reg-input ul,
  li {
    list-style: none;
    width: 980px;
    height: 56px;
    font-size: 18px;
    border-bottom: 1px solid #F79056;
    color: #F79056;
    line-height: 57px;
  }

  .input-box {
    width: 980px;
    height: 450px;



  }

  .inauto {
    width: 400px;
    padding: 16px 0px;
    margin: 20px auto;
    /* background: #ddd; */
  }

  .inputbox {
    width: 400px;
    height: 40px;
    border-radius: 0;
  }

  .inputbox1 {
    width: 321px;
    height: 40px;
    border-radius: 0;
    outline: none;
  }

  .kongb {
    height: 24px;
    width: 400px;
    margin: 0 auto;
  }

  .button {
    width: 74px;
    height: 40px;
    outline: none;
    border: 1px solid #999;
    border-radius: 10px;
  }

  .check {
    width: 201px;
    height: 18px;
    font-size: 14px;
    margin-left: 15px;
    color: #333333;


  }

  .check a {
    text-decoration: none;
    color: blue;
  }

  .submit {
    width: 400px;
    height: 48px;
    background: #F79056;
    border: none;
    color: #FFFFFF;
    outline: none;
    font-size: 18px;

  }

  .footer {
    width: 400px;
    height: 80px;
    /* background: #B4B4B4; */
  }

  .other {
    height: 52px;
    line-height: 52px;
    font-size: 14px;
    color: #333333;
    text-align: left;

  }



</style>

 <!-- <template>
   <div>
   <ul class="history">
     <li v-for="(item, index) in historyList" :key="index" class="dialogborder">
       <div class="part">
         <div v-if="(item.dates == '' || item.dates == null )? false : true" class="msg-item">
           <i>操作日期：</i><span v-text="item.dates" />
         </div>
         <div v-if="(item.name == '' || item.name == null )? false : true" class="msg-item">
           <i class="name">操作人：</i><span v-text="item.name" />
         </div>
         <div v-if="(item.abbr_cnames == '' || item.abbr_cnames == null )? false : true" class="msg-item">
           <i>机构简称：</i><span v-text="item.abbr_cnames" />
         </div>
         <div v-if="(item.update_project == '' || item.update_project == null )? false : true"class="msg-item">
           <i>修改项目：</i><span v-text="item.update_project" />
         </div>
         <div v-if="(item.del_project == '' || item.del_project == null )? false : true" class="msg-item">
           <i>删除项目：</i><span v-text="item.del_project" />
         </div>
       </div>
     </li>
   </ul>
   </div>
 </template>

 <script>
   export default {
     data() {
       return {
         searchpro:true,
         historyList: [{
             dates: '2020-09-13',
             name: '张静',
             abbr_cnames: 'IDG资本',
             update_project: '机构名称、官方网站',
             del_project: '',
           },
           {
             dates: '2020-09-13',
             name: null,
             abbr_cnames: 'IDG资本',
             update_project: '机构名称、官方网站',
           },
           {
             dates: '2020-09-13',
             name: '张静',
             abbr_cnames: 'IDG资本',
           }
         ]
       }
     }
   }
 </script>

 <style>
 </style>
 -->