<template>
  <div class="home">
    <!-- 欢迎页 -->
    <div class="inner">
      <!-- <img src="gif/logo.gif" alt="logo" /> -->
      <lottie-player src="https://lottie.host/90677f08-449b-4fa2-ab83-0f6efc0d2434/dR0Gjc0B3n.json" background="transparent" speed="1.2" style="width: 180px; height: 180px" direction="1" mode="normal" loop autoplay></lottie-player>
      <p>欢迎来到刘慈欣的科幻世界</p>
      <el-button @click="openDrawer" type="primary" size="small">开始听书</el-button>
    </div>
    <router-link to="/about" class="about">关于我</router-link>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    openDrawer() {
      this.$bus.$emit("openDrawer");
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner {
    margin-top: -20vh;
    img {
      width: 50vw;
      max-width: 250px;
    }
    p {
      font-size: 17px;
      margin: 0 0 30px;
    }
  }
  .about {
    position: absolute;
    bottom: 30px;
    font-size: 14px;
    color: #333;
    text-decoration: none;
    border-bottom: 1px solid;
  }
}
lottie-player {
  margin: 30px auto;
}
</style>
