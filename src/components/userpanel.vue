<template>
  <div class="user-panel">
    <div class="userpic">
      <img
        @click="showPopup"
        src="../assets/images/userpic.jpg"
        v-if="!islogin"
      />
      <img @click="showPopup" src="../assets/images/nologin.png" />
    </div>
    <van-popup
      v-model="show"
      position="left"
      :style="{ width: '40%', height: '100%' }"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { Popup } from "vant";
Vue.use(Popup);
export default {
  name: "user-panel",
  data() {
    return {
      show: false,
      islogin: false,
    };
  },

  methods: {
    showPopup() {
      if (this.islogin) {
        this.$router.replace("/user");
      } else {
        this.$router.replace("/user");
      }
      // this.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
  .userpic {
    padding-top: 1px;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    overflow: hidden;
    img {
      height: 100%;
    }
  }
</style>