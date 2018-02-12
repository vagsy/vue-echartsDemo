<template>
<div class="home-content">
    <div class="home-container">
        <div class="app-header-menu">
            <div class="menu-left">
                <ul class="nav nav-tabs navigation">
                    <li>
                        <router-link to="/home" class='is-active'>首页</router-link>
                    </li>
                    <li>
                        <router-link to="/dataStatistics" class="header-nav-item">数据统计</router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="header-nav-item">联系我们</router-link>
                    </li>
                </ul>
            </div>
            <div class="menu-right log-out">
                <div class="user-message">
                    <label class="app-header-user-name">{{userName}}</label>
                    <button type="button" name="button" class="app-header-profile-entry" @click="userCenterFun">
                     <img src="../images/user.jpg" alt="用户头像" class="user-log">
                </button>
                </div>
            </div>
            <div class="user-center" v-show="userCenterShowflag">
                <div class="menu">
                    <ul class="nav">
                        <li><a href="javascript:void(0);">我的主页</a></li>
                        <li><a href="javascript:void(0);">设置</a></li>
                        <li @click="logOutFun"><a href="javascript:void(0);">退出</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="top-story" @mousedown="hideFun">
            <div class="top-story-container">
                <div :style="{width:'800px',height:'300px'}" ref="echartsContainer">
                </div>
            </div>
        </div>
        <div class="ceshi" v-if="logOutShowflag">
            <prompt :headermessage="headerMessage" :showcon="showCon" :iconclsaa="iconClsaa" :bodymessage="bodyMessage" :showbtnnumber="showBtnNumber" :btndefault="btnDefault" :btninfo="btnInfo" :iconfun="iconFun" :defaultfun="defaultFun" :infofun="infoFun"></prompt>
        </div>
    </div>

</div>
</template>
<script>
import prompt from '../components/prompt.vue'
import echarts from 'echarts'
export default {
    components: {
        prompt
    },
    mounted: function() {
        var userData = sessionStorage.getItem("user");
        this.userName = JSON.parse(userData).userName;
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(this.$refs.echartsContainer);
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(this.option);
    },
    methods: {
        userCenterFun: function() {
            this.userCenterShowflag = true;
        },
        hideFun: function() {
            this.userCenterShowflag = false;
        },
        logOutFun: function() {
            var _this = this;
            _this.logOutShowflag = true;
            _this.hideFun();
        },
        iconFun: function() {
            var _this = this;
            _this.logOutShowflag = false;
        },
        defaultFun: function() {
            var _this = this;
            _this.logOutShowflag = false;
        },
        infoFun: function() {
            var _this = this;
            sessionStorage.removeItem('user');
            _this.$router.push('/login');
        }
    },
    data() {
        return {
            userName: '',
            userCenterShowflag: false,
            logOutShowflag: false,
            headerMessage: '提示',
            showCon: true,
            iconClsaa: 'glyphicon glyphicon-remove',
            bodyMessage: '确认退出吗？',
            showBtnNumber: 2,
            btnDefault: '取消',
            btnInfo: '确认',
            // 指定图表的配置项和数据
            option: {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['小颖爱吃的水果']
                },
                // toolbox: {
                //     //show: true,
                //     feature: {
                //         dataZoom: {
                //             yAxisIndex: 'none'
                //         },
                //         dataView: {
                //             readOnly: false
                //         },
                //         magicType: {
                //             type: ['line']
                //         },
                //         restore: {},
                //         saveAsImage: {}
                //     }
                // },
                xAxis: {
                    type: 'category',
                    boundaryGap: false, //坐标轴两边不留白。
                    data: ["香蕉", "苹果", "榴莲", "芒果", "火龙果", "葡萄"]
                },
                yAxis: {
                    min: 0,
                    max: 100,
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} %'
                    }
                },
                series: [{
                    name: '小颖爱吃的水果',
                    type: 'line',
                    data: [15, 20, 10, 30, 15, 10],
                    markPoint: {
                        data: [{
                            type: 'max',
                            name: '小颖最喜欢吃的水果'
                        }]
                    },
                    markLine: {
                        data: [
                            [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            }, {
                                symbol: 'circle',
                                label: {
                                    normal: {
                                        position: 'start',
                                        formatter: '最喜欢的水果'
                                    }
                                },
                                type: 'max',
                                name: '最高点'
                            }]
                        ]
                    }
                }]
            }
        }
    }
}
</script>
<style>
.user-log {
    width: 35px;
    height: 35px;
}

.app-header-menu {
    background: #ffdede;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 52px;
    margin: 0 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.nav.nav-tabs.navigation {
    height: 52px;
    border: 0px;
}

.menu-left .nav-tabs>li {
    text-align: center;
    margin-bottom: 1px;
    width: 106px;
}

.menu-left .nav-tabs>li>a {
    line-height: 31px;
}

.menu-left,
.menu-right.log-out {
    width: 430px;
}

.menu-left>.nav.nav-tabs.navigation a:hover {
    background-color: #c1eff5;
}

.menu-left {
    padding-left: 100px;
    font-size: 18px;
}

.menu-right.log-out {
    text-align: right;
    height: 44px;
    line-height: 43px;
    margin-left: 350px;
    margin-right: -77px;
}

.app-header-profile-entry {
    display: inline-block;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
    height: auto;
    padding: 0;
    line-height: inherit;
    background-color: transparent;
}

.app-header-profile-entry,
.app-header-profile-entry:hover,
.app-header-profile-entry:focus {
    border: 0px;
    outline: none;
    background-color: transparent;
    /*消除默认点击蓝色边框效果*/
}

.is-active {
    color: #333;
}

.header-nav-item {
    padding: 0 15px;
    line-height: 30px;
    color: #8590a6;
}

a {
    color: inherit;
    text-decoration: none;
}

.user-center {
    margin-top: 184px;
}

.user-center .nav>li>a {
    padding: 5px 15px;
}

label.app-header-user-name {
    font-size: 18px;
    font-weight: 100;
    padding: 0 15px;
    color: #8590a6;
    display: initial;
}

.user-center div.menu {
    position: relative;
    border: 1px solid #c2e1f5;
    padding: 10px;
    width: 120px;
    height: 110px;
    border-radius: 6px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.user-center div.menu:before,
.user-center div.menu:after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border: solid transparent;
    pointer-events: none;
    content: "";
    border-color: rgba(136, 183, 213, 0);
}

.user-center div.menu:before {
    border-bottom-color: #c2e1f5;
    border-width: 12px;
    left: 49%;
    margin-left: -10px;
    bottom: 100%;
}

.user-center div.menu:after {
    border-bottom-color: #fff;
    border-width: 10px;
    left: 50%;
    margin-left: -10px;
    bottom: 100%;
}

.top-story-container {
    padding-top: 35px;
    width: 800px;
    margin: 0 auto;
}
</style>
