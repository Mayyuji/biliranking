<template>
  <div class="home">
    <van-nav-bar :class="classObject">
      <template #left>
        <userpanel></userpanel>
      </template>
      <template #right>
        <div>46456465</div>
      </template>
    </van-nav-bar>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(item, index) in icon.active"
        :key="index"
        @click="selectload"
      >
        <span>{{ item.name }}</span>
        <template #icon="props">
          <img :src="props.active ? item.src : item.src" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import userpanel from "@/components/userpanel";
export default {
  name: "home",
  data() {
    return {
      active: 0,
      icon: {
        active: [
          { name: "排行榜", src: "./images/icon_rank.png" },
          { name: "综合热门", src: "./images/icon_popular.png" },
          { name: "每周必看", src: "./images/icon_weekly.png" },
          { name: "入站必刷", src: "./images/icon_history.png" },
        ],
      },
    };
  },
  components: {
    userpanel,
  },
  methods: {
    selectload() {
      let index = this.active;
      console.log(index);
      switch (index) {
        case 3:
          this.$router.push("/home/brushed");
          break;
        case 2:
          this.$router.push("/home/everyweek");
          break;
        case 1:
          this.$router.push("/home/popular");
          break;
        case 0:
          this.$router.push("/home");
          break;
        default:
          this.$router.push("/home");
          break;
      }
    },
  },
  computed: {
    classObject: function () {
      return {
        pink: this.active === 0,
        red: this.active === 1,
        yellow: this.active === 2,
        orange: this.active === 3,
      };
    },
  },
};
</script>
<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    .van-nav-bar {
      height: 44px;
      .van-nav-bar__text {
        font-size: 20px;
        font-weight: bold;
        color: rgb(255, 255, 255);
      }
    }
    .Leaderboard,
    .eweeks,
    .popular,
    .brushed {
      flex: 1;
      overflow: auto;
    }
    .pink {
      background-color: #fb7299;
    }
    .red {
      background-color: #ff716d;
    }
    .yellow {
      background-color: #ffe37e;
    }
    .orange {
      background-color: #f0900b;
    }
    .van-hairline--top-bottom {
      background-color: rgb(247, 213, 213);
      z-index: 0;
      .van-tabbar-item {
        margin: 0 15px;
        border-radius: 50%;
      }
    }
  }
</style>
