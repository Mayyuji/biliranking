<template>
  <div class="brushed">
    入站必刷
    <p>https://api.bilibili.com/x/web-interface/ranking/v2?rid=0&type=all</p>
    <p>https://api.bilibili.com/x/web-interface/popular/series/one?number=86</p>
    <p>
      https://api.bilibili.com/x/web-interface/popular/precious?page_size=100&page=1
    </p>
    <p>https://api.bilibili.com/x/web-show/res/locs?pf=0&ids=136%2C138</p>
  </div>
</template>

<script>
export default {
  name: "brushed",
  methods: {},
  created() {
    console.log(this.$route);
  }
};
</script>
