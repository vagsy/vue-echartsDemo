<template>
<div class="prompt-template">
    <div class="prompt-mask">
        <div class="prompt-wrapper">
            <div class="prompt-container">
                <form class="form-horizontal">
                    <div class="form-group prompt-header">
                        <slot name="header">
                            <div class="col-md-6 message-wording">{{headermessage}}</div>
                            <div class="col-md-6 message-right" v-if="showcon" @click="iconfun">
                                <span v-bind="{ class: iconclsaa}"></span>
                            </div>
                        </slot>
                    </div>
                    <div class="form-group prompt-body">
                        <slot name="body">
                            <div class="col-md-6 message-confirm">{{bodymessage}}</div>
                        </slot>
                    </div>
                    <div class="form-group prompt-footer">
                        <slot name="footer">
                            <div class="col-md-7 col-md-offset-5" v-if="showbtnnumber==2">
                                <button type="button" name="button" class="btn btn-default" @click="defaultfun">{{btndefault}}</button>
                                <button type="button" name="button" class="btn btn-info confirm-btn" @click="infofun">{{btninfo}}</button>
                            </div>
                            <div class="col-md-5 col-md-offset-7" v-if="showbtnnumber==1">
                                <button type="button" name="button" class="btn btn-default" @click="btnmessagefun">{{btnmessage}}</button>
                            </div>
                        </slot>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    components: {},
    props: {
        headermessage: {
            type: String, //类型(原生构造器：String, Number, Boolean, Function, Object, Array),如果绑定类型不对将抛出一条警告
            required: true, //是否是必须项
            default: '提示' //默认值
        },
        showcon: {
            type: Boolean,
            default: false
        },
        iconclsaa: {
            type: String,
            default: 'glyphicon glyphicon-remove'
        },
        bodymessage: {
            type: String,
            required: true,
            default: '确认退出吗？'
        },
        showbtnnumber: {
            type: Number,
            default: 2
        },
        btndefault: {
            type: String,
            default: '取消'
        },
        btninfo: {
            type: String,
            default: '确认'
        },
        btnmessage: {
            type: String,
            default: 'OK'
        },
        iconfun: {
            type: Function
        },
        defaultfun: {
            type: Function
        },
        infofun: {
            type: Function
        },
        btnmessagefun: {
            type: Function
        }
    },
    mounted: function() {},
    methods: {},
    data() {
        return {}
    }
}
</script>

<style>
.prompt-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
}

.prompt-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.prompt-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
}

.prompt-body {
    margin: 20px 0;
}

.col-md-6.message-wording {
    font-size: 18px;
    font-weight: bold;
}

.col-md-6.message-confirm {
    color: #8590a6;
    font-size: 15px;
}

.message-right {
    text-align: right;
}

.form-group.prompt-footer {
    text-align: right;
}
</style>
