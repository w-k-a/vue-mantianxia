<template>
  <div>
    <div class="box">
      <div class="reg-box">
        <div class="reg-header">
          <router-link class="imglogo" to="/regisster"></router-link>
          <p class="reg-text">
            如未注册， 点此
            <router-link class="text" to="/register">{{register}}</router-link>

          </p>
        </div>
        <div class="reg-input">
          <ul>
            <li>用户登录</li>
          </ul>
          <div class="input-box">
            <div class="inauto">
              <el-input class="inputbox" v-model="username" placeholder="用户名"></el-input>
              <div class="kongb"></div>
              <el-input class="inputbox" placeholder="密码" v-model="password" show-password></el-input>

              <div class="kongb"></div>

              <el-button type="primary" class="submit" @click="login">立即登陆</el-button>
              <div class="kongb"></div>
              <div>还没有账号？ 立即注册</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: "",
        password: "",
        again: "",
        checked: true,
        register: "注册",

      }
    },
    methods: {
      login: function() {
        if(this.username==""){
          alert("用户名不能为空")
        }
        else if(this.passwd==""){
          alert("密码不能为空")}

        else {
          this.$http.get(`http://localhost:8081/user/login?username=${this.username}&passwd=${this.password}`)

                    .then(result => {
                      console.log(result.data)
                      if(result.data.code==1){
                        this.$router.push('/index')
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
    width: 680px;
    height: 380px;
    background: #FFFFFF;
    margin: 0 auto;
    border-radius: 2px;
    box-shadow: 1px 1px 5px rgba(98, 105, 109, 0.5);
    margin-top: 50px;

  }

  .reg-input ul,
  li {
    list-style: none;
    /* width: 980px; */
    height: 56px;
    font-size: 18px;
    border-bottom: 1px solid #F79056;
    color: #F79056;
    line-height: 57px;
  }

  .input-box {
    /* width: 980px; */
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
