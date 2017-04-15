<template>
  <div id="app">
    <el-menu mode="horizontal">
      <el-menu-item index="1">
        <router-link to="userinfo"> 测试一下</router-link>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">Test</template>
        <el-menu-item index="2-1">
          hello
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!',
        form:{}
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    },
      login()
      {
          this.$notify({
              title:'登录信息',
              message:JSON.stringify(this.$data.form),
              duration:3000
          })
      }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
