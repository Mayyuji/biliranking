<template>
  <div class="ranklist-one">
    <div
      class="content font-28"
      v-for="(item, index) in this.list"
      :key="item.aid"
    >
      <div class="pts">{{ index + 1 }}</div>
      <div class="img">
        <a :href="`http://www.bilibili.com/video/${item.bvid}`"
          ><img :src="item.pic"
        /></a>
      </div>
      <div class="info">
        <a href="http://www.bilibili.com/video/BV1pD4y1R7uE" class="title">{{
          item.title
        }}</a>
        <div class="detail">
          <div class="data-box up-name">
            <van-icon name="manager" />
            <span class="upname">{{ item.owner.name }}</span>
          </div>
          <section>
            <span class="data-box"
              ><van-icon name="video" /> {{ item.stat.view | Tenthousand }}
            </span>
            <span class="data-box"
              ><van-icon name="label" /> {{ item.stat.danmaku | Tenthousand }}
            </span>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as GET from "@/api/getlist";
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);
export default {
  name: "ranklist-one",
  data() {
    return {
      list: {}
    };
  },
  methods: {},
  created() {
    switch (Number(this.$route.meta.index)) {
      case 0:
        GET.Ranking().then(res => {
          this.list = res.data.data.list;
          console.log(this.list);
        });
        break;
      case 1:
        GET.Comprehensive().then(res => {
          this.list = res.data.data.list;
          console.log(this.list);
        });
        break;
      case 2:
        GET.Eweek().then(res => {
          this.list = res.data.data.list;
          console.log(this.list);
        });
        break;
      case 3:
        GET.Brushed().then(res => {
          this.list = res.data.data.list;
          console.log(this.list);
        });
        break;
      default:
        break;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/styles/mixins.scss";
.ranklist-one {
  padding-bottom: 50px;
  .content {
    background-color: transparent; // #f2f3f5;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    .img {
      width: 120px;
      overflow: hidden;
      border-radius: 10px;
      img {
        display: block;
        width: 100%;
      }
    }
    .info {
      flex: 1;
      padding-left: 6px;
      padding-left: 15px;
      .title {
        margin-right: 10px;
        line-height: 20px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .detail {
        display: flex;
        text-align: left;
        flex-direction: column;
        padding-top: 10px;
        line-height: 120%;
      }
      .van-icon {
        color: #98a2aa;
      }
    }
    .pts {
      -webkit-font-smoothing: antialiased;
      text-size-adjust: none;
      list-style: none;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      width: 38px;
      line-height: 70px;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      color: #b8c0cc;
    }
  }
}
</style>
