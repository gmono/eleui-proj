<template>
    <h1>用户中心</h1>
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