<template>
    <div class="row lyear-wrapper" style="background-image: url(static/images/login.jpg); background-size: cover;">
        <div class="lyear-login">
            <div class="login-center">
                <div class="login-header text-center">
                    <img alt="light year admin" src="static/images/scenario_logo.png">
                </div>
                <form action="#!" method="post">
                    <div class="alert alert-danger" role="alert" v-if="message">{{message}}</div>
                    <div class="form-group has-feedback feedback-left">
                        <!--                        v-model将数据与页面的值进行双向绑定-->
                        <input type="text" @change="resetMessage" placeholder="请输入您的用户名" class="form-control" v-model="userName" />
                        <span class="mdi mdi-account form-control-feedback" aria-hidden="true"></span>
                    </div>
                    <div class="form-group has-feedback feedback-left">
                        <input type="password" @change="resetMessage" placeholder="请输入密码" class="form-control" v-model="password" />
                        <span class="mdi mdi-lock form-control-feedback" aria-hidden="true"></span>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-block btn-brown" type="button" @click="login">立即登录</button>
                    </div>
                </form>
<!--                <footer class="col-sm-12 text-center text-white">-->
<!--                    <p class="m-b-0">Copyright © 2020 <a href="http://lyear.itshubao.com">IT书包</a>. All right reserved</p>-->
<!--                </footer>-->
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import qs from "qs";

    export default {
        name: "Login",
        data() {
            return{
                userName:"",
                password:"",
                message:""
            }
        },
        methods:{
            resetMessage:function(){
                this.message=""
            },

            login:function () {
                let that = this
                console.log("登录系统")
                console.log(this.userName)
                console.log(this.password)
                axios.post(that.GLOBAL.API_ROOT + "/login", qs.stringify({
                    "manageName": that.userName,
                    "managePassword": that.password,
                })).then(
                    function (response) {
                        console.log(response.data)
                        if(response.data.status == 'ok'){
                            //获取token并保存到本地
                            let token = response.data.token
                            console.log(token)
                            //使用 localStorage 创建一个本地存储的 name/value 对
                            localStorage.setItem("token",token)
                            that.$router.push("/homepage")
                        }else{
                            that.message = '用户名或密码错误'
                        }
                    },
                    function (err) {
                        console.log(err);
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .lyear-wrapper {
        position: relative;
    }
    .lyear-login {
        display: flex !important;
        min-height: 100vh;
        align-items: center !important;
        justify-content: center !important;
    }
    .lyear-login:after{
        content: '';
        min-height: inherit;
        font-size: 0;
    }
    .login-center {
        background-color: rgba(255,255,255,.075);
        min-width: 29.25rem;
        padding: 2.14286em 3.57143em;
        border-radius: 3px;
        margin: 2.85714em;
    }
    .login-header {
        margin-bottom: 1.5rem !important;
    }
    .login-center .has-feedback.feedback-left .form-control {
        padding-left: 38px;
        padding-right: 12px;
        background-color: rgba(53, 4, 4, 0.07);
        border-color: rgba(255,255,255,.075)
    }
    .login-center .has-feedback.feedback-left .form-control-feedback {
        left: 0;
        right: auto;
        width: 38px;
        height: 38px;
        line-height: 38px;
        z-index: 4;
        color: #ffffff;
    }
    .login-center .has-feedback.feedback-left.row .form-control-feedback {
        left: 15px;
    }
    .login-center .form-control::-webkit-input-placeholder{
        color: rgba(255, 255, 255, .8);
    }
    .login-center .form-control:-moz-placeholder{
        color: rgba(255, 255, 255, .8);
    }
    .login-center .form-control::-moz-placeholder{
        color: rgba(255, 255, 255, .8);
    }
    .login-center .form-control:-ms-input-placeholder{
        color: rgba(255, 255, 255, .8);
    }
    .login-center .custom-control-label::before {
        background: rgba(0, 0, 0, 0.3);
        border-color: rgba(0, 0, 0, 0.1);
    }
    .login-center .lyear-checkbox span::before {
        border-color: rgba(255,255,255,.075)
    }
</style>
