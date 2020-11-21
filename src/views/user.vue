<template>
  <div class="login-register">
    <van-nav-bar
      title="登录bilibili"
      @click-right="onClickRight"
      class="login-header"
    >
      <template #right>
        <span size="18">账号密码登录</span>
      </template>
    </van-nav-bar>
    <ul class="list-group list-group-border">
      <li class="list-group-li">
        <div class="input-item clearfix text-box-color">
          <span class="float-left input-title text-title-color">账号</span>
          <input
            placeholder="你的手机号/邮箱"
            type="text"
            name="username"
            autocomplete="on"
            class="input-text text-title-color long-width"
          />
          <div class="float-left input-status clearfix">
            <!---->
          </div>
          <!---->
        </div>
      </li>
      <li class="list-group-li">
        <div class="input-item clearfix text-box-color">
          <span class="input-title text-title-color">密码</span>
          <input
            placeholder="请输入密码"
            type="text"
            name="username"
            autocomplete="on"
            class="input-text text-title-color long-width"
          />
          <div class="input-status clearfix">
            <!---->
          </div>
          <!---->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";

Vue.use(NavBar);
export default {
  name: "user",
};
</script>
<style lang="scss" scoped>
  .login-register {
    height: 100%;
    background-color: #f4f4f4;
    .login-header {
      margin-bottom: 20px;
    }
    .list-group-border {
      border-bottom: 1px solid #e7e7e7;
      .input-item {
        border-bottom: none;
        .input-text {
          line-height: 0.533333rem;
          padding: 0.32rem 0;
          height: 1.173333rem;
          border: none;
          width: 3.76rem;
          background: none;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          font-family: PingFangSC-Regular;
          font-size: 0.373333rem;
        }
      }
      .long-width {
        width: 6.746667rem;
      }

      .input-title {
        min-height: 1.173333rem;
        line-height: 1.173333rem;
        width: 2.026667rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        padding-right: 20px;
        font-family: PingFangSC-Regular;
        font-size: 0.373333rem;
      }
      .list-group-li {
        background: #fff;
        padding: 0 20px;
      }
    }
  }
</style>