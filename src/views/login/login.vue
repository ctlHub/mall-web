<template>
  <div class="wrap" ref="wrap">
    <div class="form">
      <div>
        <svg-icon icon-class="mall-admin" style="font-size:60px; color:#409eff" />
        <p class="title">Mall-Admin-Web</p>
      </div>
      <el-form :model="form" :rules="rules" ref="loginForm">
        <el-form-item prop="account">
          <el-input v-model="form.account" prefix-icon="el-icon-user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>

      <div class="form-btn">
        <el-button class="login" type="primary" @click="login">登录</el-button>
        <el-button class="login" type="primary" @click="login">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        account: 'admin',
        password: '',
      },
      rules: {
        account: [{ required: true, message: '请输入正确的用户名', trigger: 'change' }],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
          { min: 6, message: '密码不能小于6位', trigger: 'change' },
        ],
      },
    }
  },
  async mounted() {
    let background = await this.getBackground()
    let wrap = this.$refs.wrap
    wrap.style.backgroundImage = `url(${background})`
  },
  methods: {
    getBackground() {
      return new Promise((resolve) => {
        this.axios.get('https://api.no0a.cn/api/bing/0').then((res) => {
          resolve(res.data.bing.url)
        })
        this.axios.get('http://f9bi8a.natappfree.cc/login').then((res) => {
          console.log(res)
        })
      })
    },

    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>

<style lang="scss">
.wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.form {
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 20px;
  // border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.8);
  width: 300px;
}
.form-inp {
  margin-bottom: 20px;
}
.form-btn {
  display: flex;
}
.login {
  width: 100%;
}
.title {
  color: #409eff;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
