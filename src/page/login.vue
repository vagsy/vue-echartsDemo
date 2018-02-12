<template>
<div class="login-container">
    <div class="login-main-body">
        <div class="group-button">
            <form class="form-inline">
                <div class="row login-tab-navs">
                    <div class="control-group navs-slider">
                        <div class="col-xs-6 col-md-6 col-right" :class="{ active: isRegister }">
                            <a href="#signup" @click="upFun">注册</a>
                            <span class="navs-slider-bar" v-if="isRegister"></span>
                        </div>
                        <div class="col-xs-6 col-md-6 col-left" :class="{ active: isLogin }">
                            <a href="#signin" @click="inFun">登录</a>
                            <span class="navs-slider-bar" v-if="isLogin"></span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="register-group" v-if="registerShowflag">
            <div class="register-group-inputs">
                <form class="form-horizontal">
                    <div class="control-group">
                        <div class="controls input-wrapper">
                            <input class="controls" type="text" id="inputName" placeholder="姓名" v-model="registerData.userName">
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="controls input-wrapper input-border-top">
                            <input type="text" id="inputPhone" placeholder="手机号" v-model="registerData.userPhone">
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="controls input-wrapper input-border-top">
                            <input type="password" id="inputPassword" placeholder="密码（不少于6位）" v-model="registerData.passWord">
                        </div>
                    </div>
                </form>
            </div>
            <div class="control-group button-wrapper command">
                <button class="btn btn-info sign-button submit" type="button" name="button" @click="registerFun">注册</button>
            </div>
        </div>
        <div class="login-group" v-if="loginShowflag">
            <div class="login-group-inputs">
                <form class="form-horizontal">
                    <div class="control-group">
                        <div class="controls input-wrapper input-border-top">
                            <input type="text" id="inputPhone" placeholder="手机号" v-model="loginData.userPhone">
                        </div>
                    </div>
                    <div class="control-group">
                        <div class="controls input-wrapper input-border-top">
                            <input type="password" id="inputPassword" placeholder="密码" v-model="loginData.passWord">
                        </div>
                    </div>
                </form>
            </div>
            <div class="control-group button-wrapper command">
                <button class="btn btn-info sign-button submit" type="button" name="button" @click="loginFun">登录</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    components: {},
    methods: {
        //点击菜单中的注册，进入注册页面
        upFun: function() {
            var _this = this;
            _this.isLogin = false;
            _this.loginShowflag = false;
            _this.registerShowflag = true;
            _this.isRegister = true;
        },
        //点击菜单中的登录，进入登录页面
        inFun: function() {
            var _this = this;
            _this.isRegister = false;
            _this.registerShowflag = false;
            _this.loginShowflag = true;
            _this.isLogin = true;
        },
        //点击注册页面中的注册按钮，实现用户注册
        registerFun: function() {
            var _this = this;
            var isRegister = false;
            _this.userData.forEach(function(data) {
                if (_this.registerData.userName != data.userName && _this.registerData.userPhone != data.userPhone && _this.registerData.passWord != data.passWord) {
                    isRegister = true;
                } else {
                    isRegister = false;
                }
            });
            if (isRegister) {
                _this.userData.push(_this.registerData);
            }
            debugger;
        },
        //点击登录页面中的登录按钮，实现用户登录
        loginFun: function() {
            var _this = this;
            var isLogin = false;
            var loginParams = {
                userName: '',
                userPhone: _this.loginData.userPhone,
                passWord: _this.loginData.passWord
            };
            _this.userData.forEach(function(data) {
                if (loginParams.userPhone == data.userPhone && loginParams.passWord == data.passWord) {
                    isLogin = true;
                    loginParams.userName = data.userName;
                }
            });
            if (isLogin) {
                sessionStorage.setItem('user', JSON.stringify(loginParams));
                _this.$router.push({
                    path: '/home'
                });
            } else {
                alert('用户名或密码错误！');
            }
        }
    },
    data() {
        return {
            registerShowflag: true,
            loginShowflag: false,
            isRegister: true,
            isLogin: false,
            registerData: {
                userName: '',
                userPhone: '',
                passWord: ''
            },
            loginData: {
                userName: '小莹莹',
                userPhone: '15388646322',
                passWord: 'yy1028'
            },
            userData: [{
                userName: '小莹莹',
                userPhone: '15388646322',
                passWord: 'yy1028'
            }, {
                userName: '小颖子',
                userPhone: '15388646321',
                passWord: 'yy1028'
            }]
        }
    }
}
</script>
<style>
.login-container {
    background-image: url('../images/login.jpg');
    height: 662px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.login-main-body {
    margin: auto;
    width: 300px;
    position: relative;
    top: 200px;
}

.login-tab-navs {
    font-size: 18px;
    text-align: center;
}

.login-tab-navs .navs-slider {
    position: relative;
    display: inline-block;
}

.login-tab-navs a {
    line-height: 35px;
    color: #fff;
}

.login-tab-navs a,
.login-tab-navs a:hover {
    display: block;
}

.login-tab-navs a:hover,
.login-tab-navs a:focus {
    text-decoration: none;
}

.login-tab-navs .navs-slider .navs-slider-bar {
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0 9px;
    width: 45px;
    height: 2px;
    background: #5bc0de;
    -webkit-transition: left .15s ease-in;
    transition: left .15s ease-in;
}

.register-group-inputs {
    border: 1px solid #d5d5d5;
    border-radius: 3px;
}

.controls.input-wrapper.input-border-top {
    border-top: 1px solid #e8e8e8;
}

.col-xs-6.col-md-6.col-right {
    text-align: right;
}

.input-wrapper input:focus {
    border: 0;
    border-radius: 0;
    box-shadow: none;
    background: #fff;
    outline: none;
    /*禁止为被激活的输入框添加边框*/
}

.input-wrapper input {
    color: #777777;
    padding: 14px 11px;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    background: #fff;
    width: 100%;
}

.button-wrapper.command {
    padding-top: 18px;
}

.sign-button {
    display: block;
    padding: 0;
    width: 100%;
    font-size: 15px;
    box-shadow: none;
    border: 0;
    border-radius: 3px;
    line-height: 41px;
    text-align: center;
    text-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    border-radius: 5px;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .3), 0 1px 1px rgba(50, 50, 50, .05);
    cursor: pointer;
}
</style>
