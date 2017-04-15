<template>
    <el-form :model="form">
        <el-form-item title="用户名:">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item title="密码:">
            <el-input type="password" v-model="form.password">

            </el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">
                登录
            </el-button>
            <el-button @click="clear">
                清空
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data(){
        return {
            form:{}
        }
    },
    methods:{
        login()
        {
            this.$notify({
                title:"登录信息",
                message:JSON.stringify(this.$data.form),
                duration:5000
            })
        },
        clear()
        {
            this.$data.form={};
        }
    }
}
</script>

<style>
</style>