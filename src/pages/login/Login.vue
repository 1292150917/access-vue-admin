<template>
  <div class="login">
    <div class="left-wrap" :style="{backgroundImage: `url(${lfBg})`}">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconzhaopian-copy"></use>
      </svg>

      <img class="left-img" src="@img/lf_icon.svg"/>
    </div>
    <div class="right-wrap">
      <div class="header">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconzhaopian-copy"></use>
        </svg>
        <h1>Tao Admin</h1>
      </div>
      <div class="login-wrap">
        <div class="form">
          <h3>登 录</h3>
          <el-col style="margin-top: 80px">
            <span class="input-label">账号</span>
            <el-input placeholder="admin" size="medium" v-model="account"/>
          </el-col>
          <el-col style="margin-top: 15px">
            <span class="input-label">密码</span>
            <el-input placeholder="123456" size="medium" v-model="password" type="password"
              autocomplete="off"
              @keyup.enter.native="login"
            />
          </el-col>
          <el-col style="margin-top: 30px">
            <el-button class="login-btn" @click="login" :loading="loading">
              {{btnText}}
            </el-button>
          </el-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CryptoJS from "crypto-js";
  import setting from '@/config/setting'
  import { setCookie, getCookie, encrypt } from '@/utils/utils'

  export default {
    data () {
      return {
        account: setting.login.username,
        password: setting.login.password,
        backgroundImage: require('@img/login_form_bg.jpg'),
        lfBg: require('@img/lf_bg.png'),
        loading: false,
        btnText: '登录',
      }
    },
    methods: {
      login() {
        let {account, password} = this
        let {username, password:pwd} = setting.login

        if(!account) {
          this.$message.error('请输入账号')
          return
        }

        if(!password) {
          this.$message.error('请输入密码')
          return
        }

        if(account !== username || password !== pwd) {
          this.$message.error('账号或密码错误')
          return
        }

        this.loading = true
        this.btnText = '登录中...'

        setCookie('userName', account, 1)
        setCookie('userPwd', encrypt(password), 1) // 加密

        setTimeout(() => {
          this.$router.push('/')
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;

    .icon {
      width: 32px;
      height: 32px;
    }

    /deep/ .el-input__inner {
      &:focus {
        border: 1px solid #4E83FD;
      }
    }

    /deep/ .el-input--medium .el-input__inner {
      height: 40px;
      line-height: 40px;
    }

    .left-wrap {
      width: 520px;
      height: 100%;
      background: #fff;
      background-size: cover;
      padding: 20px;
      box-sizing: border-box;

      .left-img {
        display: block;
        margin: auto;
        margin-top: 300px;
      }
    }
      
    .right-wrap {
      width: calc(100% - 520px);
      height: 100%;
      position: relative;

      .header {
        display: none;
      }

      .login-wrap{
        width: 440px;
        height: 550px;
        border-radius: 5px;
        overflow: hidden;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background-size: cover;
        box-shadow: 0 0 10px rgba(28,76,186,.1);

        .form {
          widows: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 50px 30px;
          background: #fff;

          h3 {
            color: #555;
            font-size: 23px;
            text-align: center;
            font-weight: 500;
          }

          .input-label {
            color: #333;
            font-size: 14px;
            padding: 8px 0;
            display: block;
          }

          .login-btn {
            width: 100%; 
            height: 40px;
            border: 0;
            color: #fff;
            background: #4E83FD;
          }
        }
      }
    }
  }

  @media only screen and (max-width: $device-ipad-pro) { 
    .login {
      width: 100%;
      height: 100vh;

      .left-wrap {
        display: none;
      }
        
      .right-wrap {
        width: 100%;

        .header {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 20vh;

          h1 {
            font-weight: 500;
            margin-left: 15px;
          }
        }

        .login-wrap{
          width: 100%;
          height: auto;
          border-radius: 0;
          position: relative;
          box-shadow: none;

          .form {
            padding: 0px 30px;
            
            h3 {
              display: none;
            }
          }
        }
      }
    }
  }
</style>
